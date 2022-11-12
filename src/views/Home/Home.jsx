import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pride } from '../../components/Pride/Pride'
import { Achievement } from '../../components/Achievement/Achievement'
import Arrow from '../../svg/arrow.svg'
import './home.css'
import '../../index.css'


export function Home() {
    return (
        <main className='bg' id='hero'>
            <div className='hero-bg'>
                <section className='container'  >
                    <h1 className='hero'>Every coffee bean has a story</h1>
                    <p className='hero-sub'>From the plantation to your mug, the coffee bean's journey is an adventure. Explore the odyssey of the dark and mysterious fruit that wakes you up each morning.</p>
                    <div className='hero-btn-align'>
                        <NavLink to="/story" className='hero-btn'>
                            Learn the history of your coffee.
                        </NavLink>
                    </div>
                </section>
            </div>
            <Achievement />
            <Pride />
            <a href='#hero' className='scroll'><img src={Arrow} alt="Arrow"/></a>
        </main>
    )
}
