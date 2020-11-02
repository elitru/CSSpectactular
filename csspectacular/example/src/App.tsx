import React, { useEffect, useRef } from 'react'
import './index.css';

import { Themes, CSSpectacularThemeProvider, Button, ComponentTypes, MultiButton, MultiButtonOption, CheckBox, RadioGroup, RadioGroupValue } from 'csspectacular'
import 'csspectacular/dist/index.css';

const App = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const multiOptions: MultiButtonOption[] = [
    {
      displayText: 'Short',
      active: false,
      onClick: () => alert('Short')
    },
    {
      displayText: 'Long Option',
      active: true,
      onClick: () => alert('Long')
    }
  ];

  const radioGroupOptions: RadioGroupValue[] = [
    {
      value: { name: 'Maximilian Mustermann' },
      displayText: 'Max Mustermann',
      disabled: true
    },
    {
      value: { name: 'Jonathan Doe' },
      displayText: 'John Doe',
      selected: true
    }
  ];

  useEffect(() => {
    const onCustomClick = () => alert('A custom event using refs');

    buttonRef.current?.addEventListener('click', onCustomClick);

    return () => {
      buttonRef.current?.removeEventListener('click', onCustomClick);
    };
  });

  return (
    <div style={{padding: '30px'}}>
      <CSSpectacularThemeProvider theme={ Themes.Default }>
          <div>
            <h1>Buttons</h1>
            <Button text="Primary 1"
                    id="test-id"
                    className="test"
                    ref={ buttonRef }
                    onClick={ () => alert('I\'ve just been clicked!') } />
            <Button text="Primary 2"
                    type={ ComponentTypes.Primary_2 }
                    ref={ buttonRef }
                    onClick={ () => alert('I\'ve just been clicked!') } />
            <Button text="Primary 3"
                    type={ ComponentTypes.Primary_3 }
                    ref={ buttonRef }
                    onClick={ () => alert('I\'ve just been clicked!') } />
            <Button text="Primary 4"
                    type={ ComponentTypes.Primary_4 }
                    ref={ buttonRef }
                    onClick={ () => alert('I\'ve just been clicked!') } />
            <Button text="Primary 5"
                    type={ ComponentTypes.Primary_5 }
                    ref={ buttonRef }
                    onClick={ () => alert('I\'ve just been clicked!') } />
          </div>
          <div>
            <h1>Multi Buttons</h1>
            <MultiButton options={ multiOptions } closeableWithEscape={ true } />
            <MultiButton type={ ComponentTypes.Primary_2 } options={ multiOptions } closeableWithEscape={ true } />
            <MultiButton type={ ComponentTypes.Primary_3 } options={ multiOptions } closeableWithEscape={ true } />
            <MultiButton type={ ComponentTypes.Primary_4 } options={ multiOptions } closeableWithEscape={ true } />
            <MultiButton type={ ComponentTypes.Primary_5 } options={ multiOptions } closeableWithEscape={ true } />
          </div>
          <div>
            <h1>CheckBox</h1>
            <CheckBox description="Hello World" checked onChangeCheckState={(checked) => alert(checked)} />
            <CheckBox type={ ComponentTypes.Primary_2 } checked description="Hello World" onChangeCheckState={(checked) => alert(checked)} />
            <CheckBox type={ ComponentTypes.Primary_3 } checked description="Hello World" onChangeCheckState={(checked) => alert(checked)} />
            <CheckBox type={ ComponentTypes.Primary_4 } checked description="Hello World" onChangeCheckState={(checked) => alert(checked)} />
            <CheckBox type={ ComponentTypes.Primary_5 } checked description="Hello World" onChangeCheckState={(checked) => alert(checked)} />
          </div>
          <div>
            <h1>Radio Group</h1>
            <RadioGroup values={ radioGroupOptions } direction="row" separatorSpace="40px" circleSize={24} onSelectionChanged={ (value) => alert(value.name) } />
          </div>
      </CSSpectacularThemeProvider>
    </div>
  );
};

export default App;
