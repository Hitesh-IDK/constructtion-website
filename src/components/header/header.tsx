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

interface props {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header(props: props) {
  const { isMenuOpen, setIsMenuOpen } = props;

  const menuItems: string[][] = [
    ["Home", "/"],
    ["Portfolio", "/portfolio"],
    ["About", "/about"],
    ["Testimonials", "/testimonials"],
    ["Contact", "/contact"],
  ];

  return (
    <HeroUIProvider>
      <Navbar onMenuOpenChange={setIsMenuOpen} className={styles.header}>
        <NavbarContent>
          <NavbarBrand>
            <Link to="/">
              <img src={logo} alt="Logo" className={styles.logo_img} />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden p-2"
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
            <NavbarMenuItem
              key={`${index}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to={item[1]} className={styles.modal_link}>
                {item[0]}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </HeroUIProvider>
  );
}
