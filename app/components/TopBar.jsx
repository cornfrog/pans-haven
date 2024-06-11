"use client"

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const TopBar = () => {

    return (
        <div className="topbar">
            <div className="topbar__name-and-logo">
                <p className="topbar__name-and-logo__name">Pan&apos;s Haven </p>
                <Image
                    src="/logo.png"
                    width={500}
                    height={500}
                    alt="Pans Haven Logo"
                />
            </div>
            <NavBar />
            <MobileNavBar />
        </div>
    )

}

const NavBar = () => {
    return (
        <div className="topbar__navbar-default">
            <Link href="#Home" className="topbar__navbar-default__link">Home</Link>
            <Link href="#Charities" className="topbar__navbar-default__link">Charities</Link>
            <Link href="#About-Us" className="topbar__navbar-default__link">About Us</Link>
            <Link href="#Contact-Us" className="topbar__navbar-default__link">Contact Us</Link>
        </div>
    )
}

const MobileNavBar = () => {

    const [displayingMenu, setMenuState] = useState(false);

    const toggleNavBar = () => {
        setMenuState(!displayingMenu);
    }

    return (
        <div className="topbar__navbar-mobile">
            <button onClick={toggleNavBar} >{!displayingMenu ? <>&#x2630;</> : <>&#x2715;</>}</button>
            <div className={`topbar__navbar-mobile__menu ${!displayingMenu ? "hide" : "show "}`}>
                <a href="#Home" className="topbar__navbar-mobile__menu__link">Home</a>
                <a href="#Charities" className="topbar__navbar-mobile__menu__link">Charities</a>
                <a href="#About-Us" className="topbar__navbar-mobile__menu__link">About Us</a>
                <a href="#Contact-Us" className="topbar__navbar-mobile__menu__link">Contact Us</a>
            </div>
        </div>
    );
}

export default TopBar;