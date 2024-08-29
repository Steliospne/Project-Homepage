module.exports = function headerComponent() {
  const header = document.createElement("header");
  const styleEL = document.createElement("div");
  const wrapper = document.createElement("div");
  const imageWrapper = document.createElement("div");
  const imgSrc = "./assets/images/hero.jpg";
  const image = document.createElement("img");
  const name = document.createElement("h1");
  const descriptionContainer = document.createElement("div");
  const descriptionTitle = document.createElement("h2");
  const descriptionContent = document.createElement("p");

  header.className = "header";
  styleEL.className = "style-wrapper";
  wrapper.className = "wrapper";
  imageWrapper.className = "img-wrapper";
  image.src = imgSrc;
  image.className = "image";

  name.className = "name";
  descriptionContainer.className = "desc-container";

  name.textContent = "Your Name";
  descriptionTitle.textContent = "About me";
  descriptionContent.textContent = `
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
  Quas velit officiis reprehenderit et optio consequatur, 
  itaque quaerat veritatis assumenda vitae eaque iure tempora 
  temporibus laborum. Libero quam fuga pariatur consequuntur?`;

  wrapper.append(imageWrapper, descriptionContainer);
  imageWrapper.append(image, name);
  descriptionContainer.append(descriptionTitle, descriptionContent);
  header.append(wrapper, styleEL);

  return header;
};
