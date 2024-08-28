module.exports = class Card {
  constructor() {
    this.title = null;
    this.image = null;
    this.buttons = [];
  }

  setTitle(str) {
    if (str === "" || str === undefined) return;
    const cardTitle = document.createElement("h2");
    cardTitle.className = "card-title";
    cardTitle.textContent = str;

    this.title = cardTitle;
  }

  setImage(url) {
    if (url === "" || url === undefined) return;
    const imageEl = document.createElement("div");
    imageEl.className = "card-image";
    imageEl.style.backgroundImage = `url("${url}")`;

    this.image = imageEl;
  }

  setButton(icon, url) {
    if (url === "" || url === undefined) return;
    if (icon === "" || icon === undefined) return;
    const btn = document.createElement("button");
    const btnIcon = document.createElement("img");
    const link = document.createElement("a");
    btn.className = "btn";
    btnIcon.setAttribute("src", icon);
    link.setAttribute("href", url);
    link.append(btnIcon);
    btn.append(link);
    this.buttons.unshift(btn);
  }

  getCard() {
    const card = document.createElement("div");
    const cardStyle = document.createElement("div");
    const btnWrapper = document.createElement("div");
    card.className = "card";
    cardStyle.className = " card-style";
    btnWrapper.className = "btn-wrapper";

    function cardHandler(e) {
      const trigger = e.type;
      const target = e.target;

      if (trigger === "mouseenter") {
        card.style.background = "radial-gradient(circle,#838383d4,#000000cc)";
        card.children[1].style.zIndex = "-1";
        btnWrapper.style.display = "flex";
      } else if (trigger === "mouseleave") {
        card.style.background = "#fff";
        card.children[1].style.zIndex = "";

        btnWrapper.style.display = "none";
      } else {
        if (target.className === "card-style") {
          target.style.background =
            "radial-gradient(circle,#838383d4,#000000cc)";
        } else {
          target.style.background = "none";
        }
      }
    }
    if (this.buttons.length !== 0) {
      btnWrapper.append(...this.buttons);
      cardStyle.append(btnWrapper);
      card.addEventListener("mouseleave", cardHandler);
      card.addEventListener("mouseenter", cardHandler);
    }
    card.append(cardStyle, this.image, this.title);

    return card;
  }
};
