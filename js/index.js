const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', "img/logo.png");

const headerNav = document.querySelectorAll('header nav a');
headerNav[0].textContent = 'Services';
headerNav[1].textContent = 'Product';
headerNav[2].textContent = 'Vision';
headerNav[3].textContent = 'Features';
headerNav[4].textContent = 'About';
headerNav[5].textContent = 'Contact';

// const headerImg = document.querySelector('#logo-img');
// headerImg.src = 'img/logo.png';
const lineBreak2 = document.createElement('br');
const lineBreak1 = document.createElement('br');
const lineBreak = document.createElement('br');
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = 'DOM';
ctaH1.append(lineBreak1);
ctaH1.append('Is');
ctaH1.append(lineBreak2);
ctaH1.append('Awesome');


const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = 'Get Started';

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';

const topH4 = document.querySelectorAll('.top-content h4');
topH4[0].textContent = 'Features';
topH4[1].textContent = 'About';
const topP = document.querySelectorAll('.top-content p');
topP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
topP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const midImg = document.querySelector('.middle-img');
midImg.src = 'img/mid-page-accent.jpg';

const bottomH4 = document.querySelectorAll('.bottom-content h4');
bottomH4[0].textContent = 'Services';
bottomH4[1].textContent = 'Product';
bottomH4[2].textContent = 'Vision';
const bottomP = document.querySelectorAll('.bottom-content p');
bottomP[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomP[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomP[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = 'Contact'
const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = '123 Way 456 Street';
contactP[0].append(lineBreak);
contactP[0].append('Somewhere, USA');
contactP[1].textContent = '1 (888) 888-8888';
contactP[2].textContent = 'sales@greatidea.io';

const footerP = document.querySelector('footer p');
footerP.textContent = 'Copyright Great Idea! 2018';
