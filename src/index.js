import headerComponent from "./header";
import sectionComponent from "./section";
import footerComponent from "./footer";
import "./style.css";

window.onload = () => {
  const main = document.createElement("main");

  main.append(headerComponent());
  main.append(sectionComponent());
  main.append(footerComponent());
  document.body.append(main);
};
