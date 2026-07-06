import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import CursorSpotlight from '../components/CursorSpotlight';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';

const SITE_URL = 'https://pgpradheesh.netlify.app';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Only load the background video on larger screens without reduced-motion,
    // saving data and battery on phones
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setShowVideo(isDesktop && !prefersReducedMotion);
  }, []);

  useEffect(() => {
    if (!showVideo) return;
    // Programmatically play video to handle browser restrictions
    const video = document.querySelector('.video-bg-element');
    if (video) {
      video.play().catch(error => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, [showVideo]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>P G Pradheesh | AI Developer</title>
        <meta
          name="description"
          content="Portfolio of P G Pradheesh — Junior AI Developer at Greenbotz working on AI-powered video analytics, computer vision, and Vision Language Models."
        />
        <meta name="theme-color" content="#0f0f27" />
        {/* favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/avatar.jpeg" />
        {/* Open Graph / social link previews */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="P G Pradheesh Portfolio" />
        <meta property="og:title" content="P G Pradheesh | AI Developer" />
        <meta
          property="og:description"
          content="Junior AI Developer at Greenbotz — AI-powered video analytics, computer vision, and Vision Language Models."
        />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/avatar.jpeg`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="P G Pradheesh | AI Developer" />
        <meta
          name="twitter:description"
          content="Junior AI Developer at Greenbotz — AI-powered video analytics, computer vision, and Vision Language Models."
        />
        <meta name="twitter:image" content={`${SITE_URL}/avatar.jpeg`} />
      </Head>

      {/* Background: video on desktop, static image on mobile / reduced motion */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {showVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="video-bg-element absolute inset-0 w-full h-full object-cover"
            poster="/galaxy.png"
          >
            <source src="/galaxy.mp4" type="video/mp4" />
            <source src="/galaxy.webm" type="video/webm" />
            Your browser does not support HTML5 video.
          </video>
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/galaxy.png')" }}
          />
        )}
        <div className="absolute inset-0 bg-primary/30"></div>
      </div>

      {/* cursor spotlight (desktop only) */}
      <CursorSpotlight />

      {/* Existing layout */}
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
