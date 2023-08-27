const openbutton = document.getElementById("open-btn");
const aside = document.getElementById("aside-bar");
const closebutton = document.getElementById("close-btn");

openbutton.addEventListener("click", () => {
  aside.classList.add("active-aside");
});

closebutton.addEventListener("click", () => {
  aside.classList.remove("active-aside");
});
