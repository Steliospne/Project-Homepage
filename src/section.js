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
      image: require("./assets/images/battleship.jpg"),
      git_icon: require("./assets/images/github-original-wordmark.svg"),
      git_url: "https://github.com/Steliospne/Project-Battleship",
      open_icon: require("./assets/images/open-in-new.png"),
      open_url: "https://steliospne.github.io/Project-Battleship/",
    },
    1: {
      name: "Knights-Travails",
      image: require("./assets/images/knight_travails.png"),
      git_icon: require("./assets/images/github-original-wordmark.svg"),
      git_url: "https://github.com/Steliospne/Project-Knights-Travails",
      open_icon: require("./assets/images/open-in-new.png"),
      open_url: "https://steliospne.github.io/Project-Knights-Travails/",
    },
    2: {
      name: "Weather-App",
      image: require("./assets/images/weather_app.png"),
      git_icon: require("./assets/images/github-original-wordmark.svg"),
      git_url: "https://github.com/Steliospne/weather-app",
      open_icon: require("./assets/images/open-in-new.png"),
      open_url: "https://steliospne.github.io/weather-app/",
    },
    3: {
      name: "Restaurant",
      image: require("./assets/images/restaurant.png"),
      git_icon: require("./assets/images/github-original-wordmark.svg"),
      git_url: "https://github.com/Steliospne/Project-Restaurant",
      open_icon: require("./assets/images/open-in-new.png"),
      open_url: "https://steliospne.github.io/Project-Restaurant/",
    },
  };

  const projects = Object.values(data);
  for (let i = 0; i < projects.length; i++) {
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
