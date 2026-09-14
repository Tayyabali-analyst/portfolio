const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const welcomeGate = document.querySelector('#welcome-gate');
const visitorForm = document.querySelector('#visitor-form');
const visitorName = document.querySelector('#visitor-name');
const visitCount = document.querySelector('#visit-count');
const visitorList = document.querySelector('#visitor-list');

function renderVisitors() {
  const visitors = JSON.parse(localStorage.getItem('tayyabVisitors') || '[]');
  visitCount.textContent = visitors.length;
  visitorList.innerHTML = visitors.length ? visitors.slice(-5).reverse().map((name) => `<li>${name}</li>`).join('') : '<li>No visitors yet.</li>';
}

function showPortfolio() {
  welcomeGate.classList.add('hidden');
  document.body.classList.remove('gate-open');
}

if (localStorage.getItem('tayyabCurrentVisitor')) showPortfolio();
else {
  document.body.classList.add('gate-open');
  visitorName.focus();
}

visitorForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = visitorName.value.trim().replace(/[<>]/g, '');
  if (!name) return;
  const visitors = JSON.parse(localStorage.getItem('tayyabVisitors') || '[]');
  visitors.push(name);
  localStorage.setItem('tayyabVisitors', JSON.stringify(visitors.slice(-50)));
  localStorage.setItem('tayyabCurrentVisitor', name);
  renderVisitors();
  showPortfolio();
});

renderVisitors();

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
