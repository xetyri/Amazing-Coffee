import React from 'react'
import '../../index.css'
import { SeedCoffee } from '../../components/SeedCoffee/SeedCoffee'
import { Sorts } from '../../components/Sorts/Sorts'
import { Harvesting } from '../../components/Harvesting/Harvesting'
import { Processing } from '../../components/Processing/Processing'
import Arrow from '../../svg/arrow.svg'


export function Products() {
    return (
        <main id='products'>
            <SeedCoffee />
            <a href='#products' className='scroll'><img src={Arrow} alt="Arrow" /></a>
            <Sorts />
            <Harvesting />
            <Processing />
        </main>
    )
}
