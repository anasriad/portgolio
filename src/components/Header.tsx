import Logo from '../assets/Logo.png'
export default function Header() {
    return <>
        <header>
            <nav className="bg-black border-gray-200 dark:bg-gray-800 text-white">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a className="flex items-center">
                        <img src={Logo} className=" w-14 h-14" alt="My Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap ">Anas Riad</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <a href="mailto:a.riad@aui.ma" className=' rounded-xl p-3 hover:bg-white hover:text-black hover:duration-300 hover:cursor-pointer'>Contact Me</a>
                    </div>
                    <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1 gap-16 font-bold">
                        <button className=' rounded-xl p-3 hover:bg-white hover:text-black hover:duration-300'>About Me</button>
                        <button className=' rounded-xl p-3 hover:bg-white hover:text-black hover:duration-300'>Projects</button>
                        <button className=' rounded-xl p-3 hover:bg-white hover:text-black hover:duration-300'>Experience</button>
                    </div>
                </div>
            </nav>
        </header>
    </>
}