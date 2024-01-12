// content.js

window.onload = function () {
window.scrollTo(0, 3);
}

window.onscroll = function () {
  if (window.scrollY < 2) {
    window.scrollTo(0, 2);
  }
};
