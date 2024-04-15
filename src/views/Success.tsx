import { Card, Row,Space,Typography } from "antd"

const Success:React.FC=()=>
{
    const {Text}=Typography;
    return(<>
    <Row justify={'center'}>
    <Card hoverable>
      <Space direction="vertical">
  <svg width="184px" height="184px" viewBox="-61.44 -61.44 1146.88 1146.88" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.01024" >
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.096"/>
    <g id="SVGRepo_iconCarrier">
      <path fill="#00b899" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/>
    </g>
  </svg>
  <Text style={{color:'darkgreen',fontSize:30 ,paddingLeft:30}} strong>Booking Successfully completed !!</Text>
  </Space>
  </Card>
</Row>

    </>)
}
export default Success;