import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const navItems = [
        {
            label: "Dashboard",
            path: "/dashboard",
        },
        {
            label: "About Us",
            path: "/about"
        },
        {
            label: "Price",
            path: "/price"
        },
        {
            label: "Create Script",
            path: "/script"
        },
        {
            label: "Blog",
            path: "/blog"
        },
    ]

    const [showBg, setShowBg] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            const isScrolled = window.scrollY >= 300
            setShowBg(isScrolled)
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    console.log(showBg);

    return (
        <div className={`navbar px-10 ${showBg && "glass"} lg:bg-transparent`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow glass text-white rounded-box w-52">
                        {
                            navItems.map(item => <Link key={item.path}>
                                {item.label}
                            </Link>)
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Logo</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="flex gap-x-12 justify-end w-full">
                    {
                        navItems.map(item => <Link to={item.path} key={item.path}>
                            {item.label}
                        </Link>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;