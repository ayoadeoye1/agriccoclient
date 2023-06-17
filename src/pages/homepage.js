import React, { useState } from 'react';
import menu1 from '../assets/menu.png'
import menu2 from '../assets/close.png'
import { Link, Outlet } from 'react-router-dom';

const HomePage = () => {
  const [resp, setResp] = useState(false);

  const Don = () =>{
    setResp((prev)=> !prev)
  }

  return (
    <div>
      <header className='bg-gradient-to-br from-blue-400 via-slate-200 to-yellow-100 flex flew-row justify-between'>
        <h1 className='p-4 text-2xl sm:text-3xl font-about'><Link to='/' className='pl-2'>AgriccoNG</Link></h1>
        <div className=' flex flex-row justify-between'>
          <div className=' m-4 hidden text-blue-500 md:flex md:flex-row sm:flex sm:flex-row '>
            <Link to='/products' className='pl-2'>products</Link>
            <Link to='/cart' className='pl-2'>cart</Link>
            <Link to='/account' className='pl-2'>account</Link>
          </div>

          <div className='sm:hidden lg:hidden shadow-lg absolute top-4 right-4'>
            <img height={35} width={35} alt='menu' onClick={() => Don()} src={ resp ? menu2 : menu1} className='font-bold' />
          </div>
          {
            resp 
            &&
            <div className='fixed top-0 right-0 left-0 bottom-0  pt-5'>
              <div  className='sm:hidden shadow-lg absolute top-4 right-6'><div className=' text-white font-bold text-5xl' onClick={() => Don() }>x</div></div><br />
              <div className='m-4 flex flex-col text-center text-2xl font-semibold font-sans text-white '>
                <Link className='pl-2'>products</Link><br />
              </div>
            </div>
          }
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default HomePage;
