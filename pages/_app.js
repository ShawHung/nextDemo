import "./global.css"
import "tailwindcss/tailwind.css"
import './index.scss';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}