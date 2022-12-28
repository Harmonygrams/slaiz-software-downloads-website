import axios from 'axios'
import { rootUrl } from './rootUri'
const fetchProgram = (id, setIsLoadingResources, setProgram) => {
    axios({
        method : "POST", 
        url : "programs/review",
        baseURL : rootUrl(),
        data  : {_id : id}
    }).then(response => {
        const data = response.data.data
        setProgram(prevData => ({...prevData, ...data, isLoaded : true}))
        return data 
    }). 
    then(data => setIsLoadingResources(false)).
    catch(err => console.log({}))
}
export default fetchProgram