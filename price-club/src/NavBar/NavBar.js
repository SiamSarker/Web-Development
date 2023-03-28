import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        {id: 1, name: 'Home', path: '/'},
        {id: 2, name: 'Products', path: '/'},
        {id: 3, name: 'Orders', path: '/'},
        {id: 4, name: 'Contact', path: '/'},
        {id: 5, name: 'About', path: '/'},
    ]
    return (
        <nav className='bg-purple-200 w-full'>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
            {
                open ? <XMarkIcon/> : <Bars3Icon/>
            }
            </div>
            
            <ul className={`md:flex bg-purple-200 w-full justify-center absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;