import axios from 'axios'
import { rootUrl } from './rootUri'
const fetPopularPrograms = (isLoadingResources, setPopularSoftware) => {
    axios({
        method : "GET", 
        url : "programs/popular-software/", 
        baseURL : rootUrl()
    }). 
    then(response => response.data). 
    then(data => {
        const popularSoftware = data.data.map(data => data)
        setPopularSoftware(software => ({...software, mostPopularSoftware : popularSoftware}))
        return popularSoftware
        
    }
    ).
    then(popularSoftware => isLoadingResources(prevData => ({...prevData, mostPopularSoftware : true}))).
    catch(err => console.log(err))
}
export default fetPopularPrograms