import { Card, Col, Flex, Image, Rate, Row, Typography } from "antd"
import Meta from "antd/es/card/Meta";
import React from "react";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
interface cardcontent {
  title: string;
  alt: string;
  src: string;
  rating: number;
  genre:String;
  certified:String
  bg:String
}
const Cardelement: React.FC<cardcontent> = ({ ...props }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(async () => {
      await onChange(loading);
    }, 1000);
  })
  const onChange = (checked: boolean) => {
    setLoading(false);
  };
  
  const { Text } = Typography;
  const { title, alt, src, rating ,genre,certified ,bg} = props;
  const nav=useNavigate();
  return (
    <>
    <Row justify='space-around' style={{padding:20, paddingLeft:40}}>
      <Card  loading={loading}
        hoverable
        cover={
         
          <Image src={src} alt={alt} loading="lazy"></Image>
        }
          onClick={()=>
          {
            nav('/Movies',{state:{title:title,src:src,rating:rating,genre:genre,certified:certified,bg:bg}});
          }}
        
      >
        <Meta
          title={title}
          description={
            <>
            <Text style={{fontFamily:'serif'}}>{genre}</Text><br/>
              <Rate allowHalf defaultValue={rating} disabled /></>}
        />
        <Row>
          <Text type='danger' strong>{rating}/5</Text>
        </Row>
      </Card>
      </Row>
    </>
  )
}
export default Cardelement;