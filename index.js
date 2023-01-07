/* menu interaction elements */
const menuIconElement = document.getElementById('menu-icon');
const menuElement = document.getElementById('menu');
const closeMenuElement = document.getElementById('close-menu-icon');
const navElement = document.getElementById('nav');
const logoElement = document.getElementById('logo');
const menuLinks = document.querySelectorAll('.menu-link');

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

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
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
});

let projectCardData = [
  {
    header: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    stack: ['html', 'bootstrap', 'Ruby'],
    buttonText: 'See Project',
    buttonUrl: '#',
  },
  {
    header: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    stack: ['html', 'bootstrap', 'Ruby'],
    buttonText: 'See Project',
    buttonUrl: '#',
  },
  {
    header: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    stack: ['html', 'bootstrap', 'Ruby'],
    buttonText: 'See Project',
    buttonUrl: '#',
  },
  {
    header: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    stack: ['html', 'bootstrap', 'Ruby'],
    buttonText: 'See Project',
    buttonUrl: '#',
  },
  {
    header: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    stack: ['html', 'bootstrap', 'Ruby'],
    buttonText: 'See Project',
    buttonUrl: '#',
  },
  {
    header: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    stack: ['html', 'bootstrap', 'Ruby'],
    buttonText: 'See Project',
    buttonUrl: '#',
  },
];
if (window.screen.width >= 768) {
  projectCardData = [
    {
      header: ' ',
      description: ' ',
      stack: [' ', ' ', ' '],
      buttonText: 'See Project',
      buttonUrl: '#',
    },
    {
      header: 'Data Dashboard Healthcare',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      stack: ['html', 'bootstrap', 'Ruby'],
      buttonText: 'See Project',
      buttonUrl: '#',
    },
    {
      header: 'Website Protfolio',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      stack: ['html', 'bootstrap', 'Ruby'],
      buttonText: 'See Project',
      buttonUrl: '#',
    },
    {
      header: 'Profesional Art Printing Data More',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      stack: ['html', 'bootstrap', 'Ruby'],
      buttonText: 'See Project',
      buttonUrl: '#',
    },
    {
      header: 'Data Dashboard Healthcare',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      stack: ['html', 'bootstrap', 'Ruby'],
      buttonText: 'See Project',
      buttonUrl: '#',
    },
    {
      header: 'Website Portfolio',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      stack: ['html', 'bootstrap', 'Ruby'],
      buttonText: 'See Project',
      buttonUrl: '#',
    },
  ];
}

// a function to generate the project cards
function createProjectCard(data) {
  // project card element
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  // header element
  const headerElement = document.createElement('h2');
  headerElement.classList.add('header-text');
  headerElement.textContent = data.header;

  // description element
  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('description2-text');
  descriptionElement.textContent = data.description;

  // stack list on project card
  const stackList = document.createElement('ul');
  stackList.classList.add('stack-list');

  for (let i = 0; i < data.stack.length; i += 1) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.textContent = data.stack[i];
    listItem.appendChild(link);
    stackList.appendChild(listItem);
  }

  // Create the button element and set its text content and click event listener
  const button = document.createElement('button');
  button.classList.add('pjt-button', 'main-btn');
  button.textContent = data.buttonText;
  button.addEventListener('click', () => {
    window.location.href = data.buttonUrl;
  });

  projectCard.appendChild(headerElement);
  projectCard.appendChild(descriptionElement);
  projectCard.appendChild(stackList);
  projectCard.appendChild(button);

  return projectCard;
}

const projectsContainer = document.createElement('div');
projectsContainer.className = 'projects';
for (let a = 0; a < projectCardData.length; a += 1) {
  const projectCard = createProjectCard(projectCardData[a]);
  projectsContainer.appendChild(projectCard);
}
const works = document.getElementById('works');
works.insertBefore(projectsContainer, works.children[2]);

/* modal popup window elements */
const projectButtonElements = document.querySelectorAll('.pjt-button');

const createModalContentElements = (i) => {
  const popupProjectName = document.createElement('h2');
  popupProjectName.classList.add('modal-heading', 'header-text');
  popupProjectName.textContent = `Project ${i + 1}`;
  const popupStack1 = document.createElement('span');
  popupStack1.classList.add('modal-stacks');
  popupStack1.textContent = 'Html';
  const popupStack2 = document.createElement('span');
  popupStack2.classList.add('modal-stacks');
  popupStack2.textContent = 'Bootstrap';
  const popupStack3 = document.createElement('span');
  popupStack3.classList.add('modal-stacks');
  popupStack3.textContent = 'Ruby on Rails';
  const div1 = document.createElement('div');
  div1.classList.add('divide');
  const div2 = document.createElement('div');
  div2.classList.add('illustration');
  const modalDescription = document.createElement('p');
  modalDescription.classList.add('modal-description', 'description2-text');
  modalDescription.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
  const popupButton1 = document.createElement('a');
  popupButton1.classList.add('main-btn', 'see-live');
  popupButton1.href = 'https://www.google.com/';
  popupButton1.textContent = 'See live';
  const popupButton2 = document.createElement('a');
  popupButton2.classList.add('main-btn', 'see-source');
  popupButton2.href = 'https://github.com/Reggeditt/Portfolio/';
  popupButton2.textContent = 'See source';

  return [
    popupProjectName,
    div1,
    popupStack1,
    popupStack2,
    popupStack3,
    div1,
    div2,
    modalDescription,
    popupButton1,
    popupButton2,
    div1,
  ];
};

const modalContainerElement = document.createElement('div');
modalContainerElement.id = 'project-modal-container';
const modalContentElement = document.createElement('div');
modalContentElement.id = 'project-modal-content';
const closeModalIconElement = document.createElement('img');
closeModalIconElement.id = 'close-modal-icon';
closeModalIconElement.src = 'assets/images/menu-close-icon.png';
modalContentElement.appendChild(closeModalIconElement);

for (let i = 0; i < projectButtonElements.length; i += 1) {
  projectButtonElements[i].addEventListener('click', () => {
    const modalContentElements = createModalContentElements(i);
    for (let j = 0; j < modalContentElements.length; j += 1) {
      modalContentElement.appendChild(modalContentElements[j]);
    }
    if (modalContainerElement.style.display === 'none') {
      modalContainerElement.style.display = 'none';
    } else {
      modalContainerElement.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  });
}

modalContainerElement.appendChild(modalContentElement);
document.body.appendChild(modalContainerElement);

// modal close button
closeModalIconElement.addEventListener('click', () => {
  modalContainerElement.style.display = 'none';
  window.location.reload();
  document.body.style.overflow = 'auto';
});