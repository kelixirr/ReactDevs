import { useEffect, useRef, useState } from "react";
import styles from "../kelixirr/Header.module.css";
import Author from "../../Author";
import PopUpModal from "./PopUpModal";

export default function Header() {
  const [submenus, setSubmenus] = useState({});
  const menuRefs = useRef({});
  const mobileMenuRef = useRef(null);

  const [mobile, setMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // for preventing overfiring of events like resize
  function debounce(func, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  }

  // closing the mobile menu
  useEffect(() => {
    const closeMobileMenu = (e) => {
      if (
        mobileOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current?.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", closeMobileMenu);
    return () => document.removeEventListener("click", closeMobileMenu);
  }, [mobileOpen]);

  // Showing the mobile menu
  useEffect(() => {
    const debouncedUpdateMobileView = debounce(() => {
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }, 200);

    debouncedUpdateMobileView();

    window.addEventListener("resize", debouncedUpdateMobileView);

    return () => {
      window.removeEventListener("resize", debouncedUpdateMobileView);
    };
  }, []);

  // chaning menu state
  const handleClick = (menuKey) => {
    setSubmenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  // for handling sub menus
  useEffect(() => {
    const handleSubMenu = (e) => {
      Object.keys(menuRefs.current).forEach((key) => {
        if (
          menuRefs.current[key] &&
          !menuRefs.current[key]?.contains(e.target)
        ) {
          setSubmenus((prev) => ({
            ...prev,
            [key]: false,
          }));
        }
      });
    };

    document.addEventListener("mousedown", handleSubMenu);
    return () => {
      document.removeEventListener("mousedown", handleSubMenu);
    };
  }, []);

  const menuItems = [
    {
      key: "m1",
      label: "Menu1",
      subItems: ["Submenu 1", "Submenu 2", "Submenu 3"],
    },
    {
      key: "m2",
      label: "Menu2",
      subItems: ["Submenu 1", "Submenu 2", "Submenu 3"],
    },
  ];

  return (
    <div className={styles.container}>
      <h3>Menu With Submenu Styles & Modal</h3>
      <PopUpModal />
      <div className={styles.header}>
        <ul className={styles.headerLeft}>
          <li>Logo</li>
        </ul>
        {!mobile && (
          <ul className={styles.headerRight}>
            {menuItems.map((menu) => (
              <li
                aria-expanded={!!submenus[menu.key]}
                role="menuitem"
                tabIndex="0"
                key={menu.key}
                onClick={() => handleClick(menu.key)}
                ref={(el) => (menuRefs.current[menu.key] = el)}
                onMouseEnter={() =>
                  setSubmenus((prev) => {
                    const newState = Object.keys(prev).reduce((acc, key) => {
                      acc[key] = false;
                      return acc;
                    }, {});
                    newState[menu.key] = true;
                    return newState;
                  })
                }
              >
                <p>{menu.label}</p>
                {submenus[menu.key] && (
                  <div className={styles.submenu} role="menu">
                    <ul>
                      {menu.subItems.map((subItem, index) => (
                        <li key={index} role="menuitem" tabIndex="0">
                          <span>{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <li>
              <button>Book Show</button>
            </li>
          </ul>
        )}

        {mobile && (
          <div className={styles.mobileMenu} ref={mobileMenuRef}>
            <div
              className={styles.hamburger}
              onClick={() => setMobileOpen(!mobileOpen)}
              tabIndex="0"
            >
              {mobileOpen ? "X" : "="}
            </div>

            {mobileOpen && (
              <nav className={styles.mobileNav}>
                <ul className={styles.mobileNavUl}>
                  {menuItems.map((item) => (
                    <li
                      aria-expanded={!!submenus[item.key]}
                      role="menuitem"
                      tabIndex="0"
                      key={item.key}
                      ref={(el) => (menuRefs.current[item.key] = el)}
                      onClick={() => handleClick(item.key)}
                    >
                      <p>{item.label}</p>
                      {submenus[item.key] && (
                        <div className={styles.mobileSubmenu} role="menu">
                          <ul className={styles.mobileSubmenuUl}>
                            {item.subItems.map((subItem, index) => (
                              <li key={index} role="menuitem" tabIndex="0">
                                <span>{subItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                  <li>
                    <button>Book Show</button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        )}
      </div>
      <Author name="Amritesh Kumar" githubLink="https://github.com/kelixirr" />
    </div>
  );
}
