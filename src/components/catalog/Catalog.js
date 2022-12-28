import Navbar from "../navbar/Navbar"
import {useEffect, useState} from 'react'
import {IoFilterSharp} from 'react-icons/io5'
import {MdCheckBox, MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'
import { fetchCustomPrograms } from "../../api"
import {FiSearch} from 'react-icons/fi'
import Featured from '../featured/Featured'
const Catalog = () => {
    const [filterOptions, setIsFilterOptions] = useState({
        mostPopular : false, 
        graphicsEditing : false, 
        pointOfSales : false, 
        videoEditing : false, 
        others : false,
    })
    const [filter, setFilter] = useState(false)
    const [isLoadingResources, setIsLoadingResources] = useState(true)
    const [searchProgram, setSearchProgram] = useState('')
    const [software, setSoftware] = useState([])
    
    //used to query the database when the user is search for a software
    const handleSearch = (e) => {
        setIsLoadingResources(true)
        setSearchProgram(e.target.value)
    }
    const applyFiler = (option) => {
        setIsFilterOptions(prev => {
            return({
                mostPopular : false, 
                graphicsEditing : false, 
                pointOfSales : false, 
                videoEditing : false, 
                others : false,
                [option] : !prev[option]
            })
        })
    }
    useEffect(() => {
        //populate the page with respect to the research
        fetchCustomPrograms(setIsLoadingResources, setSoftware, searchProgram)
    }, [searchProgram])

    useEffect(() => {
        const disableFilter = (e) => {
            if(filter && !e.target.classList.contains('filter-button')){
                setFilter(false)
            }
        }
        document.addEventListener('click',disableFilter )
        return () => {document.removeEventListener('click', disableFilter)}
    })
    return(
        <div> 
            <Navbar />
            <div className="px-4 max-w-7xl md:mx-auto mt-4"> 
                <div className="flex flex-col md:justify-between flex-wrap mt-4 gap-2"> 
                    <form> 
                        <div className="flex items-center gap-2 border-2 py-1 rounded-lg px-4 text-gray-600 md:py-2"> 
                            <FiSearch />
                            <input 
                                className="outline-none flex-1" 
                                placeholder="Search"
                                name = {"name"}
                                onChange = {handleSearch}
                                value = {searchProgram}
                            />
                        </div>
                    </form>
                    <div className="relative flex justify-centers"> 
                        <p 
                            id="filter-button"
                            className="filter-button flex items-center gap-2 border-2 px-4 py-1 rounded-lg text-gray-600 cursor-pointer md:py-2"
                            onClick = {() => setFilter(prev => !prev)}
                        >
                            <IoFilterSharp /> Filters
                        </p>
                        {filter && <div className="bg-white w-full border-2 absolute w-48 top-[100%] mt-1 rounded-lg z-10">
                            <div
                                className="most-popular flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 text-gray-600 transition"
                                onClick = {() => applyFiler('mostPopular')}
                                > 
                                {filterOptions.mostPopular ? <MdCheckBox color="green"/> : <MdOutlineCheckBoxOutlineBlank /> }
                                <p> Most Popular </p>
                            </div>
                            <div 
                                className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 text-gray-600 transition"
                                onClick = {() => applyFiler('graphicsEditing')}
                            > 
                                {filterOptions.graphicsEditing ? <MdCheckBox color="green"/> : <MdOutlineCheckBoxOutlineBlank /> }
                                <p> Graphics Editing </p>
                            </div>
                            <div 
                                className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 text-gray-600 transition"
                                onClick = {() => applyFiler('pointOfSales')}
                            > 
                                {filterOptions.pointOfSales ? <MdCheckBox color="green"/> : <MdOutlineCheckBoxOutlineBlank /> }
                                <p> Point Of Sales </p>
                            </div>
                            <div 
                                className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 text-gray-600 transition"
                                onClick = {() => applyFiler('videoEditing')}
                            > 
                                {filterOptions.videoEditing ? <MdCheckBox color="green"/> : <MdOutlineCheckBoxOutlineBlank /> }
                                <p> Video Editing </p>
                            </div>
                            <div 
                                className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 text-gray-600 transition"
                                onClick = {() => applyFiler('others')}
                            > 
                                {filterOptions.others ? <MdCheckBox color="green"/> : <MdOutlineCheckBoxOutlineBlank /> }
                                <p>Others</p>
                            </div>
                        </div>}
                    </div>
                </div>
                <h2 className="text-center text-4xl font-medium text-gray-600 border-b-2 py-4"> Catalogue </h2>
                <div className="flex flex flex-wrap mt-8"> {!isLoadingResources && 
                    software.map(program => <Featured key={program.id} {...program}/>)} 
                </div>
                </div>
                {isLoadingResources && 
                <div>
                    <div className="max-w-7xl md:mx-auto"> 
                        <div className='skeleton__loader-wrapper mt-12 px-4'> 
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
                    </div>
                    <div className="max-w-7xl md:mx-auto"> 
                        <div className='skeleton__loader-wrapper mt-12 px-4'> 
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
                </div>
                </div>}
            
        </div>
    )
}
export default Catalog