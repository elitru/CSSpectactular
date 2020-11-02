import React, { useEffect, useRef } from 'react'
import './index.css';

import { Themes, CSSpectacularThemeProvider, Button, ComponentTypes } from 'csspectacular'
import 'csspectacular/dist/index.css'

const App = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

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
          <Button text="Primary 1"
                  id="test-id"
                  className="test"
                  icon="❤"
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
      </CSSpectacularThemeProvider>
    </div>
  );
};

export default App;
