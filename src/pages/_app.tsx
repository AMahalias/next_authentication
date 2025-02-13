// pages/_app.tsx
import { AppProps } from "next/app";
import { UserProvider } from "../context/UserContext";
import "../styles/globals.css"; // или ваш файл стилей

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default MyApp;
