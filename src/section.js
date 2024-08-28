const Card = require("./card");

module.exports = function section() {
  const section = document.createElement("section");
  const title = document.createElement("h1");
  const showcase = document.createElement("div");

  title.textContent = "Showcasing";
  showcase.className = "showcase";

  const data = {
    0: {
      name: "Battleship",
      image: "./assets/images/battleship.jpg",
      git_icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
      git_url: "https://github.com/Steliospne/Project-Battleship",
      open_icon: "./assets/images/open-in-new.png",
      open_url: "https://steliospne.github.io/Project-Battleship/",
    },
    // 1: {
    //   name: "",
    //   image: "./assets/images/battleship.jpg",
    //   git_icon:
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
    //   git_url: "https://github.com/Steliospne/Project-Battleship",
    //   open_icon: "./assets/images/open-in-new.png",
    //   open_url: "https://steliospne.github.io/Project-Battleship/",
    // },
  };

  const projects = Object.values(data);
  for (let i = 0; i < 1; i++) {
    const card = new Card();
    card.setTitle(projects[i].name);
    card.setImage(projects[i].image);
    card.setButton(projects[i].open_icon, projects[i].open_url);
    card.setButton(projects[i].git_icon, projects[i].git_url);
    const cardEl = card.getCard();
    showcase.append(cardEl);
  }

  section.append(showcase);

  return section;
};
