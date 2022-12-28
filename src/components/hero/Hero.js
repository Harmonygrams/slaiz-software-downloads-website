import HeroImage from '../../assets/img/edupay.png'
const Hero = () => {
    return (
        <div className="flex flex-col px-4 py-8 gap-4 md:flex-row-reverse max-w-7xl md:mx-auto md:gap-2 md:items-center bodr"> 
            <div className='w-full p-4'> 
                <img 
                    src={HeroImage}
                    alt="hero"
                />
            </div>
            <div className='flex flex-col items-center md:items-start md:w-[50%] '>
                <h1 className='text-blue-500 text-2xl my-4 tracking-tight font-bold sm:font-extrabold sm:text-4xl'>  Biggest Third-party Software Vendor </h1>
                <p className='text-gray-800 leading-relaxed tracking-wider my-4 font-medium opacity-75 font-semibold text-lg'>We're the sure plug for any software you need. We've made provision for all accounting software, video editing software, graphics designing software, 
                    audio editing software etc. 
                </p>
                <a  className="px-8 py-3 my-4 bg-blue-500 text-white border-none font-semibold hover:bg-blue-800 transition hover:text-blue-200 rounded-lg hover:scale-110 transition text-sm" href="/catalogue"> Explore &#8594;</a>
            </div>
        </div>
    )
}
export default Hero 
// md:flex-row-reverse max-w-7xl md:mx-auto md:gap-2