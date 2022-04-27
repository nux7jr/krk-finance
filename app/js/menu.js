const menu = () => {
  const dropDownMenuBnt = document.querySelector(".dropdown-btn");

  const toggleDropDowpMenu = function () {
    const dropDownMenu = document.querySelector(".drowdown-menu");
    dropDownMenu.classList.toggle("drowdown-menu--active");
  };

  dropDownMenuBnt.addEventListener("click", toggleDropDowpMenu);
};
menu();
