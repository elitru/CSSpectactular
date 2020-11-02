import React, { useState } from 'react';
import { IComponentType, IDisabled } from '../../Shared/BaseProps';
import { ComponentTypes } from '../../Themes/Theme';
import styles from './Input.css';

export class DefaultValidation {
    private static readonly _emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    public static Email(value: string, invalidEmailErrorMessage?: string): InputTextChangeEventResult {
        if(DefaultValidation._emailRegex.test(value)) {
            return {
                errorMessage: '',
                isValid: true,
                shallCancel: false
            }
        }

        return {
            isValid: false,
            shallCancel: false,
            errorMessage: invalidEmailErrorMessage ? invalidEmailErrorMessage : 'This is not a valid email address.'
        };
    }
}

export interface InputTextChangeEventResult {
    isValid: boolean;
    shallCancel: boolean;
    errorMessage: string;
}

interface Props extends IComponentType, IDisabled {
    title?: string;
    placeholder?: string;
    value?: string;
    required?: boolean;
    requiredErrorMessage?: string;
    multiLine?: boolean;
    maxLength?: number;
    readonly?: boolean;
    resize?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block" | "both" | "horizontal" | "inline" | "none" | "vertical" | undefined;
    onTextChange?: (newValue: string) => InputTextChangeEventResult;
}

export const Input = React.forwardRef<any, Props>((props, ref) => {
    const type: ComponentTypes = props.type ? props.type : ComponentTypes.Primary_1;
    const requiredErrorMessage: string = props.requiredErrorMessage ? props.requiredErrorMessage : 'This field is required.';
    const { title, placeholder, onTextChange, required, multiLine, maxLength, resize, disabled, readonly } = props;

    const [value, setValue] = useState<string>(props.value ? props.value : '');
    //null => nothing entered yet; '' => not error, input is valid; '{error}' => input is invalid -> show error message
    const [error, setError] = useState<string | null>(null);

    const onChange = (newValue: string): void => {
        if(maxLength && newValue.length > maxLength) 
            return;        

        if(isValid(newValue)) {
            setValue(newValue);
        }
    }

    const isValid = (newValue: string): boolean => {        
        if(!onTextChange){
            if(required && !newValue) {
                setError(requiredErrorMessage);
            }
            return true;
        }

        const result: InputTextChangeEventResult = onTextChange!(newValue);

        if(result.isValid) {
            if(error)
                setError('');
            return true;
        }
        
        if(required && !newValue) {
            setError(requiredErrorMessage);
            return true;
        }

        if(!required && !newValue) {
            setError('');
            return true;
        }

        setError(result.errorMessage);
        return !result.shallCancel;
    };

    return (
        <section className={ `${styles['css-spectacular-input-container']} 
                              ${styles['css-spectacular-input-container-primary-' + type]}` }>
            {
                title ? 
                (
                    <span className={ styles['css-spectacular-input-title'] }>
                        { `${title} ${required ? '*' : ''}` }
                    </span>
                ) : null
            }
            {
                !multiLine ?
                (
                    <input type="text" 
                           placeholder={ placeholder } 
                           value={ value }
                           ref={ ref }
                           disabled={ disabled }
                           readOnly={ readonly }
                           onBlur={ () => isValid(value) }
                           onChange={ (event) => onChange(event.target.value) } />
                ) :
                (
                    <textarea value={ value }
                              ref={ ref }
                              style={{ resize }}
                              disabled={ disabled }
                              readOnly={ readonly }
                              onBlur={ () => isValid(value) }
                              onChange={ (event) => onChange(event.target.value) }></textarea>
                )
            }
            <span className={ `${styles['css-spectacular-input-error']} 
                               ${!error ? styles['css-spectacular-input-error-hidden'] : ''}` }>
                { error ? error : '-' }
            </span>
        </section>
    );
});