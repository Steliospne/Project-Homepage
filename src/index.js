import headerComponent from "./header";
import sectionComponent from "./section";
import footerComponent from "./footer";
import "./style.css";

window.onload = () => {
  const app = document.createElement("div");
  const main = document.createElement("main");

  app.className = "app";

  main.append(headerComponent());
  main.append(sectionComponent());

  app.append(main, footerComponent());
  document.body.append(app);
};
