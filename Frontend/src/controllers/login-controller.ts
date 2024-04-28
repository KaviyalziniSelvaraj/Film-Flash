import axios, { AxiosResponse } from 'axios'
import Loginmodel from './interface';
import { message } from 'antd';
export const insertdata=async(value:Loginmodel)=>
{
    await axios.post('http://192.168.31.98:3001/login',
    { 'name': value.name, 'email': value.email ,'pwd':value.pwd}
    ).then((value: AxiosResponse) => {
        message.success('Signed up Successfully');
    });
    return true;

    
}
export const checkdata = async (value: Loginmodel) => {
    try {
        const response: AxiosResponse = await axios.get('http://192.168.31.98:3001/login', {
            params: {
                name: value.name,
                email: value.email,
                pwd: value.pwd
            }
        });
        message.success('Logged in successfully!')
        // Assuming you want to log the success message
        return true;
        // Or you can take other server-side actions based on the response
        
    } catch (error) {
        message.error('Login failed!!');
        console.error('Error during login:', error);
        return false;
        // Handle error, perhaps send an error response or take appropriate action
    }
};