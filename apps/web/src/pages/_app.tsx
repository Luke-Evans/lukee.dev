import "../styles/globals.css";
import { AppProps } from "next/app";
import { Unbounded } from "@next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={unbounded.className}>
      <Component {...pageProps} />;
    </main>
  );
}
