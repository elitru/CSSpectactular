import React, { useEffect } from 'react';
import { Theme, ThemeColor } from './Theme';

interface Props {
    theme: Theme;
    children?: any;
}

let ThemeContext = React.createContext<Theme | null>(null);
let theme: Theme | null = null;

export const ThemeContextProvider = (props: Props) => {
    if(!props.theme) throw new Error("Invalid Theme!");

    theme = props.theme;

    useEffect(() => {
        loadTheme();
    }, []);

    return (
        <ThemeContext.Provider value={ theme }>
            { props.children }
        </ThemeContext.Provider>
    );
};

export const useTheme = (): Theme => {
    if(theme === null)
        throw new Error("Theme context not ready yet!");

    return theme;
};

const loadTheme = async (): Promise<void> => {
    for(let property in theme) {
        const themeColor: ThemeColor = theme[property];
        document.documentElement.style.setProperty(themeColor.cssPropertyName, themeColor.color);
    }
};