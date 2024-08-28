import { FaCode } from 'react-icons/fa';

export default function Horizontal() {
    return (
        <>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-screen h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <FaCode className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
            </div>
        </>
    );
}
