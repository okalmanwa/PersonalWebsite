(() => {
  const cue = document.getElementById('scroll-cue');
  const hero = document.querySelector('.hero');
  if (!cue || !hero) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) cue.classList.add('scroll-cue--static');

  const setVisible = (show) => {
    cue.classList.toggle('is-hidden', !show);
  };

  const observer = new IntersectionObserver(
    ([entry]) => setVisible(entry.isIntersecting),
    { threshold: 0.15 }
  );

  observer.observe(hero);

  cue.addEventListener('click', () => {
    document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
  });
})();
