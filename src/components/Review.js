import { useParams} from 'react-router-dom'
import Navbar from './navbar/Navbar'
import { fetchProgram, recordDownloads } from '../api'
import { ImWhatsapp } from 'react-icons/im'
import { useEffect, useState } from 'react'
const Review = () => {
    const [isLoadingResources, setIsLoadingResources] = useState(true)
    const [imageUrl, setImageUrl] = useState('')
    const [program, setProgram] = useState({
        name : '', 
        description : '',
        image : new URL('https://slaiz.link'),
        downloads : '',
        isFree : '',
        downloadUrl : '',
        comment : '',
        isLoaded : false,
    })
    const {id} = useParams()
    useEffect(() => {
        fetchProgram(id, setIsLoadingResources, setProgram)
    }, [])
    useEffect(() => {
        const newImageUrl = new URL(program.image)
        setImageUrl(newImageUrl)
    }, [program])
    if(isLoadingResources){
        return(
            <div> 
                <Navbar />
                <div className='mt-12 flex px-4 flex-col gap-4 md:flex-row max-w-7xl md:mx-auto md:justify-center md:items-center '> 
                    <div className='skeleton__loader-wrapper'> 
                        <div className='product__image-container'> 
                            <div className='animated-mover'></div>
                        </div>
                        <div className='product-title'> 
                            <div className='animated-mover'></div>
                        </div>
                        <div className='download-button'> 
                            <div className='animated-mover'></div>
                        </div>
                    </div>
                    <div className='skeleton__loader-wrapper'> 
                        <div className='product__image-container'> 
                            <div className='animated-mover'></div>
                        </div>
                        <div className='product-title'> 
                            <div className='animated-mover'></div>
                        </div>
                        <div className='download-button'> 
                            <div className='animated-mover'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div> 
            <Navbar />
            <div className='py-4 flex px-4 flex-col gap-4 md:flex-row max-w-7xl md:mx-auto md:justify-center md:items-center'> 
                <div className='w-full md:p-20'> 
                    <img 
                        src={imageUrl}
                        alt = {"product"}
                        className="w-full"
                    />
                </div>
                <div className='flex flex-col gap-4 md:px-8 md:w-full'> 
                    <div> 
                        <h2 className='font-semibold text-2xl text-gray-700 md:text-4xl md:mt-8'>{program.name} </h2>
                    </div>
                    <div> 
                        <small 
                            className={program.isFree ? 'bg-green-600 text-white px-4 py-1 text-lg rounded-full capitalize italic' : 
                            'bg-yellow-600 text-white px-4 py-1 text-lg rounded-lg capitalize italic'
                        }>{program.isFree ? "Free" : "Premium Software"}
                        </small>
                    </div>
                    <div className='mt-2'> 
                        <p>{program.description}
                        </p>
                    </div>
                    {program.isFree ? <a 
                        href={`${program.downloadUrl}`}
                        target = "_blank"
                        className='mx-auto bg-blue-500 px-8 py-3 border-none font-semibold hover:bg-blue-800 hover:text-blue-200 transition text-white rounded-lg md:ml-0'
                        onClick={() => recordDownloads(id)}
                    >Download
                    </a>
                    :
                    <a 
                        className='bg-green-500 px-4 py-3 rounded-lg flex w-40 text-white text-sm gap-2'
                        href={`${program.downloadUrl}`}
                    >
                        <div className=''> 
                            <ImWhatsapp 
                                color='white'
                                className='text-xl'
                            />
                        </div>
                        <p>Whatsapp Us</p>
                    </a>}
                </div>
            </div>
        </div>
    )
}
export default Review