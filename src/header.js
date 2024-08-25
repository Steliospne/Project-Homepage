module.exports = function headerComponent() {
  const header = document.createElement("header");
  const heroSrc = require("./assets/images/hero.jpg");

  header.innerHTML = `
  <img class="heroImg" src="${heroSrc}">
  `;

  return header;
};
