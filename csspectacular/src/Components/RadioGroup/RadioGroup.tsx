import React, { useState } from 'react';
import styles from './RadioGroup.module.css';
import { IComponentType, IDisabled, IFontWeight, IWithId } from '../../Shared/BaseProps';
import { ComponentTypes } from '../../Themes/Theme';

export interface RadioGroupValue extends IDisabled {
    displayText?: string | JSX.Element;
    value: any;
    selected?: boolean;
}

interface Props extends IWithId, IComponentType, IFontWeight {
    values: RadioGroupValue[];
    direction: 'row' | 'column';
    separatorSpace: string;
    circleSize?: number;
    onSelectionChanged?: (selectedValue: any) => void;
}

const getInitialSelectedState = (values: RadioGroupValue[]): RadioGroupValue => {
    if(values.length === 0)
        throw new Error('You must provide at least entry!');

    const selectedOnes: RadioGroupValue[] = values.filter((value: RadioGroupValue) => value.selected);
    return selectedOnes.length > 0 ? selectedOnes[0] : values[0];
}

export const RadioGroup = (props: Props) => {
    const circleSize: number = props.circleSize ? props.circleSize : 20;
    const { id, direction, values, onSelectionChanged, type, separatorSpace, fontWeight } = props;

    const [selectedValue, setSelectedValue] = useState<RadioGroupValue>(getInitialSelectedState(values));    

    const onChangeSelection = (value: RadioGroupValue): void => {
        setSelectedValue(value);

        if(onSelectionChanged)
            onSelectionChanged(value.value)
    };

    return (
        <div id={ id } 
             className={ `${styles['css-spectacular-radio-group-container']} 
                          ${direction === 'column' ? styles['css-spectacular-radio-group-container-column'] : ''}` }
             style={{ flexDirection: direction }}>
            {
                values.map((value: RadioGroupValue, index: number) => (
                    <RadioButton value={ value }
                                     type={ type }
                                     direction={ direction }
                                     fontWeight={ fontWeight }
                                     disabled={ value.disabled }
                                     separatorSpace={ separatorSpace }
                                     key={ `${value.displayText}_${index}` }
                                     circleSize={ circleSize }
                                     selected={ value === selectedValue }
                                     onSelect={ onChangeSelection } />
                ))
            }
        </div>
    );
};

interface RadioButtonProps extends IComponentType, IFontWeight, IDisabled {
    value: RadioGroupValue;
    selected: boolean;
    separatorSpace?: string;
    circleSize: number;
    direction: 'row' | 'column';
    onSelect: (value: RadioGroupValue) => void;
}

const RadioButton = (props: RadioButtonProps) => {
    const { value, selected, separatorSpace, direction, fontWeight, circleSize, disabled } = props;
    const type: ComponentTypes = props.type ? props.type : ComponentTypes.Primary_1;

    return (
        <section className={ `${styles['css-spectacular-radio-button']} 
                              ${disabled ? styles['css-spectacular-radio-button-disabled'] : ''} 
                              ${styles['css-spectacular-radio-button-primary-' + type]}` }
                 style={direction === 'row' ? 
                            { marginRight: separatorSpace ? separatorSpace : undefined } :
                            { marginBottom: separatorSpace ? separatorSpace : undefined }}>
            <button className={ selected ? styles['css-spectacular-radio-button-selected'] : '' }
                    disabled={ value.disabled }
                    style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
                    onClick={ () => props.onSelect(value) }>
            </button>
            <span style={{ fontWeight }}>
                { value.displayText }
            </span>
        </section>
    );
};