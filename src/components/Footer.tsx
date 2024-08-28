import Logo from '../assets/Logo.png'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
export default function Footer() {
    return <>
        <header>
            <nav className="bg-black border-gray-200 dark:bg-gray-800 text-white">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a className="flex items-center">
                        <img src={Logo} className=" w-14 h-14" alt="My Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap ">Anas Riad</span>
                    </a>
                    <div className=' flex gap-4'>
                        <a href='https://www.linkedin.com/in/anasriad/' target='blank' className=' text-4xl'>
                            <FaLinkedin />
                        </a>
                        <a href='https://github.com/anasriad' target='blank'  className=' text-4xl'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    </>
}