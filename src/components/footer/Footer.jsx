import React from 'react'

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white rounded-lg shadow dark:bg-gray-900">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://e7.pngegg.com/pngimages/228/99/png-clipart-mental-health-counselor-therapy-clinic-counseling-logo-psychology.png" class="h-8" alt="Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">S-Mental</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Sobre Nosotros</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Contacto</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 S-Mental™.</span>
            </div>
        </footer>
    )
}

export default Footer