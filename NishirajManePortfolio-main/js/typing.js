// Detect scroll and toggle fade class on hero and nav
window.addEventListener('scroll', () => {
  const heroSection = document.querySelector('.hero');
  const nav = document.querySelector('.floating-nav');
  const fadeElements = document.querySelectorAll('.fade-control');

  const aboutSection = document.getElementById('about');
  const triggerPoint = aboutSection.getBoundingClientRect().top;

  if (triggerPoint < window.innerHeight * 0.8) {
    fadeElements.forEach(el => el.classList.add('fade-out'));
  } else {
    fadeElements.forEach(el => el.classList.remove('fade-out'));
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        successMessage.classList.remove('hidden');
        form.reset();
        setTimeout(() => successMessage.classList.add('hidden'), 4000);
      }
    });
  });
});

