import React from 'react'
import '../../views/Products/products.css'
import CloseBtn from '../../svg/close.svg'

const ModalRobusta = ({active, setActive}) => {
    return (
        <div className={active?'modal active':'modal'} onClick={() => setActive(false)}>
            <div className='modal__content-robusta modal__content' onClick={e => e.stopPropagation()}>
                <ul>
                    <li className='close-button-block'>
                        <img src={CloseBtn} alt="Sun icon" className='close-button' onClick={() => setActive(false)}/>
                    </li>
                    <li>
                        <h3 className='modal-title'>Robusta Coffee</h3>
                    </li>
                    <li className='modal-sub'>
                        <p >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Vigorous, hairless, evergreen shrub or small tree 
                            2 to 10 m high, durable. The tap root is short, 
                            the main mass of overgrown roots is concentrated 
                            in the surface 15 cm soil layer. The branches are 
                            vertical and horizontal, fall off after natural 
                            death.    
                        </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            The fruit is a round berry, when ripe, about 0.8-1.5
                            cm in length, dark red, ripens under optimal conditions
                            in 10-11 months; has a strong outer skin, under it -
                            a thin pulp, the seeds are surrounded by a gray-green
                            thick parchment shell. Seeds are paired, greenish-gray,
                            oval on one side, flat-convex with a deep groove on the
                            other.
                        </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            The old species name robusta translates as "strong",
                            as this species is more productive and resistant to
                            disease, grows in such conditions. Robusta is more
                            unpretentious and fruitful, and occupies about 20%
                            of world coffee production.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ModalRobusta;