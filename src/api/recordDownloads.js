import axios from 'axios'
import { rootUrl } from './rootUri'
const recordDownloads = (id) => {
    console.log(id)
    const raw = {id : id}
    axios({
        method : "POST",
        baseURL : rootUrl(),
        url : "programs/download", 
        data : raw
    }).
    then(response => console.log(response)). 
    catch(err => console.log(err))
}
export default recordDownloads