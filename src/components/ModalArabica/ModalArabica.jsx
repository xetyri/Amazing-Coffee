import React from 'react'
import '../../views/Products/products.css'
import CloseBtn from '../../svg/close.svg'

const ModalArabica = ({active, setActive}) => {
    return (
        <div className={active?'modal active':'modal'} onClick={() => setActive(false)}>
            <div className='modal__content-arabica modal__content' onClick={e => e.stopPropagation()}>
                <ul>
                    <li className='close-button-block'>
                        <img src={CloseBtn} alt="Sun icon" className='close-button' onClick={() => setActive(false)}/>
                    </li>
                    <li>
                        <h3 className='modal-title'>Arabica Coffee</h3>
                    </li>
                    <li className='modal-sub'>
                        <p >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Evergreen shrub or small tree, usually reaching
                            a height of 5 m and in some cases 8-10 m if not
                            pruned, hairless, long-lived. The taproot is short
                            and strong, rarely growing in length more than
                            45 cm. Trunk with greenish-gray creeping bark.
                            The branches are long, flexible, spreading, often
                            drooping.
                        </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            The fruit is an oval-elliptical or almost spherical
                            berry, when ripe, about 1.5 cm in length, dark red
                            or yellow, ripens under optimal conditions 8 months
                            after flowering, and at the borders of the cultivation
                            zone - after 9 months; has a strong outer skin, under
                            it is a juicy yellowish pulp, the seeds are surrounded
                            by a gray-green parchment shell. Seeds are paired,
                            greenish-gray, oval on one side, flat-convex with a
                            deep groove on the other.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ModalArabica;