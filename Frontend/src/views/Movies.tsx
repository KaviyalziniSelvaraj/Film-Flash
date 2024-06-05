import { StarFilled } from "@ant-design/icons";
import { Row ,Typography, Space,  Button, Tag, Breadcrumb, Col, Flex, message} from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import Moviesstyle from "../style/Moviesstyle";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Rootreducer";

const Movies:React.FC=()=>{
    const {Text}=Typography;
    const values=useLocation();
    const status = useSelector((state: RootState) => state.login.status);
    const {title,rating,genre,certified,bg}=values.state;
    const nav=useNavigate();
    return (<>
{/*         <Row justify= 'center' style={{paddingTop:60,backgroundImage: `url(${bg})`,backgroundRepeat:'no-repeat',height:'100vh',backgroundSize:'cover'}}>
 */}            
 <div className="h-full min-h-screen overflow-hidden grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 bg-black">
    <img className=" h-dvh overflow-hidden sm:w-dvw md:w-dvw lg:w-auto xl:w-auto mx-auto" src={bg}/>
 <Col className=" my-auto py-5">
                <Flex  align='center' vertical gap={10}>
                        <Text style={Moviesstyle.title}>{title}</Text>
                        <Text style={Moviesstyle.text}>{rating}/5  <StarFilled style={{color:'red'}} /></Text>
                        <Space direction="horizontal">
                            <Tag>2D</Tag>
                            <Tag>Tamil</Tag>
                        </Space>                     
                            <p className=" text-white font-medium text-xl">{certified}/{genre}/2hr 30min</p>
                                <Button type="primary" onClick={()=>{
                              nav('/Theatreinfo',{state:{title,certified,genre}});
                            // if(status)
                            //     {
                            //         nav('/Theatreinfo',{state:{title,certified,genre}});
                            //     }
                            // else{
                            //     message.info('Please Login to continue');
                            // }
                            
                        }} >BOOK TICKETS</Button>
                </Flex>
                </Col>
                </div>
{/*         </Row>
 */}
    
   
    </>)
}
export default Movies;