import React from 'react';
import { Button } from '../button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-3 px-5 flex justify-between items-center shadow-md bg-gray-900 rounded-lg animate-fadeIn dark:bg-gray-900'>
            <img src='images.svg' alt='Logo' className='w-24 h-24 animate-float' />

            <Link to={'/auth/sign-in'}>
                <Button variant="game" className='transition-colors '>
                    Get Started
                </Button>
            </Link>
        </div>
    );
};

export default Header;
