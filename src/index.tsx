import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import PageWrapper from 'pages/PageWrapper'
import reportWebVitals from './reportWebVitals'
import {createGlobalStyle} from 'styled-components'
import {BrowserRouter} from "react-router-dom"
import 'assets/fonts/JetBrainsMono/style.css'

const GlobalStyle = createGlobalStyle`
	* {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  body {
    padding: 0;
    margin: 0;
		display: flex;
    flex-flow: column nowrap;
    overflow-x: hidden;
    min-height: 100vh;
    max-width: 100vw;
    align-items: center;
  }
`

const GlobalFont = createGlobalStyle`
  body {
    font-family: 'JetBrains Mono';
    font-weight: 400;
    font-size: 2rem;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalFont />
    <BrowserRouter>
        <PageWrapper />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
