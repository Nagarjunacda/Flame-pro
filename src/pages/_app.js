import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }) {
  return (<LayoutWrapper>
    <NextNProgress
      color="#CDAA72"
      startPosition={0.3}
      stopDelayMs={200}
      height={2}
      options={{ showSpinner: false }}
    />
    <Component {...pageProps} />
    </LayoutWrapper>)
}
