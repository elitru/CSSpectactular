import React from 'react';
import styles from './Button.module.css';
import { ComponentTypes } from '../../Themes/Theme';
import { IComponentType, IDisabled, IFontWeight, IWithId } from '../../Shared/BaseProps';

interface Props extends IWithId, IFontWeight, IComponentType, IDisabled {
    text?: string;
    icon?: string | JSX.Element;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined;
}

export const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const type: ComponentTypes = props.type ? props.type : ComponentTypes.Primary_1;
    const fontWeight = props.fontWeight ? props.fontWeight : 500;
    const { id, text, icon, disabled, onClick } = props;

    return (
        <button id={ id }
                ref={ ref }
                className={ `
                            ${styles['css-spectacular-button']} 
                            ${styles['css-spectacular-button-primary-' + type]}
                        ` }
                disabled={ disabled }
                onClick={ onClick }
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
});