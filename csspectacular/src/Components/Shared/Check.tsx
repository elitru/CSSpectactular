import React from 'react';
import { IWithClass, IWithId } from '../../Shared/BaseProps';
import styles from './Check.module.css';

interface Props extends IWithId, IWithClass {
    height: number;
    thickness: number;
    color: string;
}

export const Check = (props: Props) => {
    const { height, thickness, color, id, className } = props;

    return (
        <span id={ id } 
              className={ `${styles['css-spectacular-check-container']} ${className ? className : ''}` } 
              style={{ width: height, height }}>
            <span style={{ height: `${height}px`,
                           width: `${thickness}px`, 
                           backgroundColor: color }}>
            </span>
            <span style={{ height: `${Math.floor(height / 2)}px`, 
                           width: `${thickness}px`, 
                           backgroundColor: color }}>
            </span>
        </span>
    );
};
