import { ConfigProvider ,theme} from "antd"
import * as React from 'react';
import { darkbg } from "../style/layoutstyle";
interface propstype
{
    children:React.ReactNode;
}

const Darkthemeconfig:React.FC<propstype>=({...props})=>
{
    const {darkAlgorithm}=theme;
    const {children}=props;
    return(
       
        <ConfigProvider
        theme={
            {
                
                components:{
                    Card:
                    {
                      colorText:'black',
                      colorFill:' #2D0032'
                    },
                    Button:
                    {
                      colorText: '#12E193',
                      borderRadius: 8,
                      colorBorder: '#12E193',
                      colorPrimary: '#12E193',
                      colorPrimaryHover:'#12E193',
                      colorBgElevated:'#12E193'                    
                    
                    },
                    Menu:
                    {
                      colorBgContainer:darkbg,
                      colorFill:darkbg,
                      fontSize: 20,
                      fontWeightStrong: 5
                    }
                  },
                algorithm:darkAlgorithm
            }
        }
        >
     {children } 
        </ConfigProvider>
        
    )
}
export default Darkthemeconfig;