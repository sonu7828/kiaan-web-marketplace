import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlobalClientComponents } from "@/components/GlobalClientComponents";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import AwardBanner from "@/components/AwardBanner";
import UTMTracker from "@/components/UTMTracker";
import { CanonicalTag } from "@/components/seo/CanonicalTag";
import Script from "next/script";
import { RetargetingTracker } from "@/components/analytics/RetargetingTracker";
import "@fontsource/anton/latin-400.css";
import "@fontsource/manrope/latin-300.css";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
// @fontsource CSS imports above provide Anton and Manrope font families
// CSS variables --font-anton and --font-manrope are defined in globals.css

export const metadata: Metadata = {
    title: "Custom Software Development Company India | Enterprise ERP, SaaS & AI Solutions — Kiaan Technology",
    description: "Leading custom software development company in India. We build high-performance ERP, CRM, SaaS & AI automation software. Get a free consultation & quote today!",
    keywords: "Custom Software Development Company India, ERP Software Development, CRM Development Company, SaaS Development India, Business Automation Software, Enterprise Software Development, Cloud Based Business Software, Web Application Development Company",
    robots: "index, follow",
    authors: [{ name: "Kiaan Technology" }],
    category: "Technology",
    metadataBase: new URL("https://kiaantechnology.com"),
    alternates: {
    },
    openGraph: {
        title: "Custom Software Development Company India | Enterprise ERP, SaaS & AI Solutions — Kiaan Technology",
        description: "Leading custom software development company in India. We build high-performance ERP, CRM, SaaS & AI automation software. Get a free consultation & quote today!",
        url: "https://kiaantechnology.com",
        siteName: "Kiaan Technology",
        images: [
            {
                url: "https://kiaantechnology.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Kiaan Technology - Custom Software & SaaS Development Company",
            },
        ],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software Development Company India | Enterprise ERP, SaaS & AI Solutions — Kiaan Technology",
        description: "Leading custom software development company in India. We build high-performance ERP, CRM, SaaS & AI automation software. Get a free consultation & quote today!",
        images: ["https://kiaantechnology.com/og-image.jpg"],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    other: {
        "theme-color": "#000000",
        // Google Search Console verification
        "google-site-verification": "2Wsr1OneAkeWe0UL_I_F85Q9opcwTrnRzT3dUCSikK8",
        // Bing Webmaster Tools verification
        "msvalidate.01": "A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="no-scrollbar" suppressHydrationWarning>
            <head>
                <CanonicalTag />
                {/* Google Tag Manager */}
                <Script
                    id="gtm-script"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-WCMW8NVC');
                        `,
                    }}
                />

                {/* Preconnect — reduce connection setup time for LCP-critical origins */}
                <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

                {/* Trustpilot Initialization */}
                <Script
                    id="trustpilot-init"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,r,n){
                                w.TrustpilotObject=n;
                                w[n]=w[n]||function(){
                                    (w[n].q=w[n].q||[]).push(arguments)
                                };
                                a=d.createElement(s);
                                a.async=1;
                                a.src=r;
                                a.type='text/javascript';
                                f=d.getElementsByTagName(s)[0];
                                f.parentNode.insertBefore(a,f)
                            })(window,document,'script',
                            'https://invitejs.trustpilot.com/tp.min.js',
                            'tp');
                            tp('register', 'vRjzzw2yE1blnEkT');
                        `,
                    }}
                />

                {/* TrustBox Widget Bootstrap Script */}
                <Script
                    id="trustpilot-widget-bootstrap"
                    src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                    strategy="lazyOnload"
                />

                {/* Google Analytics (GA4) & Google Ads */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-Y9H9T9S8PN"
                    strategy="lazyOnload"
                />
                <Script
                    id="ga4-script"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            window.gtag = window.gtag || function(){dataLayer.push(arguments);};
                            if (!window.__kiaanGaInitialized) {
                                window.__kiaanGaInitialized = true;
                                gtag('js', new Date());
                                gtag('config', 'G-Y9H9T9S8PN');
                                gtag('config', 'AW-11548291032');
                                gtag('config', 'AW-16626477455');
                            }
                        `,
                    }}
                />

                {/* Meta Pixel (Facebook & Instagram Retargeting) */}
                <Script
                    id="meta-pixel-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '2073008893578015');
                            fbq('track', 'PageView');
                        `,
                    }}
                />

                {/* Microsoft Clarity */}
                <Script
                    id="clarity-script"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(c,l,a,r,i,t,y){
                                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                            })(window,document,"clarity","script","p68w2nvc");
                        `,
                    }}
                />

                {/* Hotjar */}
                <Script
                    id="hotjar-script"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(h,o,t,j,a,r){
                                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                                h._hjSettings={hjid:5088291,hjsv:6};
                                a=o.getElementsByTagName('head')[0];
                                r=o.createElement('script');r.async=1;
                                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                a.appendChild(r);
                            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                        `,
                    }}
                />

                {/* LinkedIn Insight Tag */}
                <Script
                    id="linkedin-insight-script"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
                            _linkedin_partner_id = "582910";
                            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                            (function(l) {
                                if (!l) return;
                                var s = document.getElementsByTagName("script")[0];
                                var b = document.createElement("script");
                                b.type = "text/javascript";b.async = true;
                                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                                s.parentNode.insertBefore(b, s);
                            })(window._linkedin_data_partner_color || window._linkedin_data_partner_ids);
                        `,
                    }}
                />
                {/* Organization Schema */}
                <Script
                    id="organization-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "@id": "https://kiaantechnology.com/#organization",
                            "name": "Kiaan Technology",
                            "url": "https://kiaantechnology.com",
                            "logo": "https://kiaantechnology.com/og-image.jpg",
                            "sameAs": [
                                "https://www.linkedin.com/company/89547261/",
                                "https://www.instagram.com/kiaan_technology4/",
                                "https://www.youtube.com/@kiaantechnology"
                            ]
                        })
                    }}
                />

                {/* LocalBusiness Schema */}
                <Script
                    id="localbusiness-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "@id": "https://kiaantechnology.com/#localbusiness",
                            "name": "Kiaan Technology",
                            "url": "https://kiaantechnology.com",
                            "logo": "https://kiaantechnology.com/og-image.jpg",
                            "image": "https://kiaantechnology.com/og-image.jpg",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "2341, E Sector, Sudama Nagar",
                                "addressLocality": "Indore",
                                "addressRegion": "MP",
                                "postalCode": "452009",
                                "addressCountry": "India"
                            }
                        })
                    }}
                />

                {/* Services Schema */}
                <Script
                    id="services-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "Service",
                                "name": "Custom Software Development",
                                "serviceType": "Custom Software Development",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Kiaan Technology",
                                    "url": "https://kiaantechnology.com"
                                },
                                "areaServed": {
                                    "@type": "Country",
                                    "name": "India"
                                },
                                "description": "Tailored custom software development services designed to automate enterprise workflows and optimize operational efficiency."
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "Service",
                                "name": "SaaS Development",
                                "serviceType": "SaaS Development",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Kiaan Technology",
                                    "url": "https://kiaantechnology.com"
                                },
                                "areaServed": {
                                    "@type": "Country",
                                    "name": "India"
                                },
                                "description": "Scalable multi-tenant SaaS platform engineering, cloud architecture, and subscription management solutions."
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "Service",
                                "name": "AI Automation",
                                "serviceType": "AI Automation",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Kiaan Technology",
                                    "url": "https://kiaantechnology.com"
                                },
                                "areaServed": {
                                    "@type": "Country",
                                    "name": "India"
                                },
                                "description": "Enterprise AI-driven business process automation, predictive machine learning integrations, and intelligent workflow optimization."
                            }
                        ])
                    }}
                />
            </head>
            <body className="antialiased selection:bg-yellow-500 selection:text-black max-w-screen pb-20" suppressHydrationWarning>
                <RetargetingTracker />
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WCMW8NVC"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {/* Meta Pixel (noscript) */}
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=2073008893578015&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>

                <Script
                    id="website-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "Kiaan Technology",
                            "url": "https://kiaantechnology.com"
                        })
                    }}
                />

                <UTMTracker />
                <div className="flex flex-col min-h-screen relative bg-black text-white">
                    <Navbar />
                    <main className="relative z-10 w-full">
                        <Breadcrumbs />
                        {children}
                    </main>
                    <Footer />
                    <GlobalClientComponents />
                    <AwardBanner />
                </div>
                <Script
                    id="tidio-chat"
                    src="https://code.tidio.co/qihkscecnmcvf2gnjrau6nahfxnp3ytj.js"
                    strategy="lazyOnload"
                />
            </body>
        </html>
    );
}
