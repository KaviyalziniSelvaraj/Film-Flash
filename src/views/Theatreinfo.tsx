import { Button, Card, Col, Flex, List,Row,Segmented,Space,Typography} from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import Bookingstyle from "../style/Bookingstyle";
import theatredetail from "../data/Theatre";
import { useState } from "react";
const Theatreinfo:React.FC=()=>{
    const nav=useNavigate();
   const [date,setDate]=useState(17);
    const {Text}=Typography;
    const values=useLocation();
    const{title,certified,genre}=values.state;
    const movie=title;
    return (<>
    <Space direction="vertical" size={10} style={{padding:20}}>
        <List grid={{xs:8,md:18,xl:24}}>
        <Text style={Bookingstyle.title}>{title} </Text>
        <Text style={Bookingstyle.text}>{certified} </Text>
        <Text style={Bookingstyle.text}>{genre} </Text>
        </List>
        <Segmented
        options={[
            {
                label:(
                    <div>
                        <div>MAR</div>
                        <div>18</div>
                    </div>
                    
                ),
                value:18
                
            },
            {
                label:(
                    <div>
                    <div>MAR</div>
                    <div>19</div>
                </div>
                    
                ),
                value:19
            },
            {
                label:(
                    <div>
                        <div>MAR</div>
                        <div>20</div>
                    </div>
                    
                ),
                value:20
            },
            {
                label:(
                    <div>
                    <div>MAR</div>
                    <div>21</div>
                </div>
                    
                ),
                value:21       
            }
        ]}
        onChange={(value)=>{setDate(value)}}>

        </Segmented>
        <List 
        grid={{
            gutter:16,
            xs:1,
            sm:2,
            md:3,
            lg:3,
            xl:2,
            xxl:2
        }}
       dataSource={theatredetail}  
       header={<div></div>}
       renderItem={(items)=>
        {
            const clicked=(time: string)=>
            {
                nav('/Seating',{state:{items,time,date,movie}});
            }
            return(
                <>
                <Row justify='space-around'    style={{padding:10}}>
                    <Card size='small'>
                    <List.Item.Meta
                    title={<Text> {items.title}</Text>}
                    ></List.Item.Meta>
                    <Row>
                    <Col style={{paddingRight:10}}>
                    <Button onClick={()=>{ clicked('10:45 AM')}} size="middle">10:45 AM</Button>
                    </Col>
                    <Col  style={{paddingRight:10}}>
                    <Button onClick={()=>{ clicked('02:15 PM')}} size="middle">02:15 PM</Button>
                    </Col>
                    <Col  style={{paddingRight:10}}>
                    <Button onClick={()=>{ clicked('06:15 PM')}} size="middle">06:15 PM</Button>
                    </Col>
                    <Col  style={{paddingRight:10}}>
                    <Button onClick={()=>{ clicked('10:00 PM')}}>10:00 PM</Button>
                    </Col>
                    </Row>
                    </Card>
                    </Row>
                </>
            )
        }}>
        </List>
        </Space>
    </>)
}
export default Theatreinfo;