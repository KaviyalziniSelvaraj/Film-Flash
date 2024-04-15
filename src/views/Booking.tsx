import { Button, Card ,Col,Flex,QRCode,Row,Typography} from "antd"
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { btnstateinterface, seatinterface } from "../Redux/Seatreducer";
import { RootState } from "../Redux/Rootreducer";

const Booking:React.FC=()=>
{
    const nav=useNavigate();
    const values=useLocation();
    const movie=values.state.movie;
    const time=values.state.time;
    const date=values.state.date;
    const title=values.state.title;
    const seats:seatinterface[]=values.state.seats;
    const {Text}=Typography;
    const count = useSelector((state: RootState) => state.seat.count);
    return(
        <>
            <Row justify={'center'}>
            <Col xs={24} sm={18} lg={12} xl={12} >
            <Card>
            <Flex vertical gap={10}>
            <Text>Hi...confirm booking</Text>
            <Text>Movie: {movie}</Text>
            <Text>Theatre: {title}</Text>
            <Text>ShowTime: {time}</Text>
            <Text>Date: {date}</Text>
            <Text>Seats :{seats.map((t, index) => (<span key={index}>{t.row} - {t.seat},</span>))}</Text>
            <Text>count :{count}</Text>
            <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={date+time+title}
    />
            <Button onClick={()=>
            {nav('/success')}}>PAY ₹{count*150}</Button>
            </Flex>
        </Card>
        </Col>
        </Row>
        
        </>
    )
}
export default Booking;