import { ThemeContext } from "styled-components";
import Darkthemeconfig from "../ThemeConfig/Darkthemeconfig";
import Lightthemeconfig from "../ThemeConfig/Lightthemeconfig";
import { useContext } from "react";
import React from "react";

interface ICustomLayoutProps {
    children: React.ReactNode;
}

const ConfigProviderWrapper: React.FC<ICustomLayoutProps> = ({ children }) => {
    const themeValue = useContext(ThemeContext);

    if (themeValue === undefined) {
        return <Lightthemeconfig children={children} />;
    }
    return themeValue.configprovider === 'light' ? (
        <Lightthemeconfig children={children} />
    ) : (
        <Darkthemeconfig children={children} />
    );
}
export default ConfigProviderWrapper;