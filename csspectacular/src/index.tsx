import * as React from 'react';
import styles from './styles.module.css';

// ============ THEME SYSTEM ============
export { ThemeContextProvider as CSSpectacularThemeProvider } from './Themes/ThemeContext';
export { ComponentTypes } from './Themes/Theme';
export { Themes } from './Themes/Themes';
// ============ THEME SYSTEM ============

export const ExampleComponent = () => {
  return <div className={styles.test}>Example Component</div>
}

// ============ EXPORTS ============
/**
 * @exports Button
 */
export { Button } from './Components/Button/Button';

/**
 * @exports MultiButton
 */
export { MultiButton, MultiButtonOption } from './Components/MultiButton/MultiButton';

/**
 * @exports CheckBox
 */
export { CheckBox } from './Components/CheckBox/CheckBox';

/**
 * @exports RadioGroup
 */
export { RadioGroup, RadioGroupValue } from './Components/RadioGroup/RadioGroup';

/**
 * @exports Input
 */
export { Input, InputTextChangeEventResult, DefaultValidation } from './Components/Input/Input';
// ============ EXPORTS ============

export * from './Shared/BaseProps';