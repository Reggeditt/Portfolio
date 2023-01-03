const menuIconElement = document.getElementById('menu-icon');
const menuElement = document.getElementById('menu');
const closeMenuElement = document.getElementById('close-menu-icon');
const navElement = document.getElementById('nav');
const logoElement = document.getElementById('logo');
const menuLinkPortfolioElement = document.getElementById('menu-link-portfolio');
const menuLinkAboutElement = document.getElementById('menu-link-about');
const menuLinkContactElement = document.getElementById('menu-link-contact');

// if (window.screen.width >= 768) {
//   menuIconElement.style.display = 'none';
// } else menuIconElement.style.display = 'block';

  menuIconElement.addEventListener('click', () => {
    menuElement.style.display = 'flex';
    menuIconElement.style.display = 'none';
    logoElement.style.display = 'none';
    navElement.style.width = '100%';
    navElement.style.height = '100vh';
    navElement.style.paddingTop = '20px';
    navElement.style.paddingBottom = '75%';
  });
  
  closeMenuElement.addEventListener('click', () => {
    menuElement.style.display = 'none';
    menuIconElement.style.display = 'inline-block';
    logoElement.style.display = 'inline-block';
    navElement.style.width = 'fit-content';
    navElement.style.height = '18px';
    navElement.style.paddingTop = '0';
    navElement.style.paddingBottom = '0';
  });
  
  menuLinkPortfolioElement.addEventListener('click', () => {
    if (window.screen.width < 768) {
    menuElement.style.display = 'none';
    menuIconElement.style.display = 'inline-block';
    logoElement.style.display = 'inline-block';
    navElement.style.width = 'fit-content';
    navElement.style.height = '18px';
    navElement.style.paddingTop = '0';
    navElement.style.paddingBottom = '0';
    }
  });
  
  menuLinkAboutElement.addEventListener('click', () => {
    if (window.screen.width < 768) {
    menuElement.style.display = 'none';
    menuIconElement.style.display = 'inline-block';
    logoElement.style.display = 'inline-block';
    navElement.style.width = 'fit-content';
    navElement.style.height = '18px';
    navElement.style.paddingTop = '0';
    navElement.style.paddingBottom = '0';
    }
  });
  
  menuLinkContactElement.addEventListener('click', () => {
    if (window.screen.width < 768) {
    menuElement.style.display = 'none';
    menuIconElement.style.display = 'inline-block';
    logoElement.style.display = 'inline-block';
    navElement.style.width = 'fit-content';
    navElement.style.height = '18px';
    navElement.style.paddingTop = '0';
    navElement.style.paddingBottom = '0';
    }
  });

