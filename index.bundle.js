/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 566:
/***/ ((module) => {

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
          target.style.background = "radial-gradient(circle,#838383d4,#000000cc)";
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

/***/ }),

/***/ 63:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
  const addressIconURL = __webpack_require__(963);
  const phoneIconURL = __webpack_require__(793);
  const emailIconURL = __webpack_require__(994);
  addressIcon.setAttribute("src", addressIconURL);
  phoneIcon.setAttribute("src", phoneIconURL);
  emailIcon.setAttribute("src", emailIconURL);
  contactMe.textContent = "Contact Me";
  advertisement.textContent = "Let's connect if you see potential for us to create something great together!";
  address.innerHTML = "123 Innovation Lane, Suite 456, Creativetown, CT 78901";
  phone.innerHTML = "(555) 867-5309";
  email.innerHTML = "contact@brightideasstudio.com";
  address.prepend(addressIcon);
  phone.prepend(phoneIcon);
  email.prepend(emailIcon);
  gitBtn.className = "btn";
  linkedinBtn.className = "btn";
  const footerImageURL = __webpack_require__(134);
  footerImage.setAttribute("src", footerImageURL);
  gitLink.setAttribute("href", "https://github.com/Steliospne");
  linkedinLink.setAttribute("href", "https://www.linkedin.com/in/stelios-pnevmatikakis-351a7116b/");
  const gitIconURL = __webpack_require__(317);
  const linkedinIconURL = __webpack_require__(247);
  gitIcon.setAttribute("src", gitIconURL);
  linkedinIcon.setAttribute("src", linkedinIconURL);
  contactInfo.append(contactMe, advertisement, address, phone, email, footerIcons);
  gitLink.append(gitIcon);
  gitBtn.append(gitLink);
  linkedinLink.append(linkedinIcon);
  linkedinBtn.append(linkedinLink);
  footerIcons.append(gitBtn, linkedinBtn);
  imgWrapper.append(footerImage);
  footer.append(contactInfo, imgWrapper);
  return footer;
};

/***/ }),

/***/ 189:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function headerComponent() {
  const header = document.createElement("header");
  const styleEL = document.createElement("div");
  const wrapper = document.createElement("div");
  const imageWrapper = document.createElement("div");
  const imgSrc = __webpack_require__(134);
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

/***/ }),

/***/ 313:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Card = __webpack_require__(566);
module.exports = function section() {
  const section = document.createElement("section");
  const title = document.createElement("h1");
  const showcase = document.createElement("div");
  title.textContent = "Showcasing";
  showcase.className = "showcase";
  const data = {
    0: {
      name: "Battleship",
      image: __webpack_require__(841),
      git_icon: __webpack_require__(317),
      git_url: "https://github.com/Steliospne/Project-Battleship",
      open_icon: __webpack_require__(808),
      open_url: "https://steliospne.github.io/Project-Battleship/"
    },
    1: {
      name: "Knights-Travails",
      image: __webpack_require__(385),
      git_icon: __webpack_require__(317),
      git_url: "https://github.com/Steliospne/Project-Knights-Travails",
      open_icon: __webpack_require__(808),
      open_url: "https://steliospne.github.io/Project-Knights-Travails/"
    },
    2: {
      name: "Weather-App",
      image: __webpack_require__(305),
      git_icon: __webpack_require__(317),
      git_url: "https://github.com/Steliospne/weather-app",
      open_icon: __webpack_require__(808),
      open_url: "https://steliospne.github.io/weather-app/"
    },
    3: {
      name: "Restaurant",
      image: __webpack_require__(628),
      git_icon: __webpack_require__(317),
      git_url: "https://github.com/Steliospne/Project-Restaurant",
      open_icon: __webpack_require__(808),
      open_url: "https://steliospne.github.io/Project-Restaurant/"
    }
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

/***/ }),

/***/ 208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(977), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "Playball";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
  font-style: normal;
}

body > * {
  font-family: Playball;
}

body {
  height: 100dvh;
  max-width: 100rem;
  margin: auto;
  /* background-color: black; */
}

main {
}

header {
  position: relative;
  overflow: hidden;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
}

.style-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  transform-origin: right;
  background: linear-gradient(45deg, #885363, #a95a45);
  transform: skewY(-7deg) translateY(255px);
}

.img-wrapper {
  position: relative;
  width: min(100%, 250px);
  border: #4e4e4e solid 3px;
  animation: image-anim 1s ease-out forwards;
}

.image {
  width: 100%;
  display: block;
}

.name {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 10px;
  text-align: center;
  color: #fff;
}

.desc-container {
  width: min(100vw - 2rem, 600px);
  background-color: antiquewhite;
  z-index: 0;
  padding: 20px;
  animation: banner-anim 1s ease-out forwards;
}

