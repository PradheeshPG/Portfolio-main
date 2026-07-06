// next
import Link from 'next/link';
import Head from 'next/head';
// components
import Circles from '../components/Circles';
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// icons
import { HiArrowLeft } from 'react-icons/hi2';

const NotFound = () => {
  return (
    <div className='h-full bg-primary/30 flex items-center'>
      <Head>
        <title>Page Not Found | P G Pradheesh</title>
      </Head>
      <Circles />
      <div className='container mx-auto px-4 text-center'>
        <motion.h1
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='text-[80px] md:text-[120px] font-extrabold text-accent leading-none mb-4'
        >
          404
        </motion.h1>
        <motion.h2
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-4'
        >
          Page <span className='text-accent'>not found.</span>
        </motion.h2>
        <motion.p
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-[400px] mx-auto mb-10'
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex justify-center'
        >
          <Link
            href='/'
            className='btn rounded-full border border-white/50 px-8 flex items-center justify-center gap-x-2 hover:border-accent hover:text-accent transition-all duration-300'
          >
            <HiArrowLeft className='text-xl' /> Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
