import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pride } from '../../components/Pride/Pride'
import './home.css'
import '../../index.css'


export function Home() {
    return (
        <main className='bg'>
            <div className='hero-bg'>
                <section className='container'>
                        <h1 className='hero'>Every coffee bean has a story</h1>
                        <p className='hero-sub'>From the plantation to your mug, the coffee bean's journey is an adventure. Explore the odyssey of the dark and mysterious fruit that wakes you up each morning.</p>
                        <div className='hero-btn-align'>
                            <NavLink to="/story" className='hero-btn'>
                                Learn the history of your coffee.
                            </NavLink>
                        </div>
                </section>
            </div>
            <div className='about-bg'>
                <section className='container'>
                        <h2 className='about'>About company Amazing Coffee</h2>
                        <p className='about-sub'>
                            In the name of our project "Amazing Coffee", we put the meaning of
                            supplying coffee from the country of origin, directly from the plantation
                            where it was planted and grown. We want to show our love for nature and
                            the fruits it bestows on us. The connection between man and nature that
                            exists from the very beginning, from the moment of the birth of life itself
                            on earth ... We want to do work that will affect not only the taste buds of
                            a person, but also his soul and heart.
                        </p>
                </section>
            </div>
            <Pride/>
        </main>
    )
}
