// next
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
// components
import Circles from '../../components/Circles';
import ParticlesContainer from '../../components/ParticlesContainer';
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// icons
import { HiBriefcase, HiBookOpen, HiArrowTopRightOnSquare } from 'react-icons/hi2';

// logo circle: shows the company logo if the image exists in /public,
// otherwise falls back to the company initial
const LogoCircle = ({ logo, initial, icon }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className='w-12 h-12 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden'>
      {logo && !imgFailed ? (
        <Image
          src={logo}
          alt=''
          width={48}
          height={48}
          className='w-full h-full object-contain p-1'
          onError={() => setImgFailed(true)}
        />
      ) : icon ? (
        <span className='text-xl text-accent'>{icon}</span>
      ) : (
        <span className='text-xl font-bold text-accent'>{initial}</span>
      )}
    </div>
  );
};

// data
const experienceData = [
  {
    role: 'Junior AI Developer',
    company: 'Greenbotz',
    website: 'https://greenbotz.co',
    period: 'Jun 2026 - Present',
    current: true,
    logo: '/greenbotz.png',
    initial: 'G',
    summary:
      'Working on enterprise-grade Video Analytics solutions powered by Computer Vision, Vision Language Models (VLMs), and advanced object grounding models — intelligent surveillance systems that understand complex scenes from CCTV and RTSP camera streams for real-time safety, security, and automation.',
    bullets: [
      'Developing AI-powered Video Analytics solutions for real-time CCTV surveillance.',
      'Building intelligent detection modules for industrial safety, security, and workplace monitoring.',
      'Working with Vision Language Models (VLMs) and object grounding models such as Locate Anything to understand complex visual scenes.',
      'Designing AI pipelines for event detection, object localization, scene understanding, and automated alert generation.',
      'Developing indoor robot vision capabilities for autonomous monitoring and intelligent decision-making.',
      'Integrating computer vision models with live RTSP streams and edge AI systems.',
      'Evaluating AI model performance through accuracy measurement, false-positive analysis, stress testing, and performance optimization.',
      'Collaborating with cross-functional teams to prototype and deploy scalable AI solutions.',
    ],
    tech: [
      'Python', 'Computer Vision', 'VLMs', 'Locate Anything', 'OpenCV',
      'YOLO', 'PaddleOCR', 'SQLite', 'Streamlit', 'RTSP Streaming',
      'Deep Learning', 'Object Detection', 'Object Tracking',
      'Scene Understanding', 'AI Model Validation', 'Edge AI',
    ],
  },
  {
    role: 'Junior FullStack Developer',
    company: 'Techvolt Software',
    period: 'Oct 2024 - Nov 2024',
    badge: 'Internship',
    initial: 'T',
    bullets: [
      'Assisted in full-stack development using React.',
      'Gained hands-on experience and team collaboration skills.',
    ],
    tech: ['Python', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Node.js', 'React'],
  },
  {
    role: 'Python Developer',
    company: 'Quantum Green Technology',
    period: 'Aug 2024 - Oct 2024',
    badge: 'Internship',
    initial: 'Q',
    bullets: [
      'Contributed to developing Python-based applications for data processing and automation tasks.',
      'Assisted in implementing backend logic using Python to support applications.',
    ],
    tech: ['Python', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn'],
  },
  {
    role: 'IEEE Publication — 15th ICSIE 2025',
    company: 'IEEE Xplore, SCOPUS Indexed',
    period: '2025',
    badge: 'Research',
    icon: <HiBookOpen />,
    bullets: [
      'Developed edge-optimized license plate detection using YOLOv11 & PaddleOCR.',
      'Achieved 95% accuracy with real-time performance on low-power devices.',
      'Published for a novel quantization-attention hybrid approach.',
    ],
    tech: ['YOLOv11', 'PaddleOCR', 'Edge AI', 'Model Quantization'],
  },
];

const Experience = () => {
  return (
    <div className='h-full bg-primary/30 py-32 relative overflow-y-auto overflow-x-hidden scrollbar-none'>
      <Head>
        <title>Experience | P G Pradheesh</title>
      </Head>
      <div className='absolute top-0 left-0 right-0 bottom-0 z-0'>
        <ParticlesContainer />
      </div>
      <Circles />

      <div className='container mx-auto relative z-10 px-4'>
        {/* heading */}
        <motion.h2
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 text-center mb-2'
        >
          My <span className='text-accent'>Journey</span>
        </motion.h2>
        <motion.p
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-[600px] mx-auto text-center mb-12'
        >
          From AI & Data Science graduate to building production video
          analytics — the roles and research that shaped my path.
        </motion.p>

        {/* timeline */}
        <div className='max-w-[760px] mx-auto relative'>
          {/* vertical line */}
          <div className='absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-[2px] bg-white/10'></div>

          <div className='flex flex-col gap-y-8'>
            {experienceData.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn('up', 0.2 + Math.min(i, 2) * 0.15)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.15 }}
                exit='hidden'
                className='relative pl-8 sm:pl-12'
              >
                {/* timeline dot */}
                <div
                  className={`absolute left-0 sm:left-[2px] top-6 w-4 h-4 rounded-full border-2 ${
                    item.current
                      ? 'bg-accent border-accent shadow-[0_0_12px_rgba(241,48,36,0.8)]'
                      : 'bg-primary border-white/40'
                  }`}
                ></div>

                {/* card */}
                <div className='bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 text-left transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 hover:bg-white/[0.07]'>
                  {/* header */}
                  <div className='flex items-start gap-x-4 mb-3'>
                    <LogoCircle logo={item.logo} initial={item.initial} icon={item.icon} />
                    <div className='flex-1 min-w-0'>
                      <div className='flex flex-wrap items-center gap-x-3 gap-y-1'>
                        <h3 className='font-semibold text-white text-base sm:text-lg'>
                          {item.role}
                        </h3>
                        {item.current && (
                          <span className='flex items-center gap-x-[6px] text-[11px] uppercase tracking-wider text-green-400 border border-green-400/30 bg-green-400/10 px-2 py-[2px] rounded-full'>
                            <span className='relative flex h-[7px] w-[7px]'>
                              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                              <span className='relative inline-flex rounded-full h-[7px] w-[7px] bg-green-400'></span>
                            </span>
                            Present
                          </span>
                        )}
                        {item.badge && (
                          <span className='text-[11px] uppercase tracking-wider text-white/60 border border-white/20 px-2 py-[2px] rounded-full'>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className='text-sm text-white/60 mt-[2px]'>
                        {item.website ? (
                          <a
                            href={item.website}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-x-1 hover:text-accent transition-colors duration-300'
                          >
                            {item.company}
                            <HiArrowTopRightOnSquare className='text-xs' />
                          </a>
                        ) : (
                          <span>{item.company}</span>
                        )}
                        <span className='mx-1'>·</span> {item.period}
                      </div>
                    </div>
                  </div>

                  {/* summary */}
                  {item.summary && (
                    <p className='text-sm text-white/70 mb-3'>{item.summary}</p>
                  )}

                  {/* bullets */}
                  <ul className='list-disc pl-5 space-y-1 text-sm text-white/80'>
                    {item.bullets.map((point, bi) => (
                      <li key={bi}>{point}</li>
                    ))}
                  </ul>

                  {/* tech pills */}
                  {item.tech && (
                    <div className='flex flex-wrap gap-2 mt-4'>
                      {item.tech.map((t, ti) => (
                        <span
                          key={ti}
                          className='text-[11px] px-2 py-[2px] rounded-full border border-white/20 text-white/70'
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
