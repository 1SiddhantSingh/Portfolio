import React, {useEffect, useState} from 'react'
import {navLinks} from "../constants/index.js";

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScrolled = () => {
            const isScrolled = window.scrollY > 10 ;
            setScrolled(true);
        }
        window.addEventListener('scroll', handleScrolled);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' :'non-scrolled'}`}>
            <div className={"inner"}>
            <a className={"logo"} href={"#hero"}>Siddhant Singh</a>
            </div>
            <nav className={"desktop"}>
                <ul>
                    {navLinks.map(({link, name})=>(
                        <li key={name} className={"group"}>
                            <a href={link}>
                                <span>{name}</span>
                                <span className={"underline"}/>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <a href={"#contact"} className={"contact-btn group"}>
                <div className={"inner"}>
                    <span>Contact me</span>
                </div>
            </a>
        </header>
    )
}
export default NavBar
