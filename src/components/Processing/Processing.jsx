import React from 'react'
import './processing.css'
import '../../index.css'


export function Processing() {
    return (
        <div className='background-processing'>
            <section className="container edit-container">
                <ul className='processing-list'>
                    <li className="processing-title">
                        <div className='line' />
                        <h2 className='processing-title-width'>Processing</h2>
                        <div className='line' />
                    </li>
                    <li>
                        <ul className='processing-list-info'>
                            <li>
                                <p className='processing-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    The next important step is processing. The
                                    collected berries are sent to special stations
                                    where the coffee beans are separated from the
                                    pulp and dried for long-term storage. Such
                                    stations can represent some kind of building
                                    on a separate farm or a large industrial facility,
                                    where a huge number of grains are processed for
                                    processing. At the stations, coffee turns from
                                    a berry into a parchment (dry grain, but still
                                    covered with a parchment shell).
                                </p>
                            </li>
                            <li>
                                <h3 className='processing-title-inform'>Natural (dry) processing</h3>
                                <p className='processing-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    This is the oldest processing method. The
                                    harvested berries are expected on the surface
                                    and left in the sun. Some producers lay
                                    out the berries for collection, others -
                                    on special tables for drying. Recent checks
                                    are regular checks due to high air circulation.
                                    Coffee fruits need to be turned constantly
                                    so that they do not become moldy, start to
                                    rot and ferment. When marketed properly dried,
                                    they are mechanically extracted from the dried
                                    berries and transported with parchment (the
                                    hulling process). Then the "green coffee" is
                                    sent to the warehouse.
                                </p>
                            </li>
                            <li>
                                <h3 className='processing-title-inform'>Washed processing</h3>
                                <p className='processing-subtitle '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    The meaning of the washed processing is to
                                    extract the grain from the pulp before sending
                                    it to dry. After collecting the fruits of a
                                    special machine - a depulpator, the peel is
                                    removed from the coffee berries and the pulp
                                    is removed. They are then placed in a clean
                                    tank of water, where the remaining pulp is
                                    cleaned out during the fermentation process.
                                    After that, the coffee is washed again to remove
                                    various residues as much as possible, and then
                                    sent to dry in the sun. Lay it out on the patio
                                    or on special tables, as well as in natural
                                    processing.
                                </p>
                            </li>
                            <li className='edit-subtitle'>
                                <p className='processing-subtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    There are several other ways of processing
                                    coffee berries, for example: semi-washed
                                    processing, honey processing, semi-washed
                                    processing (wet hull). But farmers do not
                                    use these methods as often and everywhere
                                    as natural and washed. Therefore, we will
                                    be able to talk about them in more detail
                                    in our blog as needed.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    )
}