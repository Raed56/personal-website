import "../styles/components/Navbar.scss";
import { Link } from "react-scroll";
import { useRef } from "react";

const NavbarBrand = () => {
    return (
        <a className="rs-animation" href="/">
            <svg
                id="logo"
                width="82"
                height="55"
                viewBox="0 0 82 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M28.744 54L16.128 32.34H7.76799V54H0.85199V1.02799H17.952C21.9547 1.02799 25.324 1.71199 28.06 3.07999C30.8467 4.44799 32.924 6.29733 34.292 8.62799C35.66 10.9587 36.344 13.6187 36.344 16.608C36.344 20.256 35.28 23.4733 33.152 26.26C31.0747 29.0467 27.9333 30.896 23.728 31.808L37.028 54H28.744ZM7.76799 26.792H17.952C21.7013 26.792 24.5133 25.88 26.388 24.056C28.2627 22.1813 29.2 19.6987 29.2 16.608C29.2 13.4667 28.2627 11.0347 26.388 9.312C24.564 7.58933 21.752 6.72799 17.952 6.72799H7.76799V26.792Z"
                    strokeWidth="3"
                    stroke="#4F46EF"
                />
                <path
                    d="M63.8863 54.532C60.3903 54.532 57.2489 53.924 54.4623 52.708C51.7263 51.4413 49.5729 49.7187 48.0023 47.54C46.4316 45.3107 45.6209 42.752 45.5703 39.864H52.9423C53.1956 42.3467 54.2089 44.4493 55.9823 46.172C57.8063 47.844 60.4409 48.68 63.8863 48.68C67.1796 48.68 69.7636 47.8693 71.6383 46.248C73.5636 44.576 74.5263 42.448 74.5263 39.864C74.5263 37.8373 73.9689 36.1907 72.8543 34.924C71.7396 33.6573 70.3463 32.6947 68.6743 32.036C67.0023 31.3773 64.7476 30.668 61.9103 29.908C58.4143 28.996 55.6023 28.084 53.4743 27.172C51.3969 26.26 49.5983 24.8413 48.0783 22.916C46.6089 20.94 45.8743 18.3053 45.8743 15.012C45.8743 12.124 46.6089 9.56533 48.0783 7.33599C49.5476 5.10666 51.5996 3.38399 54.2343 2.16799C56.9196 0.951992 59.9849 0.343994 63.4303 0.343994C68.3956 0.343994 72.4489 1.58533 75.5903 4.068C78.7823 6.55066 80.5809 9.84399 80.9863 13.948H73.3863C73.1329 11.9213 72.0689 10.148 70.1943 8.62799C68.3196 7.05733 65.8369 6.272 62.7463 6.272C59.8583 6.272 57.5023 7.03199 55.6783 8.55199C53.8543 10.0213 52.9423 12.0987 52.9423 14.784C52.9423 16.7093 53.4743 18.28 54.5383 19.496C55.6529 20.712 56.9956 21.6493 58.5663 22.308C60.1876 22.916 62.4423 23.6253 65.3303 24.436C68.8263 25.3987 71.6383 26.3613 73.7663 27.324C75.8943 28.236 77.7183 29.68 79.2383 31.656C80.7583 33.5813 81.5183 36.216 81.5183 39.56C81.5183 42.144 80.8343 44.576 79.4663 46.856C78.0983 49.136 76.0716 50.9853 73.3863 52.404C70.7009 53.8227 67.5343 54.532 63.8863 54.532Z"
                    strokeWidth="3"
                    stroke="#4F46EF"
                />
            </svg>
        </a>
    );
};

const Navbar = () => {
    const hamburgerRef = useRef(null);

    const navitemsRef = useRef(null);

    const hamburgerHandler = () => {
        if (hamburgerRef !== null && hamburgerRef !== undefined) {
            hamburgerRef.current.classList.toggle("active");
            if (navitemsRef !== null && navitemsRef !== undefined) {
                navitemsRef.current.classList.toggle("active");
            }
        }
    };

    const navLinkHandler = () => {
        if (hamburgerRef !== null && hamburgerRef !== undefined) {
            hamburgerRef.current.classList.remove("active");
            if (navitemsRef !== null && navitemsRef !== undefined) {
                navitemsRef.current.classList.remove("active");
            }
        }
    };

    const navLinksArray = [
        {
            className: "nav-link",

            activeClass: "active",
            to: "home",
            spy: true,
            smooth: true,
            offset: -10,
            duration: 600,
            name: "Home",
        },
        {
            className: "nav-link",

            activeClass: "active",
            to: "about",
            spy: true,
            smooth: true,
            offset: -10,
            duration: 600,
            name: "About",
        },
        {
            className: "nav-link",

            activeClass: "active",
            to: "experience",
            spy: true,
            smooth: true,
            offset: -10,
            duration: 600,
            name: "Work",
        },
        {
            className: "nav-link",

            activeClass: "active",
            to: "projects",
            spy: true,
            smooth: true,
            offset: -10,
            duration: 600,
            name: "Projects",
        },
        {
            className: "nav-link",

            activeClass: "active",
            to: "contact",
            spy: true,
            smooth: true,
            offset: -10,
            duration: 600,
            name: "Contact",
        },
    ];

    return (
        <header className="navbar">
            <nav className="page-container navbar-nav">
                <NavbarBrand />
                <ul className="nav-items" ref={navitemsRef}>
                    {navLinksArray.map(
                        (
                            {
                                className,
                                activeClass,
                                to,
                                spy,
                                smooth,
                                offset,
                                duration,
                                name,
                            },
                            i
                        ) => (
                            <Link
                                onClick={navLinkHandler}
                                key={i}
                                className={className}
                                activeClass={activeClass}
                                to={to}
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                            >
                                {name}
                            </Link>
                        )
                    )}
                </ul>
                <div
                    className="hamburger"
                    ref={hamburgerRef}
                    onClick={hamburgerHandler}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
