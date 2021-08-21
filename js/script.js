const sharingIcons = document.querySelector(".sharing__icons");

const display = () => {
  document.querySelector(".collapse").classList.toggle("toggle");
  setTimeout(() => { 
      document.querySelector(".icon--user").classList.toggle("toggle");
  }, 250);

  setTimeout(() => { 
    document.querySelector(".icon--file").classList.toggle("toggle");
  }, 200);

  setTimeout(() => { 
      document.querySelector(".icon--camera").classList.toggle("toggle");
  }, 150);

  setTimeout(() => { 
      document.querySelector(".icon--image").classList.toggle("toggle");
  }, 100);
};
sharingIcons.addEventListener("click", () => display());


