import { recordDownloads } from "../../api"
const Featured = ({name, downloadUrl, image, isFree, _id}) => {
    return( 
        <a 
            className='w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/5 p-2'
            href={`/review/${_id}`}
        > 
            <div className='bg-white w-full flex flex-col p-4 cursor-pointer items-center rounded-lg shadow mx-auto h-full '>
                <div className='mb-4 p-2 h-1/2 overflow-hidden'> 
                    <img 
                        src={image} 
                        alt = "product"
                        className='hover:scale-110 transition h-full w-full'
                    /> 
                </div>
                <div className='mb-4 h-1/4'> 
                    <h2 className='text-center text-sm font-medium'>{name.length > 30 ? `${name.slice(0, 30)}...` : name}</h2>
                </div>
                <div> 
                    <a onClick={() => recordDownloads(_id)} href={downloadUrl} target = "_blank" className=' h-1/4 bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-800 transition'> {isFree ? "Download": "Buy"} </a>
                </div>
            </div> 
        </a>
    )
}
export default Featured