// implementing the animation on scroll
const contactSection = document.querySelector('#contact');
const aboutSection = document.querySelector('#about');
const links = document.querySelectorAll('.nav-link');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // console.log(entry);
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

// implementing smooth scroll on site
const sectionObserver = new IntersectionObserver(revealSection, { threshold: 0.2 });
sectionObserver.observe(contactSection);
sectionObserver.observe(aboutSection);

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const ID = e.target.getAttribute('href');
    const target = document.querySelector(`${ID}`);
    if (ID == '#about' || ID == '#contact') {
      revealSection([{ isIntersecting: true, target }], sectionObserver);
    }
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// population inversion on the site
const linksContainer = document.querySelector('.nav-items');
linksContainer.addEventListener('mouseover', (e) => {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.add('fade');
  });
  e.target.classList.remove('fade');
});
linksContainer.addEventListener('mouseleave', (e) => {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('fade');
  });
});
