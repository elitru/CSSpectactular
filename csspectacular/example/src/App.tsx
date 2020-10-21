import React from 'react'

import { ExampleComponent, Themes, CSSpectacularThemeProvider } from 'csspectacular'
import 'csspectacular/dist/index.css'

const App = () => {
  return (
    <div>
      <CSSpectacularThemeProvider theme={ Themes.Default }>
        <ExampleComponent />
      </CSSpectacularThemeProvider>
    </div>
  )
}

export default App
