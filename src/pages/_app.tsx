import "../../styles/globals.css";
import React from "react";

// //Axios base url
// axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_ENDPOINT;

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
