module.exports = function footer() {
  const footer = document.createElement("footer");
  const imgWrapper = document.createElement("div");
  const footerImage = document.createElement("img");
  const contactInfo = document.createElement("div");
  const contactMe = document.createElement("h2");
  const advertisement = document.createElement("p");
  const address = document.createElement("p");
  const addressIcon = document.createElement("img");
  const phone = document.createElement("p");
  const phoneIcon = document.createElement("img");
  const email = document.createElement("p");
  const emailIcon = document.createElement("img");
  const footerIcons = document.createElement("div");
  const gitBtn = document.createElement("button");
  const gitLink = document.createElement("a");
  const gitIcon = document.createElement("img");
  const linkedinBtn = document.createElement("button");
  const linkedinLink = document.createElement("a");
  const linkedinIcon = document.createElement("img");

  contactInfo.className = "contact-info";
  imgWrapper.className = "img-wrapper";
  footerImage.className = "image";
  footerIcons.className = "footer-icons";

  addressIcon.setAttribute("src", "./assets/images/map-marker.svg");
  phoneIcon.setAttribute("src", "./assets/images/phone-classic.svg");
  emailIcon.setAttribute("src", "./assets/images/email.svg");

  contactMe.textContent = "Contact Me";
  advertisement.textContent =
    "Let's connect if you see potential for us to create something great together!";
  address.innerHTML = "123 Innovation Lane, Suite 456, Creativetown, CT 78901";
  phone.innerHTML = "(555) 867-5309";
  email.innerHTML = "contact@brightideasstudio.com";

  address.prepend(addressIcon);
  phone.prepend(phoneIcon);
  email.prepend(emailIcon);

  gitBtn.className = "btn";
  linkedinBtn.className = "btn";

  footerImage.setAttribute("src", "./assets/images/hero_footer.jpg");

  gitLink.setAttribute("href", "https://github.com/Steliospne");
  linkedinLink.setAttribute(
    "href",
    "https://www.linkedin.com/in/stelios-pnevmatikakis-351a7116b/"
  );

  gitIcon.setAttribute("src", "./assets/images/github-original-wordmark.svg");
  linkedinIcon.setAttribute("src", "./assets/images/linkedin-original.svg");

  contactInfo.append(
    contactMe,
    advertisement,
    address,
    phone,
    email,
    footerIcons
  );

  gitLink.append(gitIcon);
  gitBtn.append(gitLink);
  linkedinLink.append(linkedinIcon);
  linkedinBtn.append(linkedinLink);
  footerIcons.append(gitBtn, linkedinBtn);

  imgWrapper.append(footerImage);

  footer.append(contactInfo, imgWrapper);
  return footer;
};
