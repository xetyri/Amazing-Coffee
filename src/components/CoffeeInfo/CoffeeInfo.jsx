import React from 'react'
import './coffeeInfo.css'
import '../../index.css'
import Seeds from '../../assets/5.png'
import Hand from '../../assets/7.jpg'
import Basket from '../../assets/1.jpg'
import Brazil from '../../assets/25.jpg'


export function CoffeeInfo() {
    return (
        <div className='background-story'>
            <section className="container">
                <h2 className="story-title">History of Brazilian coffee</h2>
                <ul className="info-block">
                    <li className="picture-block-cybe">
                        <img src={Brazil} alt="Brazil" className="picture-cybe" />
                    </li>
                    <li className='info-text'>
                        <p className='info-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Coffee ended up in Brazil
                            in 1727 - it was then that the Portuguese Francisco
                            da Melo Paleta brought the first seedlings there.
                            Legend has it that the Portuguese wanted to grow
                            coffee in their colonies, as France did in Guiana.
                            The local authorities, however, refused to share the
                            grains, not wanting someone to plant them in plantations
                            in another country. Then the Portuguese leaders
                            instructed Palete to get the grain in some other
                            way, that is, in fact, illegally.
                        </p>    
                        <p className='info-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
                            The Portuguese performed this special task simply brilliantly. He
                            seduced the governor's wife, and she joyfully gave
                            Francisco a bush of coffee, which was brought to
                            Brazil. After that, coffee was grown in the country
                            strictly for the needs of the colonialists and partly
                            for local residents. The territory of Brazil is quite
                            large, and later it turned out that it could share
                            quality coffee with other countries.
                        </p>
                    </li>
                    <li className='line' />
                    <li className='info-text'>
                        <p className='info-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Toward the middle of the 19th
                            century, a kind of coffee boom happened in America and
                            Europe. As a result, the demand for Brazilian coffee
                            quickly increased and the country became one of the main
                            suppliers of invigorating beans in the world. Even then,
                            this branch of the economy began to occupy an important
                            place in the state economy, and local coffee accounted
                            for 40% of the entire market. The next boom happened around
                            1880 to 1930.
                        </p>
                        <p className='info-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Toward the end of this period, Brazil actually
                            became a monopoly in the world coffee market, because it
                            already produced 80% of the grain raw material! Later,
                            she had worthy competitors, but that's a completely different
                            story. In the 1990s, people around the world became much more
                            demanding of the quality of these products. At that time,
                            coffee production in Brazil was too conveyorized. Then a
                            conflict arose with a number of states, which, in particular,
                            had claims to too high export quotas. Later, however,
                            manufacturers improved the quality of production, where
                            the most advanced technologies are already being applied.
                        </p>
                    </li>
                    <li className="picture-block">
                        <img src={Seeds} alt="Seeds" className="picture" />
                    </li> 
                    <li className='line'/>
                    <li className="picture-block-cybe">
                        <img src={Hand} alt="Hand" className="picture-cybe" />
                    </li> 
                    <li className='info-text'>
                        <h3 className='info-title'>Consumption</h3>
                        <p className='info-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Brazilians do not only export coffee and make money on
                            it. They also like to drink the drink, being avid coffee
                            drinkers. Residents of the country consume an average
                            of 4.8 to 5.8 kg of coffee per capita per year, but in
                            terms of the total amount, Brazil is the absolute world
                            leader with an indicator of 2,191,596 tons per year.
                        </p>
                        <p className='info-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            At the same time, a funny fact is that they keep the
                            worst varieties for themselves, and send the best ones
                            for export. In addition, the country has a ban on the
                            import of unroasted coffee. This forces local coffee
                            shops to use only local beans. By the way, here you
                            need to pay about 5.1 Brazilian reais for an espresso,
                            which is equivalent to about 29 UAH, and for a cappuccino
                            - 7.3 BRL (38-39 UAH).
                        </p>
                        <p className='info-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Brazilians love ground coffee the most - according to
                            the Research Coffee Consortium, 81% of the country's
                            population chooses it. In recent years, the consumption
                            of the invigorating drink has only increased, even
                            despite the Covid-19 pandemic. The southeastern region
                            consumes coffee the most - 45% of the total figure for
                            the country.
                        </p>
                    </li>
                    <li className='line' />
                    <li className='info-text'>
                        <h3 className='info-title'>Coffee supplies from Brazil</h3>
                        <p className='info-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            All exported coffees use a grading system that is independent
                            of whether the batch can be traced back to its origin. As in
                            many other countries, the rating scale in Brazil includes
                            grain quality and grain size, resulting in a category being
                            assigned to the product.
                        </p>
                        <p className='info-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Brazilian grain coffee is the most demanded in the world
                            market and the share of its export is about 40%. These products
                            can be found on the shelves of the whole world, and the following
                            countries are in the lead as its importers: Germany, Italy, Japan, USA, Belgium.
                        </p>
                        <p className='info-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            There are many sellers of such products on the Ukrainian market,
                            but only a few of them are direct importers and suppliers of Brazilian
                            coffee. Among them is our company Torbafood. We offer the lowest price
                            due to the fact that we avoid intermediaries, the presence of which
                            inevitably increases the cost of goods.
                        </p>
                        <p className='info-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Our online store presents the best varieties of invigorating grains
                            from Brazil. This product is in high demand and is an excellent choice.
                            If you want to buy Brazilian coffee inexpensively, please contact our company.
                        </p>
                    </li>
                    <li className="picture-block">
                        <img src={Basket} alt="Basket" className="picture" />
                    </li> 
                </ul>
            </section>
        </div>
    )
}