import React from 'react';
import styles from './Button.module.css';
import { ComponentTypes } from '../../Themes/Theme';
import { IComponentType, IDisabled, IFontWeight, IWithClass, IWithId } from '../../Shared/BaseProps';

interface Props extends IWithId, IWithClass, IFontWeight, IComponentType, IDisabled {
    text?: string;
    icon?: string | JSX.Element;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined;
}

export const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const type: ComponentTypes = props.type ? props.type : ComponentTypes.Primary_1;
    const fontWeight = props.fontWeight ? props.fontWeight : 500;
    const { id, className, text, icon, disabled, onClick } = props;

    return (
        <button id={ id }
                ref={ ref }
                className={ `
                            ${styles['css-spectacular-button']} 
                            ${styles['css-spectacular-button-primary-' + type]} 
                            ${className ? className : ''}
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
            { /* === Text === */ }
            <span className={ icon ? styles['with-icon'] : undefined }>{ text }</span>
        </button>
    );
});