const Card = require("./card");

module.exports = function section() {
  const section = document.createElement("section");
  const title = document.createElement("h1");
  const showcase = document.createElement("div");
  title.textContent = "Showcasing";

  showcase.className = "showcase";

  for (let i = 0; i < 4; i++) {}
  const gitIcon =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg";
  const gitUrl = "https://github.com/Steliospne/Project-Battleship";
  const openIcon = "./assets/images/open-in-new.png";
  const openUrl = "https://steliospne.github.io/Project-Battleship/";
  const card = new Card();
  card.setTitle("Project 1");
  card.setImage("./assets/images/battleship.jpg");
  card.setButton(openIcon, openUrl);
  card.setButton(gitIcon, gitUrl);
  const cardEl = card.getCard();
  showcase.append(cardEl);

  // showcase.addEventListener("click", cardHandler);
  // section.append(title, showcase);
  section.append(showcase);

  return section;
};
