import {React, useState, useEffect} from 'react'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Popular from './popular/Popular'
import Footer from './footer/Footer'
import Featured from './featured/Featured'
import {fetPopularPrograms, fetchFeaturedPrograms} from '../api'
import Loaders from '../loaders'
const Home = () => {
    const [isLoadingResources, setIsLoadingResources] = useState({
        mostPopularSoftware : false, 
        featuredSoftware : false, 
    })
    const [software, setSoftware] = useState({
        mostPopularSoftware : [], 
        featuredSoftware : []
    })
    useEffect(() => {
        //fetching popular programs 
        fetPopularPrograms(setIsLoadingResources, setSoftware)
        fetchFeaturedPrograms(setIsLoadingResources, setSoftware)
    }, [])
    return(
        <div> 
            <Navbar />
            <Hero />
            <div className='px-4 mt-4 max-w-7xl mx-auto'> 
                <h2 className='text-xl font-semibold my-4 text-gray-600'>Most Popular </h2>
                <div className='bg-white py-4 md:flex flex-wrap rounded-lg'> 
                {isLoadingResources.mostPopularSoftware ? 
                software.mostPopularSoftware.map(program => <Popular key={program._id} {...program}/>) : 
                <div className='w-full flex justify-center items-center'> 
                    <Loaders />
                </div>
                }
                </div>
            </div>
            <div className='px-4 mt-4 max-w-7xl mx-auto'> 
                <h2 className='text-xl font-semibold my-4 text-gray-600'>Featured Software</h2>
                <div className='flex flex flex-wrap'> 
                {
                    isLoadingResources.featuredSoftware ? 
                    software.featuredSoftware.map(program => <Featured key={program._id} {...program}/>)
                    : 
                    <div className='skeleton__loader-wrapper'> 
                        <div className='product__image-container'> 
                            <div className='animated-mover'>
                            </div>
                        </div>
                        <div className='product-title'> 
                            <div className='animated-mover'>
                            </div>
                        </div>
                        <div className='download-button'> 
                            <div className='animated-mover'>
                            </div>
                        </div>
                    </div>
                }
                </div>
            </div>
            <Footer /> 
        </div>
    )
}
export default Home