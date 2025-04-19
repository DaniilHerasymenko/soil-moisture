import Link from "next/link";
import classes from "./header.module.css"

export default function Header(){
    return <header className={classes.header}>
        <div className={classes.mainLogo}>
            <Link href="/">Soil-Moisture</Link>
        </div>
        <nav className={classes.nav}>
            <div className={classes.navigationLinks}>
                <Link href="/about" className={classes.a}>Про проект</Link>
                <Link href="/login" className={classes.a}>Увійти</Link>
            </div>
        </nav>
    </header>
}