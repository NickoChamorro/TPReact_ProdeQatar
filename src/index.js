import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './styles/ThemeProvider'
import GlobalStyle from './styles/GlobalStyle';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Theme>
        <GlobalStyle/>
        <App />
    </Theme>
);