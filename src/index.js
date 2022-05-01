import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import { store } from './components/Redux/store';
import { Provider } from 'react-redux';
import App from 'components/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ColorModeScript />
    <BrowserRouter>
      <ChakraProvider theme={theme} resetCSS={false}>
        <Provider store={store}>
        <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
);
