import bg from "./background/background-white-85.svg"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";

export default function PartnersSection({data}) {


    return (
        <div className="partner-section mt-5"
             style={{
                 background: `#ccc`,
                 backgroundColor: "#d0bdbd"
             }}>
            <div className="text-center">
                <h4>همکاران ما</h4>
                <Swiper
                    autoplay={{
                        delay: 2000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false
                    }}
                    loop
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 5,
                        },
                    }}
                    spaceBetween={60}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper w-100 mt-5"
                >
                    {data.map(item =>
                        <SwiperSlide key={item.id}>
                            <img src={item.image_url} alt=""/>
                        </SwiperSlide>
                    )}

                </Swiper>
            </div>
        </div>
    )
}