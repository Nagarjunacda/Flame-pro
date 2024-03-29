import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }) {
  return (
    <LayoutWrapper>
      <NextNProgress
        color="linear-gradient(to right,#858e20,#e53d1c)"
        startPosition={0.3}
        stopDelayMs={300}
        height={5}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}
