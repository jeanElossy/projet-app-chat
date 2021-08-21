const sharingIcons = document.querySelector(".sharing__icons");

const display = () => {
  document.querySelector(".collapse").classList.toggle("toggle");
};
sharingIcons.addEventListener("click", () => display());


