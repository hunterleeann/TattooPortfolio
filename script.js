console.log("testing ");

const menuToggle = document.getElementById("menu-toggle");

menuToggle.addEventListener("click", OpenMenu);

function OpenMenu() {
  console.log("testing 2");

  document.body.classList.toggle("MenuItems");
}
