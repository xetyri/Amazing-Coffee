import React, { useState } from 'react'
import './products.css'
import '../../index.css'
import ModalArabica from '../../components/ModalArabica/ModalArabica'
import ModalRobusta from '../../components/ModalRobusta/ModalRobusta'
import Arrow from '../../svg/arrow.svg'
import Sun from '../../svg/sun.svg'
import Mountain from '../../svg/mountain.svg'
import Seed from '../../assets/206.png'


export function Products() {
    const [modalArabicaActive, setModalArabicaActive] = useState(false);
    const [modalRobustaActive, setModalRobustaActive] = useState(false);
    return (
        <main id='products'>
            <div className='bg-products'>
                <section className='container'>
                    <ul className='list-block-coffee'>
                        <li>
                            <ul className='sort-block'>
                                <li>
                                    <h3 className='sort-title'>Arabica</h3>
                                </li>
                                <li className='line'/>
                                <li className='sort-text'>
                                    <img src={Mountain} alt="Mountain icon" className='sort-icon mountain'/>
                                    <p className='sort-sub'>Altitude: 600m - 2,000m</p>
                                </li>
                                <li className='line' />
                                <li className='sort-text'>
                                    <img src={Sun} alt="Sun icon" className='sort-icon sun'/>
                                    <p className='sort-sub'>Temperature: 15&#176; - 24&#176;</p>
                                </li>
                                <li className='position-sort-btn'>
                                    <button className='sort-btn' onClick={()=>setModalArabicaActive(true)}>More</button>
                                </li>
                            </ul>
                        </li>
                        <li className='bg-seed-block'>
                            <img src={Seed} alt="Seef cofffee" className='bg-seed'/>
                        </li>
                        <li>
                            <ul className='sort-block'>
                                <li>
                                    <h3 className='sort-title'>Robusta</h3>
                                </li>
                                <li className='line'/>
                                <li className='sort-text'>
                                    <img src={Mountain} alt="Mountain icon" className='sort-icon mountain'/>
                                    <p className='sort-sub'>Altitude: 700m</p>
                                </li>
                                <li className='line' />
                                <li className='sort-text'>
                                    <img src={Sun} alt="Sun icon" className='sort-icon sun'/>
                                    <p className='sort-sub'>Temperature: 24&#176; - 29&#176;</p>
                                </li>
                                <li className='position-sort-btn'>
                                    <button className='sort-btn'  onClick={()=>setModalRobustaActive(true)}>More</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
            <ModalRobusta active={modalRobustaActive} setActive={setModalRobustaActive}/>
            <ModalArabica active={modalArabicaActive} setActive={setModalArabicaActive} />
            <a href='#products' className='scroll'><img src={Arrow} alt="Arrow"/></a>
        </main>
    )
}
