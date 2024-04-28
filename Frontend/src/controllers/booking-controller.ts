import axios, { AxiosResponse } from "axios";
import { Bookingdetail } from "./interface";
import { message } from "antd";

export const bookticket =async(value:Bookingdetail)=>
{
    await axios.post('http://192.168.31.98:3001/booking',
    {'name':value.name, 'movie': value.movie, 'theatre': value.theatre ,'showtime':value.showtime,'date':value.date,'seats':value.seats,'count':value.count}
    ).then((value: AxiosResponse) => {
        message.success('Booking completed Successfully');
    });
    return true;
}
export const retrievebookingdetails = async (value:String) => {
    try {
        const response: AxiosResponse = await axios.get('http://192.168.31.98:3001/booking', {
            params: {
                name:value
            }
        });
        const res=response.data;
        message.success(JSON.stringify(res));
        message.success('booking successfully fetched!');
        return res;
        
    } catch (error) {
        message.error('fetching failed!!');
        console.error('Error during fetching:', error);
        return false;
    }
};