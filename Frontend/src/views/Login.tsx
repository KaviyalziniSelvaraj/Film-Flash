
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Row, Space, Typography ,Card,Button,Col,Flex} from 'antd';
import Loginmodel from '../controllers/interface';
import { checkdata} from '../controllers/login-controller';
import { useDispatch} from "react-redux";
import { Accountstatus } from '../Redux/Seataction';
import React from 'react';
 const Login:React.FC=()=>{
    const dispatch = useDispatch();
    const form=useForm<Loginmodel>();
    const {Text}=Typography;
    const nav=useNavigate();
    const {namevalidation,emailvalidation}=Validation;
    const {formState,handleSubmit,register}=form;
    const {errors}=formState;
    return (
    <>
    <Row justify={'space-around'} style={{paddingTop:50}}>
        <form onSubmit={handleSubmit(async(value:Loginmodel)=>{
           const result= await checkdata(value);
           if(result)
            {
                dispatch(Accountstatus());
                nav('/',{replace:true,state:{value,result}});
            }
           else
           {
            window.location.reload();
           }
            })}>
        <Card style={{alignItems:'center'}}>
        <Col xs={24} xl={24} >
        <Flex vertical gap={20} >
        <Text style={{textAlign:'center',font:'caption',fontWeight:'bold'}}>Log In</Text>
        <Space direction='horizontal'>
        <Text>Username</Text>
        <input id={'name'}  formNoValidate {...register('name',namevalidation)}></input>
        </Space>
        <p style={{color:'maroon'}}>{errors.name?.message}</p>
        <Space  direction='horizontal' size={35}>
        <Text>Email</Text>
        <input id={'email'} formNoValidate {...register('email',emailvalidation)}></input>
        </Space>
        <p style={{color:'maroon'}}>{errors.email?.message}</p>
        <Space  direction='horizontal'>
        <Text>Password  </Text>
        <input id={'pwd'} formNoValidate {...register('pwd')}></input>
        </Space>
        <Text style={{textAlign:'end'}}>Don't Have an Account? <Text onClick={()=>{nav('/Signup')}} style={{color:'blue'}}>Signup</Text></Text>
        <Button htmlType='submit'>SUBMIT</Button>
        </Flex>
        </Col>
        </Card>
        </form>
    </Row>
    </>)
}
const Validation={
    namevalidation:{
        required:{
            value:true,
            message:"**Enter username**",
        }
    },
    emailvalidation:{
        required:{
            value:true,
            message:"**Enter email**",
        },
        pattern:{
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid Email!!"
        }
    }
    
}
export default Login;