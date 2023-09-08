import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* <!-- Google tag (gtag.js) --> */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11240105576"></script>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                    
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'AW-11240105576');
                    `}} />

                    <meta name="google-site-verification" content="Va6QO7z7MvjZJ9fSZ0pfpyXIoVUVmspKCzyaouH_Yr0" />


                    <link rel="preconnect" href="https://fonts.googleapis.com" />

                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet" />
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