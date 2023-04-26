import react from 'react'
import { useState } from 'react';
import MenuItems from './MenuItems';
import { FiMenu } from 'react-icons/fi';

const Test = () => {

    const [active, setActive] = useState('false')

    const showMenu = () => {
        setActive(!active)
    }

    return (
        <div className='fixed w-full text-black flex justify-between p-4 items-center'>
            <div className=' text-2xl uppercase font-bold text-center'>
                <h1>Test</h1>
            </div>

            <nav>

                <div className="absolute right-6 md:hidden top-6">
                    < FiMenu onClick={showMenu} className='scale-150 cursor-pointer'/>
                </div>

                <ul className='md:flex hidden gap-5 p-6 uppercase bg-blue-300'>
                    <li>
                        Home
                    </li>
                    <li>
                        Order
                    </li>
                    <li>
                        Products
                    </li>
                    <li>
                        Link
                    </li>
                    <li>
                        Hiii
                    </li>
                    <li>
                        Mmh
                    </li>
                </ul>

                <MenuItems showMenu={showMenu} active={active}/>
            </nav>
        </div>
    );
};

export default Test;