// icons
import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact,
  FaGithub, 
  FaPython, 
  FaDatabase, 
  FaNodeJs, 
  FaGitAlt,
  FaBriefcase,
  FaGraduationCap } from 'react-icons/fa'; 
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiSqlite, 
  SiTensorflow,
  SiPytorch, 
  SiOpencv, 
  SiPowerbi, 
  SiJupyter, 
  SiPostman, 
  SiDocker, 
  SiVisualstudiocode, 
  SiFastapi, 
  SiSwagger, 
  SiGraphql,
  SiBootstrap, 
  SiTableau} from 'react-icons/si';
// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import ParticlesContainer from '../../components/ParticlesContainer';
import { useState, useEffect } from "react";
// framer-motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// counter
import CountUp from "react-countup";
// Tooltip component
const Tooltip = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative inline-block group">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onTouchStart={() => setIsVisible(!isVisible)}
        className='relative'
      >
        {children}
      <div className="xl:hidden">
          {isVisible && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 mt-2 px-3 py-1 text-xs text-white bg-gray-800 rounded-md shadow-lg whitespace-nowrap">
              {text}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-0 border-b-4 border-l-transparent border-r-transparent border-b-gray-800"></div>
            </div>
          )}
        </div>
      </div>
      {/* Desktop tooltip remains unchanged */}
      <div className="hidden xl:block">
        {isVisible && (
          <div className="absolute top-full z-50 mt-1 px-2 py-1 text-xs text-white bg-gray-800 rounded-md shadow-lg whitespace-nowrap min-w-max transform translate-x-0">
            {text}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-0 border-b-4 border-l-transparent border-r-transparent border-b-gray-800"></div>
          </div>
        )}
      </div>
    </div>
  );
};
// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          { icon: <FaHtml5 />, name: 'HTML5' },
          { icon: <FaCss3 />, name: 'CSS3' },
          { icon: <FaJs />, name: 'JavaScript' },
          { icon: <SiBootstrap />, name: 'Bootstrap' },
          { icon: <FaGithub />, name: 'GitHub' },
        ],
      },
      {
        title: 'Backend & Databases',
        icons: [
          { icon: <FaPython />, name: 'Python' },
          { icon: <FaDatabase />, name: 'SQL' },
          { icon: <SiSqlite />, name: 'SQLite' },
          { icon: <SiMongodb />, name: 'MongoDB' },
        ],
      },
      {
        title: 'Data Science & AI',
        icons: [
          { icon: <SiPytorch />, name: 'PyTorch' },
          { icon: <SiOpencv />, name: 'OpenCV' },
          { icon: <SiPowerbi />, name: 'Power BI' },
          { icon: <SiTableau/>, name: 'Tableau' }
        ],
      },
    ],
  },
  {
    title: 'Education',
    icon: <FaGraduationCap className="text-accent" />,
    info: [
      {
        title: 'BTech in Artificial Intelligence & Data Science',
        institution: 'United Institute of Technology',
        location: 'Coimbatore, Tamil Nadu',
        stage: '2021 - 2025',
        details: [
          'CGPA: 7.93',
        ]
      },
      {
        title: 'Higher Secondary Certificate',
        institution: 'Govt Ashokapuram School',
        location: 'Coimbatore, Tamil Nadu', 
        stage: '2021',
        details: [
          'Percentage: 83.01%'
        ]
      }
    ]
  },
  {
    title: 'Internships',
    icon: <FaBriefcase className="text-accent" />,
    info: [
      {
        stage: 'Techvolt Software | Oct 2024 - Nov 2024',
        title: 'Junior FullStack Developer',
        description: [
          'Assisted in full-stack development using React.',
          'Gained experience and team collaboration skills.'
        ]
      },
      {
        stage: 'Quantum Green Technology | Aug 2024 - Oct 2024', 
        title: 'Python Developer',
        description: [
          'Contributed to developing Python-based applications for data processing and automation tasks',
          'Assisted in implementing backend logic using Python to support application.'
        ]
      }
    ]
  },
  {
    title: 'publications',
    info: [
      {
        title: '15th ICSIE 2025',
        stage: 'Accepted in IEEE Xplore SCOPUS Indexed Journal',
        description: [
          'Developed edge-optimized license plate detection using YOLOv11 & PaddleOCR.',
          'Achieved 95% accuracy with real-time performance on low-power devices.',
          'Published in IEEE for novel quantization-attention hybrid approach.'
        ]
      },
    ],
  },
];
const About = () => {
  const [index, setIndex] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsContentVisible(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left relative overflow-y-auto'>
      <div className='absolute top-0 left-0 right-0 bottom-0 z-0'>
        <ParticlesContainer />
      </div>
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 relative z-10 px-4'>
        {/* text */}
        <motion.div 
          className='flex-1 flex flex-col justify-center'
          animate={{
            opacity: isContentVisible ? 1 : 0,
            y: isContentVisible ? 0 : -20
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 text-center xl:text-left'
          >
            Passionate <span className='text-accent'>developer</span> crafting digital experiences
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-center xl:text-left'
          >
            Fresh graduate with strong foundation in modern web technologies. Eager to apply my skills in real-world projects and continuously expand my knowledge through hands-on experience.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex items-center gap-x-8 mb-12'
          >
            {/* skills counter */}
          <div className='relative flex-1'>
            <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={12} duration={5} /> +
            </div>
            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
              Technical Skills
            </div>
          </div>
          
          {/* vertical divider */}
          <div className='h-[60px] w-[1px] bg-white/10'></div>
          
          {/* projects counter */}
          <div className='flex-1'>
            <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={6} duration={5} /> +
            </div>
            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
              Projects Built
            </div>
          </div>
          
          {/* vertical divider */}
          <div className='h-[60px] w-[1px] bg-white/10'></div>
          
          {/* learning counter */}
          <div className='flex-1'>
            <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={200} duration={5} /> +
            </div>
            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
              Coding Hours
            </div>
          </div>
        </motion.div>
      </motion.div>

        {/* info section remains unchanged */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          {/* tabs */}
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <button
                  key={itemIndex}
                  className={`${index === itemIndex
                    ? 'text-accent after:w-full after:bg-accent'
                    : 'text-white/50 after:w-8 after:bg-white/20'
                    } cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:absolute after:-bottom-1 after:left-0 transition-all duration-300`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          {/* content */}
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-start overflow-y-auto h-[400px] px-2'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex flex-col w-full items-start text-left mb-4 last:mb-0'
                >
                  {/* title & stage */}
                  <div className='w-full'>
                    <div className='font-medium text-white mb-1'>{item.title}</div>
                    {item.stage && (
                      <div className='text-sm text-white/60'>{item.stage}</div>
                    )}
                  </div>
                  {/* institution & location */}
                    {(item.institution || item.location) && (
                      <div className='text-sm text-white/70 mt-1'>
                        {item.institution && <span>{item.institution}</span>}
                        {item.institution && item.location && <span>, </span>}
                        {item.location && <span>{item.location}</span>}
                      </div>
                    )}
                  {/* description */}
                  <div className='mt-2 w-full'>
                    <ul className='list-disc pl-5 space-y-1 text-sm text-white/80 text-left'>
                      {item.description?.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                      {item.details?.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  {/* icons */}
                {item.icons && (
                <div className='flex flex-wrap gap-4 mt-4 justify-start w-full items-end'>
                  {item.icons.map((iconData, iconIndex) => (
                    <div key={iconIndex} className="flex flex-col items-center">
                      <Tooltip text={iconData.name}>
                        <div className='text-2xl text-white hover:text-accent transition-colors duration-300'>
                          {iconData.icon}
                        </div>
                      </Tooltip>
                    </div>
                  ))}
                </div>
              )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
