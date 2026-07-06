import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

const ProjectsSlider = () => {
  const videoRefs = useRef([]);
  const cardRefs = useRef([]);

  const canHover = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const handleMouseOver = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch(e => console.log("Autoplay prevented:", e));
    }
  };

  const handleMouseOut = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
    }
  };

  const handleTilt = (e, index) => {
    if (!canHover()) return;
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };

  const projectData = [
    {
      title: 'License Plate Detection',
      poster: '/thumb1.webp',
      video: '/thumb1-.mp4',
      description: 'Real-time license plate recognition system',
      link: 'https://github.com/PradheeshPG/License-Plate-Detection',
      tags: ['YOLOv11', 'PaddleOCR', 'Python'],
    },
    {
      title: 'Facial Attendance System',
      poster: '/thumb2.webp',
      video: '/thumb2.mp4',
      description: 'Automated attendance marking system',
      link: 'https://github.com/PradheeshPG/Facial-Attendance-monitor',
      tags: ['OpenCV', 'Python', 'Face Recognition'],
    },
    {
      title: 'Portfolio Website',
      poster: '/thumb3.png',
      video: '/thumb3.webm',
      description: 'Personal portfolio with animations & particles',
      link: 'https://github.com/PradheeshPG',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'PowerBI Dashboard',
      poster: '/thumb4.jpeg',
      video: '/thumb1.mp4',
      description: 'Interactive data analytics dashboard with KPIs',
      link: 'https://github.com/PradheeshPG',
      tags: ['Power BI', 'DAX', 'Data Visualization'],
    },
  ];
  return (
    <div className="relative w-full max-w-3xl mx-auto px-2 mb-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          640: { 
            slidesPerView: 2,
            spaceBetween: 16
          },
          1024: { 
            slidesPerView: 3,
            spaceBetween: 16
          }
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        modules={[Pagination]}
        className="compact-swiper"
      >
        {projectData.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              ref={el => cardRefs.current[index] = el}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-sm w-full flex flex-col transition-transform duration-150 ease-out will-change-transform"
              onMouseEnter={() => handleMouseOver(index)}
              onMouseLeave={() => handleMouseOut(index)}
              onMouseMove={(e) => handleTilt(e, index)}
            >
              {/* Image/Video Thumbnail (scales with card width) */}
              <div className="relative w-full aspect-video overflow-hidden group">
                {/* Static Image */}
                <div className="absolute inset-0">
                  <Image
                    src={project.poster}
                    alt={project.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {/* Video Overlay */}
                <video
                  ref={el => videoRefs.current[index] = el}
                  poster={project.poster}
                  preload="none"
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Text Content */}
              <div className="p-3 min-h-[96px] flex flex-col flex-1">
                <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">{project.title}</h3>
                <p className="text-gray-300 text-xs mb-2 line-clamp-2">{project.description}</p>

                {/* tech tags */}
                {project.tags && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-[1px] rounded-full border border-white/20 text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex justify-between items-center">
                  <span className="text-xs text-gray-400">View Project</span>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-500 transition-colors duration-200"
                    aria-label={`Visit ${project.title}`}
                  >
                    <FaGlobe className="text-base" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .compact-swiper {
          padding-bottom: 30px;
        }
        .swiper-pagination {
          bottom: 10px !important;
        }
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 8px;
          height: 8px;
          margin: 0 4px !important;
          transition: all 0.2s;
        }
        .swiper-pagination-bullet-active {
          background: #ef4444;
          opacity: 1;
          width: 8px;
          height: 8px;
        }
      `}</style>
    </div>
  );
};

export default ProjectsSlider;