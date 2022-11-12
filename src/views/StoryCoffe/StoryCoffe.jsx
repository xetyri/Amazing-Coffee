import React from 'react'
import { CoffeeInfo } from '../../components/CoffeeInfo/CoffeeInfo'
import './storyCoffe.css'
import Arrow from '../../svg/arrow.svg'


export function StoryCoffe() {
    return (
        <main id='story'>
            <div className='bg-story'>
                <section className="main container">
                    <div className="center">
                        <h2 className='title-head'>Coffee from Brazil</h2>
                        <p className='subtitle-head'>
                            Brazil is known as a coffee
                            giant. This is an unequivocal and obvious leader
                            in the industry, which creates about a third of
                            the total volume of these products. The total area
                            of local plantations is approximately 2.7 million
                            hectares. Most of them are located in the southeast
                            of the country, in the regions of Minas Gerais, Sao
                            Paulo, Parana. The climate here is favorable for
                            growing coffee - there are many sunny days, and there
                            is also enough rain. Most plantations are flat or
                            hilly, but there is an exception - Serra do Caparao,
                            where coffee grows at an altitude of about 1.5 km.
                        </p>    
                    </div>
                </section>
            </div>
            <a href='#story' className='scroll'><img src={Arrow} alt="Arrow" /></a>
            <CoffeeInfo />
        </main>
    )
}