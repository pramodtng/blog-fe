import React from 'react'
import Link from 'next/link'
import Wave from 'react-wavify'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
      <Wave
        fill='#0b70f9'
        paused={false}
        options={{
          height: 20,
          amplitude: 60,
          speed: 0.15,
          points: 5,
          className: 'wave'
        }}
      />
      <div className='absolute container mx-auto px-10 mb-4 top-0 left-0'>
        <div className='w-full flex items-center py-8'>
          <div className='flex items-center md:float-left hover:text-blue-400'>
            <Link href = "/">
              <Image
                src='/logo.png'
                alt='description'
                height={80}
                width={110}
                className='cursor-pointer'
              />
            </Link>
            <Link href="/">
              <span className='cursor-pointer font-bold text-2xl lg:text-6xl lg:ml-2 lg:tracking-[2px]'>
                བཀྲིས་བརྡ་དོན་བརྒྱུད་འབྲེལ་ཚད་འཛིན།།
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header