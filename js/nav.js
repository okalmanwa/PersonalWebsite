(() => {
  const nav = document.getElementById('site-nav');
  const burger = document.getElementById('nav-burger');
  const menu = document.getElementById('nav-menu');
  if (!nav || !burger || !menu) return;

  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  burger.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  const path = window.location.pathname;
  const onHome = path === '/' || path === '/index.html';
  if (!onHome) return;

  const sectionHrefs = ['/', '/#research', '/#projects'];
  const anchors = new Map(
    sectionHrefs
      .map((href) => {
        const a = menu.querySelector(`a[href="${href}"]`);
        return a ? [href, a] : null;
      })
      .filter(Boolean)
  );

  const setSectionActive = (href) => {
    anchors.forEach((a, h) => {
      if (href === h) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  };

  const updateSectionNav = () => {
    const offset = nav.offsetHeight + 32;
    const research = document.getElementById('research');
    const projects = document.getElementById('projects');
    const researchTop = research?.getBoundingClientRect().top ?? Infinity;
    const projectsTop = projects?.getBoundingClientRect().top ?? Infinity;

    if (projectsTop <= offset) setSectionActive('/#projects');
    else if (researchTop <= offset) setSectionActive('/#research');
    else setSectionActive('/');
  };

  updateSectionNav();
  window.addEventListener('scroll', updateSectionNav, { passive: true });
  window.addEventListener('resize', updateSectionNav, { passive: true });
})();
