import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { HiDownload } from 'react-icons/hi';

const roles = ['a FullStack Developer', 'a Data Analyst', 'an AI Engineer', 'a Python Developer'];

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = 100; // Speed of typing (ms per character)
    const deletingSpeed = 50; // Speed of deleting (ms per character)
    const pauseDuration = 1000; // Pause after typing (ms)

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }, pauseDuration);
      }
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentRoleIndex, isTyping, isDeleting]);

  return (
    <div className='bg-primary/60 h-full'>
      {/* particles */}
      <ParticlesContainer/>
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1 
            variants={fadeIn('down', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            className='h1'
          >
            P G Pradheesh <br/> I&apos;m {' '}
            <span className="text-accent">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1"
              >|
              </motion.span>
            </span>
          </motion.h1>

          {/* current role */}
          <motion.div
            variants={fadeIn('down', 0.25)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='mb-6 text-sm sm:text-base uppercase tracking-[2px] text-white/70'
          >
            Junior AI Developer <span className='text-accent'>@ Greenbotz</span>
          </motion.div>

          {/* subtitle */}
          <motion.p 
            variants={fadeIn('down',0.3)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-sm sm:text-base"
          >
            AI & Data Science enthusiast skilled in ML, computer vision, and full-stack development. Driven to build creative, impactful tech solutions.
          </motion.p>
          
          {/* buttons container - mobile */}
          <div className="flex flex-col items-center xl:hidden gap-y-4 mb-8 relative z-10">
            <ProjectsBtn />
            <a
              href="/resume.pdf"
              download
              className='btn rounded-full border border-white/50 px-8 flex items-center justify-center gap-x-2 hover:border-accent hover:text-accent transition-all duration-300'
            >
              Download CV <HiDownload className='text-xl' />
            </a>
          </div>

          {/* buttons container - desktop */}
          <motion.div
            variants={fadeIn('down',0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='hidden xl:flex items-center gap-x-8 relative z-10'
          >
            <ProjectsBtn />
            <a
              href="/resume.pdf"
              download
              className='btn rounded-full border border-white/50 px-8 flex items-center justify-center gap-x-2 hover:border-accent hover:text-accent transition-all duration-300'
            >
              Download CV <HiDownload className='text-xl' />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 pointer-events-none">
        {/* bg image */}
        <div className='bg-none xl:galaxy xl:bg-cover xl:bg-right xl:bg-no-repeat xl:bg-[left_-100px_top_-150px] w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        </div>
        {/* avatar img */}
        <motion.div 
          variants={fadeIn('up',0.2)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          transition={{duration: 1, ease: 'easeInOut'}}
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[2%] pointer-events-auto'
        >
          <Avatar/>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;