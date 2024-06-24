import React from 'react';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

const Header = () => {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-3 px-5 flex justify-between items-center shadow-md bg-gray-900 rounded-lg animate-fadeIn dark:bg-gray-900'>
            <img src='images.svg' alt='Logo' className='w-24 h-24 animate-float' />
            {isSignedIn ?
                <div className='flex gap-4 items-center'>
                    <Link to={'/dashboard'}>
                      <Button variant="game" className='transition-colors '>Dashboard</Button>
                    </Link>
                    <UserButton />
                </div> :

                <Link to={'/auth/sign-in'}>
                    <Button variant="game" className='transition-colors '>
                        Get Started
                    </Button>
                </Link>
            }
        </div>

    );
};

export default Header;
