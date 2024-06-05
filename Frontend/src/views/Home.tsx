import { Carousel, Row, Space, Typography,Flex} from "antd";
import Cardelement from "../Components/cardcomponent";
import { useLocation} from "react-router-dom";
import { data } from "../data/cardlist";
import Scrolltotop from "../Components/Scrolltotop";
import React from "react";
const {Title}=Typography;
  const Home: React.FC = () => {
  return (
    <>
      <Scrolltotop/>
    <Carousel autoplay>
      <img src="AD3.png" ></img>
      <img src="AD1.png" ></img>
      <img src="AD2.png" ></img>
    </Carousel>

        <h1 className="pt-10 text-xl px-10 font-bold">RECOMMENDED MOVIES</h1>
        <Space size={"middle"}  >
        <Row>
          {data.map(
            (f) => {
              return (
                <>
                <Flex>
                <Cardelement title={f.title}  alt={""} src={f.src} bg={f.bg} rating={f.rating}genre={f.genre} certified={f.certified}  />
                </Flex>         
                </>
              )
            }
          )
          }
          </Row>
          </Space>
      

    </>
  )
}
export default Home;
