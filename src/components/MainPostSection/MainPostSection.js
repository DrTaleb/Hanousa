import bg from "./background/251-800x640-grayscale.jpg"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Button} from "@mui/material";
import Link from "next/link";
export default function MainPostSection({data}) {
    return (
        <section className="parallax mt-5"
                 style={{
                     background: `url(${bg.src})`,
                     backgroundAttachment: "fixed",
                     backgroundRepeat: "no-repeat",
                     backgroundSize: "cover"
                 }}>
            <div className="overlay">
                <div className="text-content">
                    <h1><span> اخرین </span>مقاله های ما</h1>
                </div>
                <div className="container mt-5 mb-3">
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
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                            },
                            991: {
                                slidesPerView: 3,
                            },
                        }}
                        spaceBetween={60}
                        navigation={true}
                        modules={[Navigation , Autoplay]}
                        className="mySwiper w-100"
                    >
                        {data.map((item , index) =>
                            <SwiperSlide key={index}>
                            <div className="card">
                                <Link href={`post/${item.id}`}>
                                    <img
                                        src={item.image_url}
                                        className="card-img-top my-card-image"
                                        alt={item.title}
                                    />
                                </Link>
                                <div
                                    className="card-body d-flex justify-content-between flex-column"
                                >
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">
                                        {item.sub_title}
                                    </p>
                                    <span>

                                    </span>
                                    <Link href={`/post/${item.id}`} className={"text-decoration-none"}>
                                        <Button variant={"outlined"} color={"error"}>ادامه پست</Button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>)
                        }

                    </Swiper>
                </div>
                <div className="cta-btn pb-5">
                    <Link href={"/posts/1"}>
                        <Button variant={"contained"} color={"error"} className="col-6 col-md-4 col-lg-3 col-xl-2 mt-4">بیشتر</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}