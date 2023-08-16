import React from 'react'

const Banner = () => {
     return (
    <div className='flex items-center justify-center mx-auto flex-col max-w-5xl h-96 bg-no-repeat bg-cover mb-3 bg-[url(../src/assets/img//banner.png)]'>
        <h1 className='text-3xl text-yellow-400'>Restaurant</h1>
        <p className='font-dancing text-xl text-yellow-500'>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
    </div>
  )
}

export default Banner