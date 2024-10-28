/** 
 * @copyright 2024 Stroie
 * @license Apache-2.0
*/

/**
 * Node modules
 */
import { useRef, useEffect } from "react"; 
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        if (activeBox.current && lastActiveLink.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        }
    };

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        if (activeBox.current && event.target) {
            activeBox.current.style.top = event.target.offsetTop + 'px';
            activeBox.current.style.left = event.target.offsetLeft + 'px';
            activeBox.current.style.width = event.target.offsetWidth + 'px';
            activeBox.current.style.height = event.target.offsetHeight + 'px';
        }
    }

    useEffect(initActiveBox, [navOpen]);
    window.addEventListener('resize', initActiveBox);

    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            <div ref={activeBox} className="active-box"></div>
            {
                navItems.map(({ label, link, className, ref }, key) =>
                    (
                       <a 
                        href={link}
                        key={key}
                        ref={key === 0 ? ref : null}  // Only assign ref to the first item
                        className={className}
                        onClick={activeCurrentLink}
                       >
                           {label}
                       </a>
                   ))
            }
        </nav>
    );
}

Navbar.propTypes = {   // Corrected the typo here
    navOpen: PropTypes.bool.isRequired
}

export default Navbar;