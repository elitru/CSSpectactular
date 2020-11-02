import React, { useState } from 'react';
import styles from './MultiButton.module.css';
import { ComponentTypes } from '../../Themes/Theme';
import { ICloseableWithEscape, IComponentType, IDisabled, IFontWeight, IWithId } from '../../Shared/BaseProps';
import { useClosableWithEscape } from '../../Shared/Hooks';

interface Props extends IWithId, IFontWeight, IComponentType, IDisabled, ICloseableWithEscape {
    options: MultiButtonOption[];
    icon?: string | JSX.Element;
    width?: string;
}

export interface MultiButtonOption extends IDisabled {
    displayText: string;
    icon?: string | JSX.Element;
    active?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined;
}

const getInitialActiveOption = (options: MultiButtonOption[]): MultiButtonOption => {
    if(options.length === 0)
        throw new Error('You must at least provide one option!');

    const activeOnes: MultiButtonOption[] = options.filter((option: MultiButtonOption) => option.active);
    return activeOnes.length > 0 ? activeOnes[0] : options[0];
}

export const MultiButton = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const type: ComponentTypes = props.type ? props.type : ComponentTypes.Primary_1;
    const fontWeight = props.fontWeight ? props.fontWeight : 500;
    const { id, options, icon, disabled, width, closeableWithEscape } = props;

    const [activeOption, setActiveOption] = useState<MultiButtonOption>(getInitialActiveOption(options));
    const [optionsVisible, setOptionsVisible] = useState<boolean>(false);

    if(closeableWithEscape) {
        useClosableWithEscape(() => setOptionsVisible(false), undefined, undefined);
    }

    return (
        <section id={ id } className={ styles['css-multi-spectacular-button-content-container'] }>
            <section className={ styles['css-multi-spectacular-button-container'] }>
                <button ref={ ref }
                        disabled={ disabled }
                        onClick={ activeOption.onClick }
                        style={{ fontWeight, width }}
                        className={ `${styles['css-multi-spectacular-button']} 
                                    ${styles['css-multi-spectacular-button-primary-' + type]}
                                ` }>
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
                    <span className={ icon ? styles['with-icon'] : undefined }>{ activeOption.displayText }</span>
                </button>
                <section className={ `${styles['css-multi-spectacular-button-change-option']} 
                                      ${styles['css-multi-spectacular-button-change-option-primary-' + type]} 
                                    ` }
                         onClick={ () => setOptionsVisible(!optionsVisible) }>
                    <span></span>
                    <span></span>
                </section>
            </section>
            {
                optionsVisible ?
                (
                    <section className={ `${styles['css-multi-spectacular-button-options']} 
                                          ${styles['css-multi-spectacular-button-options-primary-' + type]}
                                         ` }>
                        {
                            options.map((option: MultiButtonOption, index: number) => {
                                return (
                                    <span key={ option.displayText + index }
                                        onClick={ 
                                            () => {
                                                setActiveOption(option);
                                                setOptionsVisible(false);
                                            } 
                                        } >
                                        { option.displayText }
                                    </span>
                                );
                            })
                        }
                    </section>
                ) : null
            }
        </section>
    );
});