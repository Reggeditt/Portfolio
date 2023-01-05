/* menu interaction elements */
const menuIconElement = document.getElementById('menu-icon');
const menuElement = document.getElementById('menu');
const closeMenuElement = document.getElementById('close-menu-icon');
const navElement = document.getElementById('nav');
const logoElement = document.getElementById('logo');
const menuLinkPortfolioElement = document.getElementById('menu-link-portfolio');
const menuLinkAboutElement = document.getElementById('menu-link-about');
const menuLinkContactElement = document.getElementById('menu-link-contact');

// menu icon code starts here
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

/* modal popup window elements */
const projectButtonElements = document.getElementsByClassName('pjt-button');
const projectModalContentElements = document.getElementsByClassName('project-modal-content');
const modalContainerElement = document.getElementById('modal-container');
const closeModalIconElement = document.getElementById('close-modal-icon');

const popupProjectName = document.createElement('h2');
popupProjectName.className = 'modal-heading header-text';
const popupStack1 = document.createElement('span');
popupStack1.className = 'modal-stacks';
const popupStack2 = document.createElement('span');
popupStack2.className = 'modal-stacks';
const popupStack3 = document.createElement('span');
popupStack3.className = 'modal-stacks';
const div1 = document.createElement('div');
div1.className = 'divide';
const div2 = document.createElement('div');
div2.className = 'illustration works-img';
const description = document.createElement('p');
description.className = 'modal-description description2-text';
const popupButton1 = document.createElement('a');
popupButton1.className = 'main-btn see-live';
popupButton1.href = 'https://www.google.com/';
const popupButton2 = document.createElement('a');
popupButton2.className = 'main-btn see-source';
popupButton2.href = 'https://github.com/Reggeditt/Portfolio/';

for (let i = 0; i < projectButtonElements.length; i += 1) {
  projectButtonElements[i].addEventListener('click', () => {
    const modalChildElements = [
      popupProjectName,
      div1,
      popupStack1,
      popupStack2,
      popupStack3,
      div1,
      div2,
      description,
      popupButton1,
      popupButton2,
      div1];

    // Set the innerHTML of each child element
    modalChildElements[0].innerHTML = `Project ${i + 1}`;
    modalChildElements[2].innerHTML = 'Html';
    modalChildElements[3].innerHTML = 'Bootstrap';
    modalChildElements[4].innerHTML = 'Ruby on rails';
    modalChildElements[7].innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
    modalChildElements[8].innerHTML = 'See live';
    modalChildElements[9].innerHTML = 'see source';

    for (let i = 0; i < projectModalContentElements.length; i += 1) {
      for (let j = 0; j < modalChildElements.length; j += 1) {
        projectModalContentElements[0].appendChild(modalChildElements[j].cloneNode(true));
      }
    }
    modalContainerElement.style.display = 'block';
  });

  closeModalIconElement.addEventListener('click', () => {
    modalContainerElement.style.display = 'none';
    window.location.reload();
  });

  window.onclick = (event) => {
    if (event.target === modalContainerElement) {
      modalContainerElement.style.display = 'none';
      window.location.reload();
    }
  };
}
