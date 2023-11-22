import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Professional Painters - HH Painting</title>
                    <meta name="google-site-verification" content="Va6QO7z7MvjZJ9fSZ0pfpyXIoVUVmspKCzyaouH_Yr0" />
                    {/* <!-- Google tag (gtag.js) --> */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11240105576"></script>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                    
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'AW-11240105576');
                    `}} />

                    <script dangerouslySetInnerHTML={{
                        __html: `
                    
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
                            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '7479274445432278');
                        fbq('track', 'PageView');
                    `}} />

                    {/* @ts-ignore */}
                    <noscript><img height="1" width="1" style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=7479274445432278&ev=PageView&noscript=1"
                    /></noscript>


                    <link rel="preconnect" href="https://fonts.googleapis.com" />


                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet" />

                    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}