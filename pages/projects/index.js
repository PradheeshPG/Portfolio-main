// components
import ProjectSlider from '../../components/ProjectSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer';
// head
import Head from 'next/head';

const Projects = () => {
  return (
    <div className='h-full bg-primary/30 py-24 xl:py-32 flex overflow-y-auto overflow-x-hidden scrollbar-none'>
      <Head>
        <title>Projects | P G Pradheesh</title>
      </Head>
      <Circles />
      <div className='container mx-auto px-4 my-auto'>
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
              My <span className='text-accent'>Projects</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 text-sm sm:text-base'
            >
              As an enthusiastic beginner, I created these projects with dedication 
              and a strong foundation in modern web technologies.
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
            <ProjectSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
      <ParticlesContainer/>
    </div>
  );
};

export default Projects;
