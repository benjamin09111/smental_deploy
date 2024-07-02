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
        <nav style={{ height: "10vh", zIndex: "999999", transition: "top 0.3s" }} className={`bg-gray-900 p-4 flex items-center justify-between fixed ${visible ? "top-0" : "-top-[92px]"} lg:top-0 left-0 w-full`}>
            <div className="flex items-center space-x-2">
                <span className="icon-[mdi--head-heart-outline] size-9 text-primary-custom "></span>
                <span className="text-primary-custom font-semibold text-lg whitespace-nowrap">S-Mental</span>
            </div>
            
            <div className="flex items-center space-x-2">
                <button onClick={toggleUserPopup} className="focus:outline-none flex items-center gap-1">
                    <img src="/user.webp" alt="Foto de perfil" className="h-9 w-9 rounded-full border-2 border-gray-700" />
                    <div className="text-primary-custom font-medium">
                        <span className="hidden lg:inline-block">
                            {
                                tipo === "US373_USER$%7FEV" ? "Usuario" : (tipo ==="psicologo" ? "Psicólogo" : "Admin") 
                            }
                        </span>
                    </div>
                </button>
            </div>

            {showUserPopup && (
                <div ref={popupRef} className="absolute top-0 right-0 rounded-lg shadow-lg p-4">
                    <UserPopup setState={setState} />
                </div>
            )}
        </nav>
    );
}

export default Navbar;
