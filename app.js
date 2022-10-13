let btnDropdown = document.querySelector(".btn-dropdown");
const btnIcon = document.getElementById("btn_icon");

btnIcon.addEventListener("click", function () {
  console.log("hello");
  const btnDropdown = document.querySelector(".btn-dropdown");
  btnDropdown.classList.add("btn-dropdown-visibility");
});

// document.getElementById("btn_icon").onclick = () => {
//   login.classList.toggle("active");
// };
