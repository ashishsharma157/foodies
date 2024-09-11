'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from './nav-link.module.css';

export default function NavLink({href, children}){
    const path=usePathname();

    return(
        <Link href={href} className={path.startsWith(href)?`${style.link} ${style.active}`:style.link}>{children}</Link>
    )
}