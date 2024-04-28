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
        <Row justify= 'center' style={{backgroundImage: `url(${bg})`, backgroundRepeat:'no-repeat ',height:900, backgroundSize:'cover'}}>
            <Col style={{paddingTop:100}}>
                <Flex  align='center' vertical gap={20}>
                        <Text style={Moviesstyle.title}>{title}</Text>
                        <Text style={Moviesstyle.text}>{rating}/5  <StarFilled style={{color:'red'}} /></Text>
                        <Space direction="horizontal">
                            <Tag>2D</Tag>
                            <Tag>Tamil</Tag>
                        </Space>
                        <Breadcrumb items={[{title:certified},{title:genre},{title:"2hr 30min"}]} style={Moviesstyle.text}></Breadcrumb>
                        <Button type="primary" onClick={()=>{
                            if(status)
                                {
                                    nav('/Theatreinfo',{state:{title,certified,genre}});
                                }
                            else{
                                message.info('Please Login to continue');
                            }
                            
                        }}>BOOK TICKETS</Button>
                </Flex>
                </Col>
        </Row>

    
   
    </>)
}
export default Movies;