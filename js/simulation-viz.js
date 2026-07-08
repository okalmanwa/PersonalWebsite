(() => {
  const frame = document.querySelector('.simulation-viz__frame');
  const canvas = frame?.querySelector('.simulation-viz__canvas');
  if (!frame || !canvas) return;

  const ctx = canvas.getContext('2d');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const palette = ['#6a1e1e', '#832d2d', '#4a5568', '#7a4a4a', '#5c5c5c'];
  const tileA = '#f6efef';
  const tileB = '#f0eaea';
  const hairline = '#eae8e8';

  const agents = Array.from({ length: 8 }, (_, i) => ({
    color: palette[i % palette.length],
    gx: 2 + (i * 2) % 12,
    gy: 2 + Math.floor(i / 3) * 2,
    tx: 2 + (i * 2) % 12,
    ty: 2 + Math.floor(i / 3) * 2,
  }));

  let width = 0;
  let height = 0;
  let dpr = 1;
  let tick = 0;

  const lerp = (a, b, t) => a + (b - a) * t;

  function pickTarget(agent) {
    agent.tx = 1.5 + Math.random() * 12;
    agent.ty = 1.5 + Math.random() * 7;
  }

  function layout() {
    const rect = frame.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(320, Math.round(rect.width));
    height = Math.round(width * 0.46);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, width, height);

    const pad = 18;
    const w = width - pad * 2;
    const h = height - pad * 2;
    const cols = 14;
    const rows = 9;
    const tile = Math.floor(Math.min(w / cols, h / rows));
    const originX = pad + (w - tile * cols) / 2;
    const originY = pad + (h - tile * rows) / 2;

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        ctx.fillStyle = (row + col) % 2 ? tileA : tileB;
        ctx.fillRect(originX + col * tile, originY + row * tile, tile, tile);
      }
    }

    ctx.strokeStyle = hairline;
    ctx.lineWidth = 1;
    ctx.strokeRect(originX + 0.5, originY + 0.5, tile * cols - 1, tile * rows - 1);

    const points = agents.map((agent) => {
      agent.gx = lerp(agent.gx, agent.tx, reduced ? 1 : 0.04);
      agent.gy = lerp(agent.gy, agent.ty, reduced ? 1 : 0.04);
      return {
        agent,
        x: originX + (agent.gx + 0.5) * tile,
        y: originY + (agent.gy + 0.5) * tile,
      };
    });

    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const a = points[i];
        const b = points[j];
        const dist = Math.hypot(a.agent.gx - b.agent.gx, a.agent.gy - b.agent.gy);
        if (dist < 2.5) {
          ctx.strokeStyle = 'rgba(106, 30, 30, 0.16)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    points.forEach(({ agent, x, y }) => {
      const radius = tile * 0.22;
      ctx.fillStyle = agent.color;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    tick += 1;
    if (!reduced && tick % 110 === 0) {
      pickTarget(agents[Math.floor(Math.random() * agents.length)]);
    }
  }

  function loop() {
    draw();
    if (!reduced) requestAnimationFrame(loop);
  }

  agents.forEach(pickTarget);
  layout();
  loop();

  const reveal = frame.closest('.reveal');
  if (reveal && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        layout();
        draw();
      }
    }, { threshold: 0.08 });
    io.observe(reveal);
  }

  if ('ResizeObserver' in window) {
    new ResizeObserver(() => {
      layout();
      if (reduced) draw();
    }).observe(frame);
  } else {
    window.addEventListener('resize', () => {
      layout();
      if (reduced) draw();
    }, { passive: true });
  }
})();
