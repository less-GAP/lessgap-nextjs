import "@/styles/global.css";
import "@/styles/global.sass";
import "@/styles/all.scss";
import "@/styles/style.sass";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MADEapp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    useEffect(() => {
        const pageName = router.pathname?.replace("/", "");
        if (pageName) {
            document.body.className = pageName;
        } else {
            document.body.className = "home";
        }

    }, [router.pathname]);
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MADEapp;
