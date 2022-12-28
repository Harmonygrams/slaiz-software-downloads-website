import Logo from '../../assets/img/logo.png'
const Footer = () => {
    return(
        <div className=''> 
            <div className='flex items-center justify-between py-8 mt-4 mx-auto max-w-7xl px-4'> 
                <a className='w-14' href="/"> 
                    <img 
                        src={Logo}
                        alt="logo"
                    />
                </a>
                <div className='flex flex-col gap-4'> 
                    <a href="/"> Home </a>
                    <a href="/catalogue"> Catalogue </a>
                </div>
            </div>
            <div className='bg-blue-800 text-white text-center text-sm py-2'> 
                <small>&copy; Copyright <a href="/">Slaiz</a>. All Rights Reserved </small>
            </div>
        </div>
    )
}
export default Footer