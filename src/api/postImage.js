import axios from 'axios'
import { rootUrl } from './rootUri'
const postImage = (formData, id) => {
    axios({
        url : "programs/post-image", 
        method : "post", 
        data : formData, 
        baseURL : rootUrl(),
        headers : {
            "content-type" : "multipart/form-data"
        }
    }). 
    then(response => console.log(response)). 
    catch(err => console.log(err))
}
export default postImage