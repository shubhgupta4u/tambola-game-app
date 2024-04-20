import { store } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
        <Component {...pageProps} />
      </div>

    </Provider>

  );
}
