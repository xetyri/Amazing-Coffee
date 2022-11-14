import React from 'react'
import './harvesting.css'
import '../../index.css'


export function Harvesting() {
    return (
        <div className='background-harvesting'>
            <section className="container edit-container">
                <ul className='harvesting-list'>
                    <li className="harvesting-title">
                        <div className='line' />
                        <h2 className='harvesting-title-width'>Picking</h2>
                        <div className='line' />
                    </li>
                    <li>
                        <ul className='harvesting-list-info'>
                            <li>
                                <h3 className='harvesting-title-inform'>Machine Picking</h3>
                                <p className='harvesting-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    As you know, coffee is grown in mountainous
                                    areas, as well as in vast plateaus, ideal
                                    conditions for planting large plantations.
                                    For harvesting, machines of considerable
                                    size can be used. The work is as follows:
                                    The principle of the machine is to shake
                                    the coffee tree until the fruit itself falls
                                    from it. This method has many disadvantages,
                                    but the most important thing is that not
                                    only ripe fruits, but also unripe ones fall
                                    from the tree branch. After harvesting,
                                    additional sorting of berries is required,
                                    as well as destruction from mixed knots and
                                    leaves.
                                </p>
                            </li>
                            <li>
                                <h3 className='harvesting-title-inform'>Strip Picking</h3>
                                <p className='harvesting-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    In addition to the plateau, farms can be
                                    located on steep slopes, where it is difficult
                                    for vehicles to reach. Therefore, a certain
                                    part of the crop still has to be harvested
                                    by hand. Like machine stripping, the collection
                                    is very fast, but also, like machine stripping,
                                    not very accurate. The easiest way is to remove
                                    all the fruits from the branch with one movement
                                    of the hand.
                                </p>
                            </li>
                            <li>
                                <h3 className='harvesting-title-inform'>Hand Picking</h3>
                                <p className='harvesting-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    This method is the most efficient way to harvest
                                    first-class coffee. Only ripe berries are removed
                                    from the tree branch.
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <br/>
                                    After harvesting, the berries must be sorted
                                    in order to separate unripe or overripe fruits
                                    from good ones. On some farms, this is done by
                                    hand, and somewhere they use special equipment.
                                    In more developed countries, fruits are sorted
                                    using a tank of water. Berries are immersed in
                                    tanks filled with water, and ripe berries sink
                                    to the bottom. A special pump pumps them out to
                                    the main processing section, or they end up there
                                    themselves. Unripe fruits remaining on the
                                    surface are harvested and processed separately.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    )
}