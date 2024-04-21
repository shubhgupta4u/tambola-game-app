import { usePathname } from 'next/navigation';
import styles from "@/common/components/header/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faKeyboard, faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Link from 'next/link';

export function Header() { 
    const pathname = usePathname();
    const [menuOpen,setMenuOpen]=useState(false);

    const toggleMenu=()=>{
        setMenuOpen(!menuOpen);
    }
    const closeMenu=()=>{
        setMenuOpen(false);
    }

    let links = [
        { name: "Play Tambola Game", href: "/", icon: faKeyboard },
        { name: "Ticket Generator", href: "/ticket", icon: faTicket },
        { name: "How to play", href: "/rules", icon: faPersonCircleQuestion }
    ]

    return (
        <div className={styles.top}>
            <nav className={`${styles.navbar} navbar-expand-lg navbar-dark mx-background-top-linear ${styles.mxBackgroundTopLinear}`}>

                <div className={`container ${styles.navbarContainer}`}>
                    <Link className={`navbar-brand ${styles.navbarBrandText}`} href="/">Tambola.in</Link>
                    <button className={`navbar-toggler ${styles.mlAuto}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{toggleMenu()}}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${menuOpen?"show":""}`} id="navbarSupportedContent">
                        <ul className={`navbar-nav ml-auto ${styles.mlAuto}`}>
                            {
                                links.map((link) =>
                                (

                                    (
                                        pathname == link.href?
                                            (
                                                <span key={link.href} className={`nav-link ${styles.headerLink}  ${styles.active}`}  onClick={()=>{closeMenu()}}>
                                                    <FontAwesomeIcon icon={link.icon} />  {link.name}
                                                </span>
                                            )
                                            :
                                            (
                                                <li key={link.href} className={`nav-item ${styles.headerList}`}  onClick={()=>{closeMenu()}}>
                                                    <Link className={`nav-link ${styles.headerLink}`}
                                                        href={pathname == link.href ? "" : link.href}>
                                                        <FontAwesomeIcon icon={link.icon} />  {link.name}
                                                    </Link>
                                                </li>
                                            )
                                    )
                        )
                                )}
                    </ul>
                </div>

        </div>

            </nav >

        </div >
    );
}