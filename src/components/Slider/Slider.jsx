import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css'
import '../../index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Lera from '../../assets/02.jpg'
import Taya from '../../assets/01.jpg'
import Sara from '../../assets/05.jpeg'
import Tony from '../../assets/03.jpg'
import Roman from '../../assets/04.jpg'

export function Slider() {
    return (
        <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className='slider-block'
        >
            <SwiperSlide className='slider-content'>
                <img src={Taya} alt='Taya' className='slider-img' />
                <div className='slider-subtitle'>
                    <h3 className='slider-title'>Taisiya Zabolotnaya</h3>
                    <p>
                        - Thanks to the implementation of the process
                        approach, I achieved an increase in productivity
                        by 22%, quality by 37%. The result: meeting
                        the needs of 3 times more customers.
                    </p>
                    <p>
                        - Conducted competitive intelligence, which
                        helped to reduce financial and material losses
                        by 17%, increase the company's profit by 35%
                        and take a leading position among competitors.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slider-content'>
                <img src={Roman} alt='Roman' className='slider-img'/>
                <div className='slider-subtitle'>
                    <h3 className='slider-title'>Roman Leshchenko</h3>
                    <p>
                        - Developed and implemented a system of
                        motivation, as a result of which the
                        loyalty of employees increased and efficiency
                        increased, which confirms the fact of an
                        increase in profits by 30%.
                    </p>
                    <p>
                        - Trained 30 sales managers, 10 of whom
                        have already become effective department heads.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slider-content'>
                <img src={Lera} alt='Lera' className='slider-img'/>
                <div className='slider-subtitle'>
                    <h3 className='slider-title'>Lera Jonson</h3>
                    <p>
                        - Daily identified the needs of clients by
                        negotiating by phone and in person with the
                        first persons of small and medium-sized
                        businesses. Made more than 70 calls per
                        day, more than 3 personal meetings per week.
                    </p>
                    <p>
                        - Issued 15 invoices per month, brought 95%
                        to payment, formed more than 450 orders per year.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slider-content'>
                <img src={Tony} alt='Tony' className='slider-img'/>
                <div className='slider-subtitle'>
                    <h3 className='slider-title'>Tony Stark</h3>
                    <p>
                        - Implemented a system of remuneration and
                        motivation of employees, due to which subsequent
                        projects were implemented ahead of the plan by 10-15%.
                    </p>
                    <p>
                        - Managing a team of over 1000 people.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slider-content'>
                <img src={Sara} alt='Sara' className='slider-img'/>
                <div className='slider-subtitle'>
                    <h3 className='slider-title'>Sara Park</h3>
                    <p>
                        - Elimination of shortage of stocks of materials
                        by building an effective procurement planning system.
                    </p>
                    <p>
                        - Automation of ordering processes and implementation
                        of new functionality in software together with IT.
                    </p>
                    <p>
                        - Ensuring the best deal conditions with suppliers:
                        80% of contracts are transferred to deferred payment.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};