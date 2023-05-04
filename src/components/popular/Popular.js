import {FiDownload} from 'react-icons/fi'
import {recordDownloads} from '../../api/index'
const Popular = ({name, downloads, image, isFree, downloadUrl, _id}) => {
    const imageUrl = new URL(image)
    return (
        <div className='md:w-1/2 xl:w-1/3'> 
            <a 
                href={`/review/${_id}`}
                className="cursor-pointer md:py-6 items-center flex justify-between items-centerpx-8 py-4 border-x border-b hover:bg-gray-100 px-6 transition m-2 gap-4"
            > 
                <div className='w-10'> 
                    <img 
                        src={imageUrl}
                        alt="product"
                    /> 
                </div>
                <div className=''> 
                    <h3 className='font-medium text-sm'>{name.length >= 20 ? `${name.slice(0, 19)}...` : name} </h3>
                    <p className='text-xs font-hairline'> Downloads {downloads}</p>
                </div>
                <small 
                    className={isFree ? 'bg-green-600 text-white px-2 text-xs rounded-lg capitalize italic' : 
                    'bg-yellow-600 text-white px-2 text-xs rounded-lg capitalize italic'
                }>
                        {isFree ? 'free' : 'premium'}</small>
                <a
                    href={downloadUrl}
                    target = {"_blank"}
                    onClick = {() => recordDownloads(_id)}
                >
                    <FiDownload 
                        className='text-4xl text-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-500 bg-blue-100 transition hover:text-white'
                    />
                </a>
            </a>
        </div>
    )
}
export default Popular