.desc-container > h2 {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
}

.desc-container > p {
  font-size: clamp(1.2rem, 2vw, 1.8rem);
}

@keyframes image-anim {
  from {
    opacity: 0;
    display: none;
    transform: translateX(-1000px);
  }
  to {
    display: block;
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes banner-anim {
  from {
    transform: rotateZ(-7deg) translate(1000px, 0px);
  }
  50% {
    transform: rotateZ(-7deg) translate(0px, 0px);
  }
  to {
    transform: rotateZ(0deg);
  }
}

section {
}

section > h1 {
  color: #fff;
  padding: 25px;
  font-size: 2rem;
}

.showcase {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px;
}

.card {
  position: relative;
  width: min(75vw, 450px);
  height: min(75vw, 450px);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: #4e4e4e solid 3px;
}

.card-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.card-title {
  width: 100%;
  bottom: 10px;
  left: 0;
  text-align: center;
}

.card-style {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-wrapper {
  display: none;
  justify-content: space-around;
  width: 100%;
}

.btn,
.btn > a > img {
  width: 35px;
  height: 35px;
  background: none;
  border: none;
  animation: btn-dangle 1s ease-in-out forwards;
}

.btn:hover {
  animation: btn-grow 0.3s ease-in-out forwards;
}

.btn-wrapper > .btn {
  filter: invert();
}

@keyframes btn-grow {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}

@keyframes btn-dangle {
  from {
    opacity: 0;
    transform: rotate(0turn);
  }
  25% {
    opacity: 1;
    transform: rotate(-0.25turn);
  }
  75% {
    transform: rotate(0.25turn);
  }
  to {
    transform: rotate(0);
  }
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 50px;
  background: linear-gradient(90deg, #885363, #a95a45);
}

footer > .img-wrapper > .image {
  transform: scaleX(-1);
}

.contact-info {
  background-color: antiquewhite;
  width: clamp(250px, 50%, 600px);
  padding: 20px;
  font-size: clamp(1rem, 2vw, 1.5rem);
}

.contact-info > * {
  margin-bottom: 10px;
}

.contact-info > p {
  display: flex;
  align-items: center;
  gap: 5px;
}

.contact-info > p > img {
  width: clamp(1rem, 2vw, 1.5rem);
  height: clamp(1rem, 2vw, 1.5rem);
}

.footer-icons {
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.footer-icons > .btn {
  animation: none;
}

.footer-icons > .btn:hover {
  animation: btn-grow 0.3s ease-in-out forwards;
}

@media screen and (min-width: 800px) {
  .wrapper,
  footer {
    flex-direction: row;
  }

  .img-wrapper {
    position: relative;
    width: min(100%, 400px);
  }

  footer > .img-wrapper {
    width: min(100%, 300px);
  }

  .showcase {
    flex-direction: row;
    justify-content: space-evenly;
  }

  .card {
    width: 570px;
    height: 570px;
  }

  .btn,
  .btn > a > img {
    width: 55px;
    height: 55px;
  }
}

@media screen and (min-width: 1200px) {
  footer > .img-wrapper {
    width: min(100%, 350px);
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 417:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 601:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 72:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 134:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cca1440a6712197d7af2.png";

/***/ }),

/***/ 841:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/2bdc2eef93c20f38a753.jpg";

/***/ }),

/***/ 994:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/c7a364af28c1fc7cbb30.svg";

/***/ }),

/***/ 317:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/aca0843252807bb6d122.svg";

/***/ }),

/***/ 385:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/c49cb2de510431b40cdc.png";

/***/ }),

/***/ 247:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/15f0337078f13db400ac.svg";

/***/ }),

/***/ 963:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/8ed820373498e050ba48.svg";

/***/ }),

/***/ 808:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/5c04ffe3951cfec4e38b.png";

/***/ }),

/***/ 793:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3119fe82239e73c8f083.svg";

/***/ }),

/***/ 628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/65460d8ae01e577402c1.png";

/***/ }),

/***/ 305:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4df0970909e22e35c1d1.png";

/***/ }),

/***/ 977:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/71988dd7eaaef16a92b6.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			57: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/header.js
var header = __webpack_require__(189);
var header_default = /*#__PURE__*/__webpack_require__.n(header);
// EXTERNAL MODULE: ./src/section.js
var section = __webpack_require__(313);
var section_default = /*#__PURE__*/__webpack_require__.n(section);
// EXTERNAL MODULE: ./src/footer.js
var footer = __webpack_require__(63);
var footer_default = /*#__PURE__*/__webpack_require__.n(footer);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(208);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const src_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/index.js




window.onload = () => {
  const main = document.createElement("main");
  main.append(header_default()());
  main.append(section_default()());
  main.append(footer_default()());
  document.body.append(main);
};
})();

/******/ })()
;