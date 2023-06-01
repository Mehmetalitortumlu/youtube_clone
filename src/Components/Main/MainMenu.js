import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';

function MainMenu() {
    const [slidesPerView, setSlidesPerView] = useState(8);

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.innerWidth < 578) {
    //             setSlidesPerView(1);
    //         } else if (window.innerWidth > 578 & window.innerWidth < 1000) {
    //             setSlidesPerView(3);
    //         } else if (window.innerWidth > 1100 & window.innerWidth < 1200) {
    //             setSlidesPerView(4);
    //         }
    //         else if (window.innerWidth > 1200) {
    //             setSlidesPerView(5);
    //         }
    //     };

    //     window.addEventListener('resize', handleResize);
    //     handleResize();

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 576) {
                setSlidesPerView(2)
            } else if (window.innerWidth > 576 & window.innerWidth < 768) {
                setSlidesPerView(3)
            } else if (window.innerWidth > 768 & window.innerWidth < 1200) {
                setSlidesPerView(4)
            } else if (window.innerWidth > 1200 & window.innerWidth < 1600) {
                setSlidesPerView(6)
            } else { setSlidesPerView(7) }
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
            handleResize()
        }
    }, [])


    return (
        <Swiper
            modules={[Navigation, Pagination]}
            scrollbar={{ draggable: true }}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            pagination={{ el: '.swiper-pagination' }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            }}
            className='swiper_container'
        >
            <SwiperSlide className='small p-0 m-0 slider-item'>Tümü</SwiperSlide>
            <SwiperSlide className='small p-0 m-0 slider-item'>Oyun</SwiperSlide>
            <SwiperSlide className='small p-0 m-0 slider-item'>Mix'ler</SwiperSlide>
            <SwiperSlide className='small p-0 m-0 slider-item'>Komedi gösterileri</SwiperSlide>
            <SwiperSlide className='small p-0 m-0 slider-item'>Müzik</SwiperSlide>
            <SwiperSlide className='small p-0 m-0 slider-item'>Animasyon</SwiperSlide>
            <SwiperSlide className='small p-0 m-0 slider-item'>Çizgi filmler</SwiperSlide>
            <SwiperSlide className='small p-0 m-0 slider-item'>Aksiyon-oyunları</SwiperSlide>
            <SwiperSlide className='small p-0 m-0 slider-item'>Yemek pişirme</SwiperSlide>
            <SwiperSlide className='small p-0 m-0 slider-item'>Son yüklenenler</SwiperSlide>
            <SwiperSlide className='small p-0 m-0 slider-item'>İzlenenler</SwiperSlide>
            <SwiperSlide className='small p-0 m-0 slider-item'>Yeni öneriler</SwiperSlide>
            ...
            <div className="slider-controller mt-5 pt-5">

                <div className="swiper-button-prev slider-arrow text-white">

                </div>

                <div className="swiper-button-next slider-arrow text-white">

                </div>

            </div>
            <div className="swiper-pagination d-none"></div>
        </Swiper>
    )
}

export default MainMenu