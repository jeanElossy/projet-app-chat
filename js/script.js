const sharingIcons = document.querySelector(".sharing__icons");

const display = () => {
  setTimeout(() => { 
    document.querySelector(".icon--user").classList.toggle("toggle");
  }, 300);

  setTimeout(() => { 
    document.querySelector(".icon--file").classList.toggle("toggle");
  }, 250);

  setTimeout(() => { 
    document.querySelector(".icon--camera").classList.toggle("toggle");
  }, 200);

  setTimeout(() => { 
    document.querySelector(".icon--image").classList.toggle("toggle");
  }, 150);
};
sharingIcons.addEventListener("click", () => display());


