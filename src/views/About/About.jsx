import React from 'react'
import Arrow from '../../svg/arrow.svg'

export function About() {
    return (
         <main className='bg' id='about'>
            <div className='hero-bg'>
                <section className='container'  >
                </section>
            </div>
            <a href='#about' className='scroll'><img src={Arrow} alt="Arrow"/></a>
        </main>
    )
}