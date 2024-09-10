import Link from "next/link";
import logoImg from "@/assets/logo.png";
import style from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

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
              <Link href="/meals">Brown Meals</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
