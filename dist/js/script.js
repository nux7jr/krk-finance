const menu = () => {
  const showMenu = () => {
    const burgerMenuBtn = document.querySelector(".menu-btn");

    const toggleMenu = () => {
      const menu = document.querySelector(".menu");
      menu.classList.toggle("menu--active");
    };

    const animation = (burgerMenuBtn) => {
      burgerMenuBtn.classList.toggle("is--active");
      burgerMenuBtn.classList.add("is--clicked");
      setTimeout(function () {
        burgerMenuBtn.classList.remove("is--clicked");
      }, 300);
    };

    burgerMenuBtn.addEventListener("click", () => {
      toggleMenu();
      animation();
    });
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

