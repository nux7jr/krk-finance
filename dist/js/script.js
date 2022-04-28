const menu = () => {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");
  const closedArea = document.querySelector(".news");
  const showMenu = () => {
    const toggleMenu = () => {
      menu.classList.toggle("menu--active");
    };
    const animationMenu = () => {
      menuBtn.classList.toggle("is--active");
      menuBtn.classList.add("is--clicked");
      setTimeout(function () {
        menuBtn.classList.remove("is--clicked");
      }, 300);
    };
    const closeMenu = () => {
      menu.classList.remove("menu--active");
      menuBtn.classList.remove("is--active");
      menuBtn.classList.remove("is--clicked");
      setTimeout(function () {
        menuBtn.classList.remove("is--clicked");
      }, 300);
    };
    closedArea.addEventListener("click", () => {
      closeMenu();
    });
    menuBtn.addEventListener("click", () => {
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

