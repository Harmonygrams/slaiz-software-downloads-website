import axios from 'axios'
import { rootUrl } from './rootUri'
const postPrograms = (query) => {
    axios({
        method : "POST", 
        baseURL : rootUrl(),
        url : "programs/software",
        data : query
    }).
    then(response => console.log(response)).
    catch(err => console.log(err))
}
export default postPrograms