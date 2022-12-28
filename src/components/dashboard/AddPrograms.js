import FormControlLabel from '@mui/material/FormControlLabel';
import {useState, useRef} from 'react'
import { styled } from '@mui/material/styles'
import postPrograms from '../../api/postPrograms'
import Switch, { SwitchProps } from '@mui/material/Switch';
const AddPrograms = () => {
    const [productImage, setProductImage] = useState(null)
    const formRef = useRef()
    const [fileData, setFileData] = useState({
        name : '', 
        description : '', 
        downloads : 0, 
        isFree : false, 
        downloadUrl : '', 
        tags : []
    })
    console.log(fileData.isFree)
    //updaing the file data with respect to changes to the form
    const updateFileData = (e) => {
        setFileData(prevFileData => ({...prevFileData, [e.target.name] : e.target.value}))
    }
    //submit form data 
    const updateProductImage = (e) => {
        setProductImage(e.target.files[0])
    }
    const sumbitFileData = async (e) => {
        e.preventDefault() 
        const form = new FormData(formRef.current)
        form.set('isFree', fileData.isFree)
        postPrograms(form)
    }
    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#3c82f6',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            // color: '#33cf4d',
            color : "red",
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#3c82f6',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
    }));
    console.log(fileData.isFree)
    return(
        <div className='flex justify-center'>
            <form ref={formRef} className='flex flex-col py-8 bg-white mt-8 px-6 form__add-new-program' onSubmit={sumbitFileData}> 
                <div className='flex flex-col gap-2'> 
                    <label
                        className='text-gray-800 text-lg'
                    > Name of software</label>
                    <input 
                        type = {"text"}
                        name = {"name"}
                        value = {fileData.name}
                        onChange = {updateFileData}
                        className = "input__field-new-program font-mono"
                        
                    /> 
                </div>
                <div className='flex flex-col gap-2 mt-4'> 
                    <label
                        className='text-gray-800 text-lg'
                    > Description</label>
                    <textarea
                        name = {"description"}
                        value = {fileData.description}
                        onChange = {updateFileData}
                        className = "input__field-new-program font-mono"
                        rows = {5}
                    > 
                    </textarea>
                </div>
                <div className='mt-4'> 
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }}
                    onChange={(e) => setFileData(prev => ({...prev, isFree : e.target.checked}))}
                    checked = {fileData.isFree}
                    name = {"isFree"}
                    /> }
                    label="Freeware"
                />
                </div>
                <div className='flex flex-col gap-2 mt-4'> 
                    <label className='text-gray-800 text-lg'> Url</label>
                    <input 
                        type = {"text"}
                        name = {"downloadUrl"}
                        value = {fileData.downloadUrl}
                        onChange = {updateFileData}
                        className = "input__field-new-program font-mono"
                        placeholder= {"https://www.example.com"}
                    />
                </div>
                <div className='flex flex-col gap-2 mt-4'> 
                    <label className='text-gray-800 text-lg'> Tags </label>
                    <input
                        name = {"tags"}
                        value = {fileData.tags}
                        onChange = {updateFileData}
                        className = "input__field-new-program"
                    />
                </div>
                <div className='mt-4'> 
                    <input 
                        type = {"file"}
                        name = {"image"}
                        id = "image"
                        onChange = {updateProductImage}
                    />
                </div>
                <div className='mt-4 flex justify-end'> 
                    <button className='border-2 px-6 py-2 bg-blue-500 text-lg text-white rounded-lg hover:bg-blue-800 hover:text-gray-300 transition'> Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddPrograms