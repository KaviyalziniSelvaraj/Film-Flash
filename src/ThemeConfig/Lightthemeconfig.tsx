import { ConfigProvider, theme } from "antd"
import { darkbg, lightbg } from "../style/layoutstyle";
interface themetype{
    children:React.ReactNode
}
const Lightthemeconfig:React.FC<themetype>=({...props})=>
{
    const {children}=props;
    const {defaultAlgorithm}=theme;
    return(
        <>
        <ConfigProvider
        theme={
            {
                components:{
                  Card:
                  {
                    colorText:'black',
                  },
                  Button:
                  {
                    colorText: 'green',
                    borderRadius: 8,
                    colorBorder: 'green',
                    colorPrimary: 'green',
                    colorPrimaryHover:'green',
                  },
                  Menu:
                    {
                      colorBgContainer:lightbg,
                      colorFill:lightbg,
                      fontSize: 20,
                      fontWeightStrong: 5,
                      
                    }
                },
                algorithm:defaultAlgorithm
            }
        }
        >  
        {children}
        </ConfigProvider>
        </>
    )
}
export default Lightthemeconfig;