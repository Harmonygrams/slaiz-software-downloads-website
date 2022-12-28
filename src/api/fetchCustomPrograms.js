import axios from 'axios'
import { rootUrl } from './rootUri'
const fetchCustomPrograms = (setIsLoadingResources, setSoftware, searchParams) => {
    axios({
        method : "GET", 
        url : `programs/custom-software?searchParams=${searchParams}`, 
        baseURL : rootUrl()
    }). 
    then(response => response.data). 
    then(data => {
        const popularSoftware = data.data.map(data => data)
        setSoftware(prev => popularSoftware)
        return popularSoftware
    }
    ).
    then(popularSoftware =>  setIsLoadingResources(false)).
    catch(err => console.log(err))
}
export default fetchCustomPrograms