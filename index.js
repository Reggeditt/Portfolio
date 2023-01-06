const menuIconElement = document.getElementById("menu-icon");
const menuElement = document.getElementById("menu");
const closeMenuElement = document.getElementById("close-menu-icon");
const navElement = document.getElementById("nav");
const logoElement = document.getElementById("logo");
const menuLinkPortfolioElement = document.getElementById("menu-link-portfolio");
const menuLinkAboutElement = document.getElementById("menu-link-about");
const menuLinkContactElement = document.getElementById("menu-link-contact");

menuIconElement.addEventListener("click", () => {
  menuElement.style.display = "flex";
  menuIconElement.style.display = "none";
  logoElement.style.display = "none";
  navElement.style.width = "100%";
  navElement.style.height = "100vh";
  navElement.style.paddingTop = "20px";
  navElement.style.paddingBottom = "75%";
});

closeMenuElement.addEventListener("click", () => {
  menuElement.style.display = "none";
  menuIconElement.style.display = "inline-block";
  logoElement.style.display = "inline-block";
  navElement.style.width = "fit-content";
  navElement.style.height = "18px";
  navElement.style.paddingTop = "0";
  navElement.style.paddingBottom = "0";
});

menuLinkPortfolioElement.addEventListener("click", () => {
  if (window.screen.width < 768) {
    menuElement.style.display = "none";
    menuIconElement.style.display = "inline-block";
    logoElement.style.display = "inline-block";
    navElement.style.width = "fit-content";
    navElement.style.height = "18px";
    navElement.style.paddingTop = "0";
    navElement.style.paddingBottom = "0";
  }
});

menuLinkAboutElement.addEventListener("click", () => {
  if (window.screen.width < 768) {
    menuElement.style.display = "none";
    menuIconElement.style.display = "inline-block";
    logoElement.style.display = "inline-block";
    navElement.style.width = "fit-content";
    navElement.style.height = "18px";
    navElement.style.paddingTop = "0";
    navElement.style.paddingBottom = "0";
  }
});

menuLinkContactElement.addEventListener("click", () => {
  if (window.screen.width < 768) {
    menuElement.style.display = "none";
    menuIconElement.style.display = "inline-block";
    logoElement.style.display = "inline-block";
    navElement.style.width = "fit-content";
    navElement.style.height = "18px";
    navElement.style.paddingTop = "0";
    navElement.style.paddingBottom = "0";
  }
});

// ----------------------- contact validation ---------------------------------
const formElement = document.getElementById("contact-form");
const formNameElement = document.getElementById("name");
const formEmailElement = document.getElementById("email");

formElement.addEventListener("submit", (event) => {
  const email = formEmailElement.value;
  const errmessages = [];
  if (email.toLowerCase() !== email) {
    event.preventDefault();
    errmessages.push(
      "email must all be in lowercase letters. form was not submitted"
    );
    const emailErrElement = document.getElementById("email-err");
    const [firstErrorMessage] = errmessages;
    emailErrElement.innerText = firstErrorMessage;
  }
});

formNameElement.onchange = function () {
  localStorage.setItem("nameInput", formNameElement.value);
};

formEmailElement.onchange = function () {
  localStorage.setItem("emailInput", formEmailElement.value);
};

formNameElement.addEventListener("click", () => {
  if (window.localStorage.getItem("nameInput") !== null) {
    formNameElement.value = window.localStorage.getItem("nameInput");
  }
});

formEmailElement.addEventListener("click", () => {
  if (window.localStorage.getItem("emailInput") !== null) {
    formEmailElement.value = window.localStorage.getItem("emailInput");
  }
});
