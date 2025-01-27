import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className='w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl sm:text-6xl md:text-1xl lg:text-[66px] font-Esteban'>Hi, I&apos;m Kjirsten Hernandez</h1>
      <p>I&apos;m a Software Engineering student at BYU-Idaho with years of experience in both graphic design and computers</p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
          contact me <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </a>
        <a href='/resume.pdf' download='resume.pdf' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
          my resume <Image src={assets.download_icon_white} alt='download icon' className='w-4' />
        </a>
      </div>
    </div>
  );
}

export default Header;
