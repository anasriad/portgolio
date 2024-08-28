import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import Header from "./Header";
import Portrait from '../assets/Portrait.jpg';
import Horizontal from "./Hr";
import skills from '../data/Skills.json';
import languages from '../data/Languages.json'
import projects from '../data/Projects.json'
import experiences from '../data/Experiencex.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import StarRatings from 'react-star-ratings';
import Footer from "./Footer";

export default function Home() {
    const DownScale = (rate: number) => {
        return (rate / 100) * 5;
    };

    const textAnimation = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 2 } }
    };

    const imageAnimation = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 2 } }
    };

    const slideAnimation = {
        hidden: { x: -200, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 2 } }
    };

    const getButtonText = (text: string) => {

        if (!text.startsWith('https')) return text
        else return 'Visit Website'
    }


    return (
        <>
            <div className="bg-slate-800 h-screen">
                <div>
                    <Header />
                </div>
                <div className="relative z-20 max-h-fit">
                    <div className="flex justify-evenly pt-28 pl-52 w-fit h-fit items-center gap-48 relative z-40">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={textAnimation}
                            className="flex flex-col"
                        >
                            <div className="text-2xl font-bold text-orange-400">
                                <TypewriterComponent
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("Hello!... Anas Riad's Here 😊")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .changeDeleteSpeed(10)
                                            .typeString('Welcome to my Portfolio')
                                            .start();
                                    }}
                                />
                            </div>
                            <p className="text-xl text-white">
                                Projects, Experience, ...bla bla &#128585;
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={imageAnimation}
                            className="relative z-50"
                        >
                            <img src={Portrait} className="h-96 rounded-full" />
                        </motion.div>
                    </div>
                </div>
                <div className="relative z-30 bg-slate-800">
                    <Horizontal />
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <h1 className="text-2xl font-bold text-white">Who am I?</h1>
                        <p className="text-white text-center p-4 w-96">
                            I am a Software Developer (omg thats new haha) and Senior Student at Al Akhawayn University pursuing a degree in AI & Analytics for Business with a minor in computer science. Beyond his professional endeavors, he enjoys engaging in various hobbies that fuel his creativity and passion for technology. <br />
                            Scroll down for more details
                        </p>
                    </div>
                    <Horizontal />
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <div className="justify-center items-center text-center w-full">
                            <h1 className="text-2xl font-bold text-white">Technologies I use</h1>
                            <Swiper slidesPerView={4} spaceBetween={20} className="w-full h-full" loop>
                                {skills.map((skill) => (
                                    <SwiperSlide key={skill.name} className="flex justify-center items-center">
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={slideAnimation}
                                            className="rounded-3xl p-8 flex flex-col gap-6 justify-center items-center bg-gradient-to-b from-indigo-900 to-blue-black shadow-2xl max-w-xs"
                                        >
                                            <img src={skill.Logo} className="w-32 h-32 object-cover rounded-full shadow-lg" />
                                            <h3 className="font-bold text-white">{skill.name}</h3>
                                            <StarRatings rating={DownScale(skill.Level)} starRatedColor="orange" numberOfStars={5} starDimension="25px" />
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <Horizontal />
                    <motion.div initial='hidden' animate="visible" variants={{ hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }} className="justify-center items-center text-center w-full">
                        <h1 className="text-2xl font-bold text-white">Languages I use</h1>
                        <Swiper slidesPerView={2} spaceBetween={20} className="w-full h-full" loop>
                            {languages.map((language) => (
                                <SwiperSlide key={language} className="flex justify-center items-center">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={slideAnimation}
                                        className="rounded-3xl p-8 flex flex-col gap-6 justify-center items-center bg-gradient-to-b from-indigo-900 to-blue-black shadow-2xl max-w-xs w-80"
                                    >
                                        <h3 className="font-bold text-white">{language}</h3>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                    <Horizontal />
                    <motion.div initial='hidden' animate="visible" variants={{ hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }} className="justify-center items-center text-center w-full">
                        <h1 className="text-2xl font-bold text-white">My Projects</h1>
                        <Swiper slidesPerView={3} spaceBetween={20} className="w-full h-full" loop>
                            {projects.map((projects) => (
                                <SwiperSlide key={projects.Name} className="flex justify-center items-center">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={slideAnimation}
                                        className="rounded-3xl p-8 flex flex-col gap-6 justify-center items-center bg-gradient-to-b from-indigo-900 to-blue-black shadow-2xl max-w-xs w-80"
                                    >
                                        <img src={projects.Pic} className="w-32 h-32 object-cover rounded-full shadow-lg" />
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{projects.Name}</h5>
                                        <p className="mb-3 font-normal text-white dark:text-gray-400">{projects.description}</p>
                                        <a href={getButtonText(projects.Link)==='Visit Website' ? projects.Link : '#'} target="blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            {getButtonText(projects.Link)}
                                            {getButtonText(projects.Link)==='Visit Website' && <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>}
                                        </a>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                    <Horizontal />
                    <motion.div initial='hidden' animate="visible" variants={{ hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }} className="justify-center items-center text-center w-full">
                        <h1 className="text-2xl font-bold text-white">Experience</h1>
                        <Swiper slidesPerView={3} spaceBetween={20} className="w-full h-full" loop>
                            {experiences.map((experience) => (
                                <SwiperSlide key={experience.Position} className="flex justify-center items-center">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={slideAnimation}
                                        className="rounded-3xl p-8 flex flex-col gap-6 justify-center items-center bg-gradient-to-b from-indigo-900 to-blue-black shadow-2xl max-w-xs w-80"
                                    >
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{experience.Company}</h5>
                                        <h5 className="mb-3 font-normal text-white dark:text-gray-400">{experience.Type}</h5>
                                        <h5 className="mb-3 font-normal text-white dark:text-gray-400">{experience.Date}</h5>
                                        <h5 className="mb-3 font-normal text-white dark:text-gray-400">{experience.Location}</h5>
                                        
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                    <Footer/>
                </div>
            </div>
        </>
    );
}
