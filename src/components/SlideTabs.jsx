import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const SlideTabsExample = () => {
    return (
        <div className='grid h-screen place-content-center bg-gray-300'>
            <SlideTabs />
        </div>
    );
}

const SlideTabs = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className='relative mx-auto flex w-fit rounded-full border-2 border-gray-600 bg-white p-1'
        >
            <Tab setPosition={setPosition}>Home</Tab>
            <Tab setPosition={setPosition}>Content</Tab>
            <Tab setPosition={setPosition}>About</Tab>
            <Tab setPosition={setPosition}>Contact</Tab>
            <Cursor position={position} />
        </ul>
    );
}

const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);
    
    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref.current) return;
                const { width } = ref.current.getBoundingClientRect();
                setPosition({
                    width,
                    opacity: 1,
                    left: ref.current.offsetLeft,
                });
            }}
            className='relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase font-semibold text-slate-800 hover:text-white'
        >
            {children}
        </li>
    );
}

const Cursor = ({ position }) => {
    return (
        <motion.li
            className='absolute z-0 h-7 rounded-full bg-purple-800'
            animate={{
                opacity: position.opacity,
                width: position.width,
                left: position.left,
            }}
            transition={{ duration: 0.3 }} // Anda bisa menyesuaikan durasi transisi
        />
    );
}