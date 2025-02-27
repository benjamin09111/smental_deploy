import React, { useState, useEffect, useRef } from 'react';
import UserPopup from '../UserPopup/UserPopup';

const NavbarHome = ({ tipo }) => {
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
        <nav style={{ height: "10vh", zIndex: "999999", transition: "top 0.3s" }} className={`bg-third-custom p-4 flex items-center justify-between fixed ${visible ? "top-0" : "-top-[92px]"} lg:top-0 left-0 w-full`}>
            <div className="flex items-center space-x-2">
                <span className="icon-[mdi--head-heart-outline] size-9 text-primary-custom "></span>
                <span className="text-primary-custom font-semibold text-lg whitespace-nowrap">S-Mental</span>
                <div className="text-2xl text-gradient">{tipo === "psicologo" ? "Perfil: PSICÓLOGÍA" : (tipo === "admin" ? "Perfil: ADMIN" : "")}</div>
            </div>
            
            {/* Contenedor flex para alinear el botón de búsqueda y la foto de usuario */}
            <b>
                {localStorage.getItem("name")}
            </b>

            {showUserPopup && (
                <div ref={popupRef} className="absolute top-0 right-0 rounded-lg shadow-lg p-4">
                    <UserPopup />
                </div>
            )}
        </nav>
    );
}

export default NavbarHome;
