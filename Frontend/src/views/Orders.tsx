import {Button,Card,Typography, message} from "antd";
import { retrievebookingdetails } from "../controllers/booking-controller";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Rootreducer";
const Orders:React.FC=()=>
    {
        const{Text}=Typography;
        const name = useSelector((state: RootState) => state.login.name);
        const handleButtonClick = async () => {
            try {
                const result = await retrievebookingdetails(name);
                <Card>
                <Text>{result.message}</Text>
                <Text>{result.movie}</Text>
                <Text>{result.theatre}</Text>
                <Text>{result.showtime}</Text>
                <Text>{result.date}</Text>
                <Text>{result.seats}</Text>
                <Text>{result.count}</Text>
                </Card>
            } catch (error) {
                message.error('failed');
            }
        }
        return(<>
        <Button onClick={handleButtonClick}>Get Booking Details</Button>
        </>)
    }
    export default Orders;