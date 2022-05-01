import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import App from 'components/App';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <BrowserRouter>
      <ChakraProvider theme={theme} resetCSS={false}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
