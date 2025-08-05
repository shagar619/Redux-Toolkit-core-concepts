import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import Root from './Root.tsx';
import { RouterProvider } from 'react-router';
import router from './routes/index.tsx';
import { ThemeProvider } from './providers/theme-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>

      <Provider store={store}>

      <RouterProvider router={router}>

      {/* <App /> */}
      <Root/>

      </RouterProvider>
    
    </Provider>

    </ThemeProvider>
    
  </StrictMode>
);
