import React from 'react'
import './about.css'
import '../../index.css'
import { Slider } from '../../components/Slider/Slider'
import { Form } from '../../components/Form/Form'
import Arrow from '../../svg/arrow.svg'
import Home from '../../svg/home.svg'
import Phone from '../../svg/phone.svg'
import Mail from '../../svg/mail.svg'

export function About() {
    return (
         <main className='background-about' id='about'>
            <section className='container' >
                <ul className='about-list'>
                    <li className="about-title">
                        <h2 className='about-title-width'>Amazing Coffee</h2>
                    </li>
                    <li>
                        <p className='about-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Amazing Coffee is the official exclusive distributor
                            in many countries. All exported coffees use a grading
                            system that is independent of whether the batch can
                            be traced back to its origin. As in many other countries,
                            the rating scale in Brazil includes grain quality and
                            grain size, resulting in a category being assigned to
                            the product.
                        </p>
                    </li>
                    <li>
                        <ul className='about-ul'>
                            <li className='about-li'>
                                <img className='about-icon' src={Home} alt="Address" />
                                <span>South Wing, Somerset House, London WC2R 1LA, United Kingdom</span>
                            </li>
                            <li className='about-li'>
                                <img className='about-icon contact' src={Phone} alt="Phone" />
                                <a className='contact-link' href='tel:+320000000006'>+320000000006</a>
                            </li>
                            <li className='about-li'>
                                <img className='about-icon contact' src={Mail} alt="E-mail" />
                                <a className='contact-link' href='mailto:xetyri2014@gmail.com'>xetyri2014@gmail.com</a>
                            </li>
                        </ul>    
                    </li>
                </ul>
                <a href='#about' className='scroll'><img src={Arrow} alt="Arrow" /></a>
                <h2 className='about-title-width directors-title'>Directors of our company</h2>     
                <Slider />
                <h2 className='about-title-width form-title'>You can write to us directly</h2>
                <Form />
            </section>
        </main>
    )
}