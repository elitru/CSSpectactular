import React from 'react'

import { Themes, CSSpectacularThemeProvider, Button } from 'csspectacular'
import 'csspectacular/dist/index.css'

const App = () => {
  return (
    <div style={{padding: '30px'}}>
      <CSSpectacularThemeProvider theme={ Themes.Default }>
          <Button text="Primary 1" />
      </CSSpectacularThemeProvider>
    </div>
  );
};

export default App;
