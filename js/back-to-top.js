(() => {
  const threshold = 480;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.hidden = true;
  btn.innerHTML = '<span class="back-to-top__icon" aria-hidden="true">↑</span>';
  document.body.appendChild(btn);

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  const update = () => {
    const visible = window.scrollY > threshold;
    btn.hidden = !visible;
    btn.classList.toggle('is-visible', visible);
  };

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: motionQuery.matches ? 'auto' : 'smooth',
    });
  });

  update();
  window.addEventListener('scroll', update, { passive: true });
})();
