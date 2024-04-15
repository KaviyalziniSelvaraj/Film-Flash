import { Button, Flex, Row, Space, Typography } from "antd";
import SeatingUtil, { BtnInterface } from "../controllers/Seatarrangement";
import { Seataction } from '../Redux/Seataction';
import { useDispatch, useSelector } from "react-redux";
import { btnstateinterface } from "../Redux/Seatreducer";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../Redux/Rootreducer";

const Seatingcomponent: React.FC = () => {
  const { Text } = Typography;
  const values = useLocation();
  const nav=useNavigate();
  console.log(values.state);
  const {title} = values.state.items;
  const movie=values.state.movie;
  const time=values.state.time;
  const date=values.state.date;
  console.log(title);
  console.log(movie);
  console.log(time);
  console.log(date);
  const t: BtnInterface[][] = SeatingUtil.seatorder();
  const dispatch = useDispatch();
  const flag1 = useSelector((state: RootState) => state.seat.flag);
  const tp = useSelector((state: RootState) => state.seat.T);
  const count = useSelector((state: RootState) => state.seat.count);
  const seats = useSelector((state: RootState) => state.seat.seats);
  var ch = 64;
  return (
    <>
          <Text strong style={{ fontSize: 30}}>{title}</Text>
          <Flex style={{overflow:'scroll',padding:50}} wrap='wrap' gap={20} >
            {
              t.map((r) => {
                ch++;
                const chres: string = String.fromCharCode(ch);
                return (
                  <>
                    <Space direction="horizontal">
                      <Text style={{ paddingLeft: 20 }}>{String.fromCharCode(ch)
                      }</Text>
                      {
                        r.map((c) => {
                          if (c.value === 0) {
                            return (
                              <>
                              <Text style={{ paddingLeft: 20 }}>{String.fromCharCode(ch)
                      }</Text>
                              
                              </>
                            )
                          }
                          else {
                            return (
                              <>
                                <Button key={c.colidx} size="small"
                                  type={!tp[c.rowidx][c.colidx].type ? 'default' : 'primary'} onClick={() => {
                                    dispatch(Seataction(c.rowidx, c.colidx));
                                    if(!tp[c.rowidx][c.colidx].type==true)
                                      console.log(seats[0]);
                                      console.log(count);        
                                  }}>{c.value}
                                </Button>
                              </>
                            )
                          }
                        })
                      }
                    </Space>
                  </>
                )
              })
            }
            </Flex>
          <Flex justify={'center'}gap={40} >
            <Button disabled={flag1} size="large" type='primary' onClick={()=>
            {
              console.log(seats[0]);
              nav('/Booking',{state:{title,time,date,seats,movie}});
            }}>Pay </Button>
          </Flex>
    </>
  )
}

export default Seatingcomponent; 
