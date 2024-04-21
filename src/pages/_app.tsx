import { store } from "@/store/store";
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { Inter } from "next/font/google";
import { Header } from "@/common/components/header/header";
import Script from "next/script";
import { Footer } from "@/common/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      
      <div className={`flex min-h-screen flex-col items-center   ${inter.className}`}>
        <Header/>
        <div className="p-6">
          <Component {...pageProps} />
          {/* <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" />
          <Script src="https://code.jquery.com/jquery-1.11.1.min.js" /> */}
        </div> 
        <Footer/>      
      </div>

    </Provider>

  );
}
