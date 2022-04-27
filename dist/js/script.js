const menu = () => {
  const showMenu = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const toggleMenu = () => {
      const menu = document.querySelector(".menu");
      menu.classList.toggle("menu--active");
    };
    const animationMenu = () => {
      menuBtn.classList.toggle("is--active");
      menuBtn.classList.add("is--clicked");
      setTimeout(function () {
        menuBtn.classList.remove("is--clicked");
      }, 300);
    };
    menuBtn.addEventListener("click", function () {
      animationMenu();
      toggleMenu();
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

