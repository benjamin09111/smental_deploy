import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const Main = () => {
    //todo el contenido de la app
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="md:hidden">
                <Footer />
            </div>
        </div>
        
    )
}

export default Main