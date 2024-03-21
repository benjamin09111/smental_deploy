const UserPopup = ({setState}) => {
  return (
    <div className="mx-auto w-60">
      <div className="bg-white rounded-md overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-third-custom">
          <svg
            aria-hidden="true"
            role="img"
            className="h-24 w-24 text-white rounded-full mx-auto"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
            ></path>
          </svg>
          <p className="pt-2 text-lg font-semibold text-gray-50">John Doe</p>
          <p className="text-sm text-gray-100">John@Doe.com</p>
          <div className="mt-5">
            <button onClick={()=>setState("perfil")} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 hover:bg-gray-800">
              Ver perfil
            </button>
          </div>
        </div>

        <div className="">
          <button href="#" className="px-4 py-2 hover:bg-gray-100 flex w-full items-center">
          <span class="icon-[mdi--incognito] size-5 text-gray-800"></span>
            <p className="text-sm font-medium text-gray-800 leading-none">Activar modo anónimo</p>
          </button>
        </div>

        <div className="border-b">
          <button className="px-4 py-2 hover:bg-gray-100 flex w-full items-center">
            <span className="icon-[solar--settings-linear] size-5 text-gray-800"></span>
            <span className="pl-3 text-sm font-medium text-gray-800 leading-none">
              Ajustes
            </span>
          </button>
        </div>

        <div className="">
          <button href="#" className="px-4 py-2 hover:bg-gray-100 flex w-full items-center">
            <span class="icon-[iconamoon--exit-thin] size-5 text-gray-800"></span>
            <p className="text-sm font-medium text-gray-800 leading-none">Cerrar sesión</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserPopup;
