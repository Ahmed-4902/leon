let icon = document.querySelector(".icon");

let showMenu = true;

icon.addEventListener("click", toggleMenu);

function toggleMenu() {
   if (showMenu) {
      document.querySelector(".icon span:nth-child(2)").style.width = "100%";
      document.querySelector(".links ul").style.display = "block";
      showMenu = false;
   } else {
      document.querySelector(".icon span:nth-child(2)").style.width = "60%";
      document.querySelector(".links ul").style.display = "none";
      showMenu = true;
   }
}
