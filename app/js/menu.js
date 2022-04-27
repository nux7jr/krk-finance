const menu = () => {
  const showMenu = () => {
    const burgerMenuBtn = document.querySelector(".header__btn");
    const toggleMenu = () => {
      const menu = document.querySelector(".menu");
      menu.classList.toggle("menu--active");
    };
    burgerMenuBtn.addEventListener("click", toggleMenu);
  };
  showMenu();

  const showDropdownMenu = () => {
    const dropDownMenuBnt = document.querySelector(".dropdown-btn");
    const toggleDropDowpMenu = () => {
      const dropDownMenu = document.querySelector(".drowdown-menu");
      dropDownMenu.classList.toggle("drowdown-menu--active");
    };
    dropDownMenuBnt.addEventListener("click", toggleDropDowpMenu);
  };
  showDropdownMenu();
};
menu();
