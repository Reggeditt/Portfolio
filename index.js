const menuIconElement = document.getElementById('menu-icon');
const menuElement = document.getElementById('menu');
const closeMenuElement = document.getElementById('close-menu-icon');
const navElement = document.getElementById('nav');
const logoElement = document.getElementById('logo');
const menuLinkPortfolioElement = document.getElementById('menu-link-portfolio');
const menuLinkAboutElement = document.getElementById('menu-link-about');
const menuLinkContactElement = document.getElementById('menu-link-contact');

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

// ----------------------- contact validation ---------------------------------
// const formElement = document.getElementById('contact-form');
// const formNameElement = document.getElementById('name');
// const formEmailElement = document.getElementById('email');

const formElements = {
  formElement: document.getElementById('contact-form'),
  formNameElement: document.getElementById('name'),
  formEmailElement: document.getElementById('email'),
  commentElement: document.getElementById('comment-box'),
  emailErrElement: document.getElementById('email-err'),
};

const formData = {
  errmessages: [],
  error: formElements.emailErrElement.value,
};

formElements.formElement.addEventListener('submit', (event) => {
  formData.name = formElements.formNameElement.value;
  formData.email = formElements.formEmailElement.value;
  formData.commentElement = formElements.commentElement.value;

  // const email = formData.formEmailElement.value;
  // formData.errmessages = [];
  if (formData.email.toLowerCase() !== formData.email) {
    event.preventDefault();
    formData.errmessages.push(
      'email must all be in lowercase letters. form was not submitted',
    );
    // const emailErrElement = document.getElementById('email-err');
    const [firstErrorMessage] = formData.errmessages;
    formElements.emailErrElement.innerText = firstErrorMessage;
  }
  localStorage.setItem('formData', JSON.stringify(formData));
});

formElements.formNameElement.addEventListener('click', () => {
  // alert(JSON.parse(window.localStorage.getItem('formData')).name);
  if (JSON.parse(window.localStorage.getItem('formData')).name !== null) {
    formElements.formNameElement.value = JSON.parse(window.localStorage.getItem('formData')).name;
  }
});

formElements.formEmailElement.addEventListener('click', () => {
  if (JSON.parse(window.localStorage.getItem('formData')).email !== null) {
    formElements.formEmailElement.value = JSON.parse(window.localStorage.getItem('formData')).email;
  }
});
