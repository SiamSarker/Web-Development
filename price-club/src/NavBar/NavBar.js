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
        <nav>
            {
                open ? <XMarkIcon onClick={() => setOpen(!open)} className="h-6 w-6"></XMarkIcon> 
                : <Bars3Icon onClick={() => setOpen(!open)} className="h-6 w-6"></Bars3Icon>
            }
            
            <span>{open ? 'open' : 'close'}</span>
            <ul className='md:flex justify-center'>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;