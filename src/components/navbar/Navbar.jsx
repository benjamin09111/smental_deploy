import { useState } from "react";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    
    return (
        <nav style={{height: "5vh", zIndex: "999999"}} className="bg-third-custom p-4 flex items-center justify-between fixed top-0 left-0 w-full">
            <div className="flex items-center space-x-2">
                <span className="icon-[mdi--head-heart-outline] size-9 text-primary-custom "></span>
                <span className="text-primary-custom font-semibold text-lg whitespace-nowrap">S-Mental</span>
            </div>
            
            <div className="flex items-center justify-end space-x-4">
                <button className="bg-gray-700 text-primary-custom px-1 py-1 rounded-md hover:bg-gray-600 flex items-center">
                    <span className="icon-[solar--settings-linear] size-7"></span>
                </button>

                <div className="flex items-center space-x-2 md:flex">
                    <img src="https://via.placeholder.com/40" alt="Foto de perfil" className="h-9 w-9 rounded-full border-2 border-gray-700" />
                    <div className="text-primary-custom font-medium">
                        <span className="hidden md:inline-block">Usuario</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
