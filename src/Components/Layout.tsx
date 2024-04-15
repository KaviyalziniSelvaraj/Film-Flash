import * as React from 'react';
import { Layout, Row,Divider, Avatar, Menu,Button, Col ,Typography} from 'antd';
import Search from 'antd/es/input/Search';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {useSelector} from "react-redux";
import { ThemeProvider } from 'styled-components';
import { darkbg, lightbg } from '../style/layoutstyle';
import {  MoonFilled,MenuOutlined, SunFilled,UserOutlined } from '@ant-design/icons';
import ConfigProviderWrapper from './ConfigProviderWrapper';
import { imgresStyle } from '../style/CommonStyle';
import { RootState } from '../Redux/Rootreducer';
import { message } from 'antd';

interface ICustomLayoutProps {
    children: React.ReactNode;
}

const CustomLayout: React.FC<ICustomLayoutProps> = ({ children }) => {
    const status = useSelector((state: RootState) => state.login.status);
    console.log(status);
    const avatarval=status?'K':<UserOutlined />
    const [isDark, setIsDark] = useState(false);
    const nav = useNavigate();
    const {Text}=Typography;
    const handleToggleTheme = () => {
        setIsDark(prevState => !prevState);
    };
    return (
        <ThemeProvider theme={{ configprovider: isDark ? 'dark' : 'light' }}>
            <ConfigProviderWrapper>
                <Layout>
                    <Header style={{ marginTop: 20, marginBottom: 20, background: isDark ? darkbg : lightbg }}>

                        <Row justify={'space-between'}>
                        <img src='logo1.jpg' style={imgresStyle}></img>
                            <Col xs={1} sm={2} xl={18} lg={12} xxl={12}>
                            <Menu  mode='horizontal' theme='dark' style={{background: isDark ? darkbg : lightbg }}  overflowedIndicator={<MenuOutlined/>}>
                                <Menu.Item>
                                <Text style={{color:'white'}} onClick={()=>{nav('/')}}>Home</Text>
                                </Menu.Item>
                                <Menu.Item>
                                <Text style={{color:'white'}} onClick={()=>{
                                    if(status)
                                        {
                                            nav('/Orders');
                                        }
                                    else{
                                        message.info('Please Login to continue');
                                    }
                                }}>Booking</Text>
                                </Menu.Item>
                                <Menu.Item>
                                <Search style={{ width: '30vw',paddingTop:15}} placeholder='search'/>
                                </Menu.Item>
                                <Menu.Item>
                                <Avatar size={40} style={{ backgroundColor: "darkred" }} onClick={() => {
                                    if(status){
                                        nav('/Profile')
                                    }
                                    else
                                    {
                                        nav('/Login');
                                        console.log(status);
                                    }
                               }}>{avatarval}
                                </Avatar>
                                </Menu.Item>
                                <Menu.Item>
                                <Button onClick={handleToggleTheme} icon={!isDark ? <MoonFilled /> : <SunFilled />}>Theme</Button>
                                </Menu.Item>
                            </Menu>
                            </Col>
                           

                        </Row>
                    </Header>
                    <Content style={{ position: 'relative', minHeight: '100vh' }}>
                        {children}
                    </Content>
                    <Divider />
                    <Footer>
                        <center>CopyRight @ Kv.Net</center>
                    </Footer>
                </Layout>
            </ConfigProviderWrapper>
        </ThemeProvider>
    );
};

export default CustomLayout;

{/* <Col xs={4} sm={4} xl={12} lg={12}>
<Menu items={items} mode='horizontal' theme='light' style={{ alignItems: 'center', background: isDark ? darkbg : lightbg }} >
<Menu.Item>
<Search enterButton="search" style={{ width: '30vw', padding: 15 }}></Search>
<Avatar size={40} style={{ backgroundColor: "darkred" }} onClick={() => { nav('/Login') }}>K</Avatar>
<Button onClick={handleToggleTheme} icon={!isDark ? <MoonFilled></MoonFilled> : <SunFilled></SunFilled>}></Button>
</Menu.Item>
</Menu>
</Col>
 */}






                            