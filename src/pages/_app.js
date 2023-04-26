
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import Layout from "@/layout/Layout";
import {useEffect} from "react";
import AOS from "aos";
import {createTheme, ThemeProvider} from "@mui/material";
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from "@emotion/react";
import {AuthProvider} from "@/contexts/authContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {useRouter, Router} from "next/router";
import PanelLayout from "@/components/panel/PanelLayout/PanelLayout";
import Nprogress from "nprogress"
// import "nprogress/nprogress.css"
Router.events.on('routeChangeStart', ()=>{
    Nprogress.start();
})
Router.events.on('routeChangeComplete', ()=>{
    Nprogress.done();
})


export default function App({Component, pageProps, data}) {
    const router = useRouter()
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle")
    }, [])

    useEffect(() => {
        AOS.init();
    }, []);
    const theme = createTheme({
        direction: 'rtl',
        typography: {
            "fontFamily": `vazir`
        }
    });
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    return (

        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    {
                        router.pathname.slice(0,6) !== "/admin" ?
                            <Layout data={data.menus}>
                                <ToastContainer className={"mt-5"}/>
                                <Component {...pageProps} />
                            </Layout>
                            :
                            <PanelLayout>
                                <ToastContainer className={"mt-5"}/>
                                <Component {...pageProps} />
                            </PanelLayout>
                    }
                </AuthProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

App.getInitialProps = async () => {
    const layoutResponse = await fetch(`${process.env.SERVER_URL}/layout/?format=json`)
    const data = await layoutResponse.json()
    return {data}

}