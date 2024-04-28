import { seatinterface } from "../Redux/Seatreducer";

export default interface Loginmodel{
    name:string;
    email:string;
    pwd:string;
}
export  interface Bookingdetail
{
    name:String,
    movie:string;
    theatre:string;
    showtime:string;
    date:string;
    seats:seatinterface[];
    count:Number
}