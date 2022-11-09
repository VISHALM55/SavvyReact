import React from 'react'
import '../Styles/Customer.scss'
import 'swiper/scss'
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';


export default function Customer() {
    return (
        <>
            <div className='customer-container'>
                <div className='customer'>
                    <div className='customer-heading'>
                        <span>Hear from our customer</span>
                    </div>
                    <div className='customer-review'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            freeMode={true}
                            pagination={{
                              clickable: true,
                            }}
                            breakpoints={{
                              1300: {
                                slidesPerView: 3,
                              },
                              855: {
                                slidesPerView: 2,
                              },
                              350: {
                                slidesPerView: 1,
                              },
                            }}
                            modules={[Pagination]}
                            >
                            <SwiperSlide>
                                <div className='carouselBox'>
                                    <div className='review'>
                                        Savvy is so far the best app of it's kind. User friendly, practical, and truly useful. All your finance planning is catered at one single place and feedbacks provided are worked upon for continued improvement.
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='carouselBox'>

                                    <div className='review'>
                                        Savvy is so far the best app of it's kind. User friendly, practical, and truly useful. All your finance planning is catered at one single place and feedbacks provided are worked upon for continued improveme
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='carouselBox'>

                                    <div className='review'>
                                        Savvy is so far the best app of it's kind. User friendly, practical, and truly useful. All your finance planning is catered at one single place and feedbacks provided are worked upon for continued improveme
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='carouselBox'>

                                    <div className='review'>
                                        Savvy is so far the best app of it's kind. User friendly, practical, and truly useful. All your finance planning is catered at one single place and feedbacks provided are worked upon for continued improveme
                                    </div>

                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
