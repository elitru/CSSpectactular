import React, { useState } from 'react';
import styles from './CheckBox.module.css';
import { IComponentType, IDisabled, IFontWeight, IWithClass, IWithId } from '../../Shared/BaseProps';
import { ComponentTypes, Theme } from '../../Themes/Theme';
import { Check } from '../Shared/Check';
import { useTheme } from '../../Themes/ThemeContext';

interface Props extends IComponentType, IDisabled, IWithId, IWithClass, IFontWeight {
    description?: string | JSX.Element;
    checked?: boolean;
    onChangeCheckState?: (checked: boolean) => void;
    size?: string;
}

export const CheckBox = (props: Props) => {
    const type: ComponentTypes = props.type ? props.type : ComponentTypes.Primary_1;
    const size: string = props.size ? props.size : '20px';

    const theme: Theme = useTheme();

    const { id, className, disabled, description, fontWeight, checked, onChangeCheckState } = props;
    const [isChecked, setChecked] = useState<boolean>(checked ? checked : false);

    const onChangeState = (): void => {
        setChecked(!isChecked);

        if(onChangeCheckState)
            onChangeCheckState(!isChecked)
    };

    return (
        <section id={ id }
                 className={
                     `${styles['css-spectacular-checkbox-container']} 
                      ${disabled ? styles['css-spectacular-checkbox-container-disabled'] : ''} 
                      ${className ? className : ''}` 
                 }>
            <button onClick={ onChangeState }
                    className={ isChecked ? 'css-checkbox-check' : '' }
                    style={{ width: size, 
                             height: size, 
                             backgroundColor: isChecked ? theme[`Primary_${type}`].color : 'transparent',
                             borderColor: isChecked ? theme[`Primary_${type}`].color : undefined }}
                    disabled={ disabled }>
                <Check height={14} 
                       thickness={2}
                       className={ `${styles['css-spectacular-checkbox-icon']} ${isChecked ? styles['css-spectacular-checkbox-icon-checked'] : ''}` }
                       color={ theme[`Text_Primary_${type}`].color } />
            </button>
             {
                 description && typeof(description) === 'string' ?
                 (
                     <span style={{ fontWeight }}>{ description }</span>
                 ) : description ? description : null
                 
             }
        </section>
    );
};