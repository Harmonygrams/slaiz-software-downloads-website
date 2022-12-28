import axios from 'axios'
import { rootUrl } from './rootUri'
const fetchFeaturedPrograms = (isLoadingResources, setPopularSoftware) => {
    axios({
        method : "GET", 
        url : "programs/popular-software/", 
        baseURL : rootUrl()
    }). 
    then(response => response.data). 
    then(data => {
        const popularSoftware = data.data.map(data => data)
        setPopularSoftware(software => ({...software, featuredSoftware : popularSoftware}))
        return popularSoftware
        
    }
    ).
    then(popularSoftware => isLoadingResources(prevData => ({...prevData, featuredSoftware : true}))).
    catch(err => console.log(err))
}
export default fetchFeaturedPrograms