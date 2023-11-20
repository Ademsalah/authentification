import axios from 'axios'


export const postauthUser = async(value)=>{
    const addinguser = await axios.post('http://localhos:4000/auth/register',{...value})
}