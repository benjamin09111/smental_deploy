import { useState, useEffect } from "react";

const NavbarHome = ({ tipo }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos || currentScrollPos < 100;
            setVisible(visible);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <nav style={{ height: "10vh", zIndex: "999999", transition: "top 0.3s" }} className={`bg-gray-900 p-4 flex items-center justify-between fixed ${visible ? "top-0" : "-top-[92px]"} lg:top-0 left-0 w-full`}>
            <div className="flex items-center space-x-2">
                <span className="icon-[mdi--head-heart-outline] size-9 text-primary-custom "></span>
                <span className="text-primary-custom font-semibold text-lg whitespace-nowrap">S-Mental</span>
                <div className="text-2xl text-gradient">{tipo === "psicologo" ? "Perfil: PSICÓLOGÍA" : (tipo === "admin" ? "Perfil: ADMIN" : "")}</div>
            </div>
            
            <div className="flex items-center justify-end space-x-4">

            <input type="text" placeholder="Buscar..." className="min-h-9 w-1/3 px-2 py-1 rounded bg-gray-700 text-primary-custom focus:outline-none" />

                <button className="bg-gray-700 text-primary-custom px-1 py-1 rounded-md hover:bg-gray-600 flex items-center">
                    <span className="icon-[solar--settings-linear] size-7"></span>
                </button>

                <div className="flex items-center space-x-2 md:flex">
                    <img src="https://via.placeholder.com/40" alt="Foto de perfil" className="h-9 w-9 rounded-full border-2 border-gray-700" />
                    <div className="text-primary-custom font-medium">
                        <span className="hidden lg:inline-block">Usuario</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarHome;
