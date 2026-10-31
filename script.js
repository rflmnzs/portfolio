const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
const status = document.getElementById('filter-status');

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    let count = 0;
    projects.forEach(project => {
      const visible = button.dataset.filter === 'all' || project.dataset.category === button.dataset.filter;
      project.hidden = !visible;
      if (visible) count++;
    });
    status.textContent = count + ' projetos exibidos.';
  });
});

if ('IntersectionObserver' in window) {
  const links = document.querySelectorAll('.header nav a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
