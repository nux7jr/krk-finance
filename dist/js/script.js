const menu = () => {
  const showMenu = () => {
    const burgerMenuBtn = document.querySelector(".menu-btn");
    const toggleMenu = () => {
      const menu = document.querySelector(".menu");
      menu.classList.toggle("menu--active");
    };
    burgerMenuBtn.addEventListener("click", toggleMenu);
  };
  showMenu();
  const animation = () => {
    const menuBtn = document.querySelector(".menu-btn");

    menuBtn.addEventListener("click", function () {
      menuBtn.classList.toggle("is--active");
      menuBtn.classList.add("is--clicked");
      setTimeout(function () {
        menuBtn.classList.remove("is--clicked");
      }, 300);
    });
  };
  animation();
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

