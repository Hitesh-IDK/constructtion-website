import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./header.module.css";
import {
  HeroUIProvider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: string[][] = [
    ["Home", "#"],
    ["Portfolio", "#"],
    ["About", "#"],
    ["Testimonials", "#"],
    ["Contact", "#"],
  ];

  return (
    <HeroUIProvider>
      <Navbar onMenuOpenChange={setIsMenuOpen} className={styles.header}>
        <NavbarContent>
          <NavbarBrand>
            <img src={logo} alt="Logo" className={styles.logo_img} />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link className={styles.header_link} to={item[1]}>
                {item[0]}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${index}`}>
              <Link to={item[1]}>{item[0]}</Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </HeroUIProvider>
  );
}
