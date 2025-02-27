import React, { useState, useEffect, useRef } from 'react';
import UserPopup from '../UserPopup/UserPopup';

const Navbar = ({ tipo, setState }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showUserPopup, setShowUserPopup] = useState(false);
    const popupRef = useRef(null);

    const toggleUserPopup = () => {
        setShowUserPopup(!showUserPopup);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos || currentScrollPos < 100;
            setVisible(visible);
            setPrevScrollPos(currentScrollPos);
            if (!visible) {
                setShowUserPopup(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowUserPopup(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav style={{ height: "8vh", zIndex: "999999", transition: "top 0.3s" }} className={`bg-secondary-custom px-4 flex items-center text-lg lg:text-xl py-4 justify-around fixed ${visible ? "top-0" : "-top-[25rem]"} lg:top-0 left-0 w-full`}>
            <div className="flex items-center space-x-2">
                <span className="icon-[mdi--head-heart-outline] size-10 text-primary-custom "></span>
                <span className="text-primary-custom font-semibold text-xl whitespace-nowrap">S-Mental</span>
            </div>
            
            <div className='font-semibold text-xl text-primary-custom/90'>
                {localStorage.getItem("nombre")}
            </div>

            <button className='underline text-lg' onClick={()=> {
                localStorage.removeItem("token");
                localStorage.removeItem("id");
                localStorage.removeItem("nombre");
                window.location.href = "/";
            }}>Salir</button>
        </nav>
    );
}

export default Navbar;
