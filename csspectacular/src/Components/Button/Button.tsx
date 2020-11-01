import React from 'react';
import styles from './Button.module.css';
import { ComponentTypes } from '../../Themes/Theme';
import { ComponentType, FontWeight } from '../../Shared/BaseProps';

interface Props extends FontWeight, ComponentType {
    text?: string;
    icon?: string | JSX.Element;
}

export const Button = (props: Props) => {
    const type: ComponentTypes = props.type ? props.type : ComponentTypes.Primary_1;
    const fontWeight = props.fontWeight ? props.fontWeight : 600;
    const { text, icon } = props;

    return (
        <button className={ `
                            ${styles['css-spectacular-button']} 
                            ${styles['css-spectacular-button-primary-' + type]}
                        ` }
                style={{ fontWeight }}>
            {
                /*  === Icon === */
                icon && typeof(icon) === 'string' ?
                //if icon is text --> put text into subelement
                (
                    <section>{ icon }</section>
                ) :
                //otherwise display icon compoent or null if icon is unset
                icon ? icon : null
            }
            { 
                /* === Text === */
                text
            }
        </button>
    );
};