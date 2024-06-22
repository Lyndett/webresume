import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import styles from "./NavBar.module.css"
import { CgMenuGridO } from "react-icons/cg";
import { RiCloseCircleFill } from "react-icons/ri";
import { useScrollPosition } from '../Hooks/scrollPosition';

const NavBar = () => {
    const[NavBarOpen, setNavBarOpen] = useState(false)
    const[windowDimension, setWindowDimension] =useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    const detectDimension = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectDimension)
        windowDimension.width > 800 && setNavBarOpen(false)
        return () => {
            window.removeEventListener('resize', detectDimension)
        }
    },[windowDimension])

    const links =[
        {
            id: 1,
            link: "About me",
        },
        {
            id: 2,
            link: "Projects",
        },
        {
            id: 3,
            link: "HowWeWork",
        },
        {
            id: 4,
            link: "Benefits",
        },
    ]

    const scrollPosition = useScrollPosition()


  return (
    <div className= {NavBarOpen
    ? styles.navBarOpen
    : scrollPosition > 0
    ? styles.navOnScroll
    : styles.navBar}
    >
        {!NavBarOpen && <p className={styles.logo}>Dulce Corrales</p>}
        {!NavBarOpen && windowDimension.width < 800 ? (
            <CgMenuGridO color='#f7bcc9' onClick ={() => setNavBarOpen(!NavBarOpen)} size= {25}/>
        ): (
            windowDimension.width < 800 && (
            <RiCloseCircleFill onClick ={() => setNavBarOpen(!NavBarOpen)} color="#f7bcc9" size={45}/>)
        )}
        {NavBarOpen && (
            <ul className={styles.linksContainer}>
            {links.map((x) => (
                <div key={x.id}> 
                    <Link 
                    onClick={() => setNavBarOpen(false)}
                    to={x.link}
                    smooth
                    duration={500}
                    className={styles.navLink}
                    >{x.link === "HowWeWork" ? "How we work" : x.link}
                    </Link>
                    <div className={styles.border}></div>
                </div>
            ))}
        </ul>
        )}
        {windowDimension.width > 800 && (
            <ul className={styles.linksContainer}>
                {links.map((x) => (
                <div>
                <Link 
                    onClick={() => setNavBarOpen(false)}
                    to={x.link}
                    smooth
                    duration={500}
                    className={styles.navLink}
                    >
                    {x.link === "HowWeWork" ? "How we work" : x.link}
                    </Link>
                    <div className={styles.border}></div>
                </div>
            ))}
            <Link onClick={() => setNavBarOpen(false)}
                    to="Contact"
                    smooth
                    duration={500}
                    className={styles.contactLink}>
                        Contact
                        </Link>
            </ul>
        )}
    </div>
  )
}

export default NavBar