import type { AppProps } from "next/app";
import AosWrapper from "@/components/AosWrapper";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AosWrapper />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
