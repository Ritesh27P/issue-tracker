'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react';
import classNames from 'classnames';
import { AiFillBug } from 'react-icons/ai';

const Navbar = () => {
    const currentPath = usePathname();
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'},
    ];

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 text-center items-center '>
            <Link href={'/'}><AiFillBug /></Link>
            <ul className='flex space-x-6'>
                {
                    links.map(link => (
                        <li 
                        className={classNames({
                            'text-gray-600': currentPath !== link.href,
                            'text-gray-800': currentPath === link.href,
                            'hover:text-gray-800 transition-colors': true
                        })} 
                        key={link.href}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar