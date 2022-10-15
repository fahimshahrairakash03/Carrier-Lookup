const btnIcon = document.getElementById("btn_icon");

btnIcon.addEventListener("click", function () {
  const btnDropdown = document.querySelector(".btn-dropdown");
  btnDropdown.classList.add("visibility-check");
});

const logsBtn = document.querySelector(".logs-icon");

logsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const branchMenu = document.querySelector(".branch-menu");
  branchMenu.classList.add("branch-menu-display");
  logsBtn.style.transform = "scale(-1, -1)";
});
