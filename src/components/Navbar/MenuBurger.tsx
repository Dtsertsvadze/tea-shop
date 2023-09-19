interface BurgerInterface {
  openedMenu: boolean;
  setOpenedMenu: Function;
}
const MenuBurger = ({ openedMenu, setOpenedMenu }: BurgerInterface) => {
    
  const menuOpenHandler = () => {
    setOpenedMenu(!openedMenu);
  };

  return (
    <div
      className="nav-menu"
      onClick={menuOpenHandler}
      style={openedMenu ? { borderRadius: "10px" } : {}}
    >
      <div
        className="nav-menu__line1"
        style={
          openedMenu ? { transform: "rotate(45deg) translateY(15px)" } : {}
        }
      ></div>
      <div
        className="nav-menu__line2"
        style={
          openedMenu
            ? { transform: "translateX(-100%)", background: "transparent" }
            : {}
        }
      ></div>
      <div
        className="nav-menu__line3"
        style={
          openedMenu ? { transform: "rotate(-45deg) translateY(-14px)" } : {}
        }
      ></div>
    </div>
  );
};

export default MenuBurger;
