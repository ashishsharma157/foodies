

import Link from "next/link";
import logoImg from "@/assets/logo.png";
import style from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";


export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={style.header}>
        <Link className={style.logo} href="/">
          <Image src={logoImg} alt="A plate of foof" priority />
          Next Level Food
        </Link>

        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href="/meals" >Brown Meals</NavLink>
            </li>
            <li>
            <NavLink href="/community" >Community</NavLink>

            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
