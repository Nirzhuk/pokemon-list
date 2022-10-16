import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from "react";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
          html,body {
            margin: 0;
            padding: 0;
            font-family: Lato, sans-serif;
            height: 100%;
            
          }
          body {
            background-color:  #ffffff;
            color: #3d3d3d;
          }

          ::-webkit-scrollbar {
            width: 10px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            border-radius: 50px;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #a1a1a1;
            border-radius: 4px;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: #666666;
          }
`
function MyApp({ Component, pageProps }: AppProps) {
  return <>

    <GlobalStyle/>
      <Component {...pageProps} />
  </>
}

export default MyApp
