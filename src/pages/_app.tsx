import "@/styles/global.css";
import "@/styles/global.sass";
import "@/styles/index.sass";
import "@/styles/all.scss";
import "@/styles/style.sass";
import "react-toastify/dist/ReactToastify.css";

import LoadingScreen from '@/components/LoadingScreen';

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MADEapp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Add a class to the body tag based on the current page
    useEffect(() => {
        const pageName = router.pathname?.replace("/", "");
        if (pageName) {
            document.body.className = pageName;
        } else {
            document.body.className = "home";
        }

        const handleRouteChangeDone = () => {
            setLoading(false)
            setTimeout(() => {
                window.scroll({
                    top: 0,
                    left: 0,
                    // behavior: 'smooth'
                });
            }, 100);
        }
        const handleRouteChange = () => {
            setLoading(true)
        }
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', handleRouteChangeDone)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
            router.events.off('routeChangeComplete', handleRouteChangeDone)
        }

    }, [router.pathname]);
    return (
        <>
            {!loading ? (
                <>
                    <Component {...pageProps} />
                </>
            ) : (
                <LoadingScreen />
            )}
        </>
    );
    // return <Component {...pageProps} />;
}

export default MADEapp;
