import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { SpeakToPopupProvider } from "@/context/SpeakToPopupContext";
import { FooterContextDataProvider } from "@/context/FooterDataContext";
import NextNProgress from 'nextjs-progressbar'
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <SpeakToPopupProvider>
      <FooterContextDataProvider>
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
      </FooterContextDataProvider>
    </SpeakToPopupProvider>
  )
}
