// components
import HobbySlider from '../../components/HobbySlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
//particles
import ParticlesContainer from '../../components/ParticlesContainer';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// head
import Head from 'next/head';

const Hobbies = () => {
  return (
    <div className='h-full bg-primary/30 py-32 flex items-center'>
      <Head>
        <title>Hobbies | P G Pradheesh</title>
      </Head>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8 items-center'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-8 xl:mb-0'>
            <motion.h2 
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8'
            >
              My <span className='text-accent'>Hobbies</span>
            </motion.h2>
           <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 text-sm sm:text-base'
            >
              Hands-on explorations beyond coding.Each passion project sharpens different mental muscles.
            </motion.p> 
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <HobbySlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
      <ParticlesContainer/>
    </div>
  );
};

export default Hobbies;
