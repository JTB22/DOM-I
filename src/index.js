const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};
// Correct the nav links. Class names and text content.
const navItems = document.querySelectorAll('nav a');
navItems.forEach((item, index) => {
  item.textContent = siteContent['nav'][`nav-item-${index + 1}`];
  item.className = 'italic';
});
// Correct logo image. Src.
const logo = document.querySelector('#logo-img');
logo.src = siteContent['images']['logo-img'];

// Correct cta section (h1, button, img).
const cta = document.querySelector('.cta');
const ctaText = cta.querySelector('h1');
const ctaButton = cta.querySelector('button');
const ctaImg = cta.querySelector('img');
ctaText.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.src = siteContent['images']['cta-img'];

// Correct main content section (h4, p, img).
const mainContent = document.querySelector('.main-content');
const mainContentH4 = mainContent.querySelectorAll('h4');
const mainContentP = mainContent.querySelectorAll('p');
const mainContentImg = mainContent.querySelector('img');
mainContentH4[0].textContent = siteContent['main-content']['features-h4'];
mainContentP[0].textContent = siteContent['main-content']['features-content'];
mainContentH4[1].textContent = siteContent['main-content']['about-h4'];
mainContentP[1].textContent = siteContent['main-content']['about-content'];
mainContentH4[2].textContent = siteContent['main-content']['services-h4'];
mainContentP[2].textContent = siteContent['main-content']['services-content'];
mainContentH4[3].textContent = siteContent['main-content']['product-h4'];
mainContentP[3].textContent = siteContent['main-content']['product-content'];
mainContentH4[4].textContent = siteContent['main-content']['vision-h4'];
mainContentP[4].textContent = siteContent['main-content']['vision-content'];
mainContentImg.src = siteContent['images']['accent-img'];

// Correct contact section (h4, p).
const contact = document.querySelector('.contact');
const contactH4 = contact.querySelector('h4');
const contactP = contact.querySelectorAll('p');
contactH4.textContent = siteContent['contact']['contact-h4'];
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

// Correct footer section (a).
const footer = document.querySelector('footer a');
footer.textContent = siteContent['footer']['copyright'];
footer.className = 'bold';


console.log('project wired!')
