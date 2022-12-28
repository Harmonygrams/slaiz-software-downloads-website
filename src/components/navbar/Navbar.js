import { useState, useEffect } from 'react' 
import Logo from '../../assets/img/logo.png'
const Navbar = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)
    const updateHamburgetMenu = () => {
        setIsHamburgerMenuOpen(prev => !prev)
    }
    useEffect(() => {
        const disableHamburger = () => {
            if(window.innerWidth >= 640){
                setIsHamburgerMenuOpen(false) 
            }
        }
        window.addEventListener('resize', disableHamburger)
        return () => {window.removeEventListener('resize', disableHamburger)}
    }, []) 
    return(
        <div className='shadow-lg bg-white'> 
            <div className="flex justify-between px-4 items-center py-2 relative max-w-7xl mx-auto"> 
                <a className="w-16" href="/"> 
                    <img 
                        src={Logo}
                        alt="logo"
                        className="w-full"
                    />
                </a>
                {isHamburgerMenuOpen ? 
                    <div className='sm:hidden closeHamburger w-8 h-8 flex justify-center' onClick={updateHamburgetMenu}>
                        <div className="bg-gray-700 w-1 h-8 rounded-lg"></div>
                        <div className="bg-gray-700 w-1 h-8 rounded-lg"></div>
                    </div>  
                    :
                    <div className='flex flex-col gap-1 cursor-pointer sm:hidden' onClick={updateHamburgetMenu}>
                        <div className="bg-gray-700 w-8 h-1 rounded-lg"></div>
                        <div className="bg-gray-700 w-8 h-1 rounded-lg"></div>
                        <div className="bg-gray-700 w-8 h-1 rounded-lg"></div>
                    </div>
                }
                <ul className="hidden sm:flex items-center gap-16 sm:block">
                    <li> <a className="text-lg font-lg text-gray-700 hover:text-blue-800 transition" href="/"> Home </a></li>
                    <li> <a className="text-lg font-lg text-gray-700 hover:text-blue-800 transition" href="/catalogue"> Catalogue </a></li>
                </ul>
            </div>
            {isHamburgerMenuOpen && <div className='bg-white pt-16 pb-16 shadow-lg pr-4 pl-4 absolute w-full border-t-2'> 
                <ul className="flex flex-col gap-4">
                    <li> <a className="text-lg pt-4 pb-4 font-medium text-gray-700" href="/"> Home </a></li>
                    <li> <a className="text-lg pt-4 pb-4 font-medium text-gray-700" href="/catalogue"> Catalogue </a></li>
                </ul>
            </div>}
        </div>
        
    )
}
export default Navbar
