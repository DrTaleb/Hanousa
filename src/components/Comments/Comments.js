import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Typewriter from 'typewriter-effect/dist/core';
import {useEffect} from "react";

export default function Comments() {

    useEffect(() => {
        new Typewriter('#typewriter', {
            strings: ['نظرات شما عزیزان'],
            autoStart: true,
            loop: true
        });
    }, [])
    return (
        <section className="comments">
            <div className="comments-header">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"
                    />
                </svg>
                <div id="typewriter" className={"text-white fw-bolder"}></div>
                <div className="swipper-wrapper">
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper">
                            <Swiper
                                autoplay={{
                                    delay: 10000,
                                    pauseOnMouseEnter: true,
                                    disableOnInteraction: false
                                }}
                                loop
                                breakpoints={{
                                    // when window width is >= 640px
                                    640: {
                                        slidesPerView: 1,
                                    },
                                    // when window width is >= 768px
                                    768: {
                                        slidesPerView: 1,
                                    },
                                    991: {
                                        slidesPerView: 1,
                                    },
                                }}
                                spaceBetween={60}
                                navigation={true}
                                modules={[Navigation, Autoplay]}
                                className="mySwiper w-100"
                            >
                                <SwiperSlide>
                                    <div className=" d-flex flex-column align-items-center">
                                        <p className={"col-xl-7 col-md-8 col-11"}>
                                            طبق تجربه بنده در طی همکاری با تیم هانوسا٬ شما به مشکل تایم و عدم پاسخدهی
                                            برنمی خورید و با یک تیم جوان و پر انرژی طرف هستید
                                        </p>
                                        <h6 className={"mt-4"}>علی ضیا</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" d-flex flex-column align-items-center">
                                        <p className={"col-lg-7 col-md-8 col-11"}>
                                            بنده در زمینه پخش تراکت با این تیم همکاری کردم و میتونم بگم با تعهد و پیگیری
                                            بالا میتونن یک کار تبلیغاتی بی نقص رو به شا عرضه کنن
                                        </p>
                                        <h6 className={"mt-4"}>محمد مهدی صاحبی</h6>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}