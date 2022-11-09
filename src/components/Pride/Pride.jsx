import React from 'react'
import './pride.css'
import '../../index.css'
import CupCoffee from '../../assets/2.jpg'
import CupPlants from '../../assets/8.jpg'
import CoffeeSeed from '../../svg/CoffeeSeed.svg'
import Label from '../../svg/Label.svg'
import Medal from '../../svg/Medal.svg'
import Like from '../../svg/Like.svg'

import Costa from '../../svg/costa.svg'
import Cup from '../../svg/Cup.svg'
import DunkinDonuts from '../../svg/dunkin-donuts.svg'
import McDonalds from '../../svg/mcdonalds.svg'
import Starbucks from '../../svg/starbucks.svg'
import TimHortons from '../../svg/tim-hortons.svg'


export function Pride() {
    return (
        <div className='points-bg'>
            <section className='container'>
                <h2 className='points'>Why is it worth choosing us?</h2>
                <div className='points-block'>
                    <img src={CupCoffee} alt="" className='points-img'/>
                    <ul className='points-ul'>
                        <li className='points-li'>
                            <img src={CoffeeSeed} alt="Icon Coffee Seed" className='points-icon points-left' />
                            <div>
                                <h3 className='point-title'>Fresh roasted</h3>
                                <p className='points-sub'>
                                    We select and supply only high-quality beans, which we roast to order.
                                </p>
                            </div>
                        </li>
                        <li className='points-li'>
                            <img src={Like} alt="Icon Like" className='points-icon points-left' />
                            <div>
                                <h3 className='point-title'>Exclusive distribution</h3>
                                <p className='points-sub'>
                                    Exclusive distribution agreement with the direct manufacturer COOPENAL.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <ul className='points-ul'>
                        <li className='points-li'>
                            <img src={Medal} alt="Icon Medal" className='points-icon' />
                            <div>
                                <h3 className='point-title'>Superior quality</h3>
                                <p className='points-sub points-right'>
                                    Definition and quality control "Q-GRADER-ami" in our own laboratory in Brazil.
                                </p>
                            </div>
                        </li>
                        <li className='points-li points-right'>
                            <img src={Label} alt="Icon Label" className='points-icon' />
                            <div>
                                <h3 className='point-title'>Honest prices</h3>
                                <p className='points-sub'>
                                    Flexible approach to pricing policy.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <img src={CupPlants} alt="Images Cup Plants" className='points-img ing-rotate'/>
                </div>
            </section>
            <section className='container points-ul'>
                <h2 className='points'>Those who already chose us:</h2>
                <ul className='points-block'>
                    <li className='client-title'>
                        <img src={Starbucks} alt="Icon Starbucks" className='client-icon' />
                        <h3 className='point-title'>Starbucks</h3>
                        <p className='points-sub'>
                            The famous chain of coffee houses. It was first opened
                            in 1971 in Seattle. Probably there is no such person who
                            does not know the legendary Starbucks and its logo - a
                            siren. Sirens killed sailors with their singing, and this
                            siren only invites you to coffee. The name is borrowed
                            from the famous novel "Moby Dick".
                        </p>
                    </li>
                    <li className='client-title'>
                        <img src={Cup} alt="Icon Aroma Kava" className='client-icon' />
                        <h3 className='point-title'>Aroma Kava</h3>
                        <p className='points-sub'>
                            Today it is a fairly popular Ukrainian chain of coffee
                            houses. The first coffee shop opened in Kharkiv in 2014.
                            The assortment of the coffee house is being updated and
                            has a certain peculiarity: in the summer there is a summer
                            menu - cold coffee, cocktails and smoothies appear. And
                            with the onset of cold weather, the winter menu comes into play.
                        </p>
                    </li>
                    <li className='client-title'>
                        <img src={TimHortons} alt="Icon Tim Hortons" className='client-icon icon-bg-radius' />
                        <h3 className='point-title'>Tim Hortons</h3>
                        <p className='points-sub'>
                            It was founded in Canada in 1964 by Tim Hortons ( after whom
                            it is named ). It is the largest fast food chain in Canada.
                            Over time, coffee houses began to appear around the world.
                            For coffee, you can take sweet donuts or hearty hamburgers.
                            Their Bagels and Timbits products are quite popular.
                        </p>
                    </li>
                    <li className='client-title'>
                        <img src={McDonalds} alt="Icon McDonalds" className='client-icon' />
                        <h3 className='point-title'>McCafe</h3>
                        <p className='points-sub'>
                            Everyone knows the legendary McDonald's. This company has a
                            chain of coffee shops McCafe. This coffee shop first opened in
                            Australia in 1993. Coffee houses have overtaken McDonald's in
                            popularity. Were the most famous brand in Australia and New
                            Zealand. Coffee is brewed from Colombian and Brazilian beans.
                            For a fragrant drink, you can buy the most delicate desserts
                            - cakes, croissants, cakes.
                        </p>
                    </li>
                    <li className='client-title'>
                        <img src={Costa} alt="Icon Costa" className='client-icon' />
                        <h3 className='point-title'>Costa Coffee</h3>
                        <p className='points-sub'>
                            The coffee house was opened by two brothers in 1971.
                            They had their own coffee roasting factory - this allowed
                            them to supply coffee beans to coffee shops. There are
                            such coffee houses in 30 countries of the world (more
                            than 4000). The coffee beans are roasted slowly and
                            evenly. The coffee shop offers both hot and cold drinks.
                            You can buy snacks and desserts for drinks.
                        </p>
                    </li>
                    <li className='client-title'>
                        <img src={DunkinDonuts} alt="Icon Dunkin Donuts" className='client-icon' />
                        <h3 className='point-title'>Dunkin Donuts</h3>
                        <p className='points-sub'>
                            The first coffee shop was opened in 1950. Today there
                            are coffee houses in 45 countries of the world, and there
                            are more than 7,000 establishments in the USA. An ideal
                            place for those who are constantly in a hurry - the service
                            is fast and the prices are quite low. The institution
                            offers the following drinks: different types of coffee, tea,
                            hot chocolate, cocktails. For a drink, you can take a
                            delicious dessert - donuts with a variety of fillings.
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    )
}