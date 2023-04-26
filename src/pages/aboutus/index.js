import bg from "./bg/page-banner.jpg"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Link from "next/link";
// import {Button} from "@mui/material";
// import {useEffect} from "react";
// import { gsap } from 'gsap';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function aboutus() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(()=>{
    //     gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
    //     gsap.set("#motionSVG", { scale: 0.4, autoAlpha: 1 });
    //     gsap.set("#tractor", {transformOrigin: "50% 50%"});
    //     let rotateTo = gsap.quickTo("#tractor", "rotation"),
    //         prevDirection = 0;
    //
    //     gsap.to("#motionSVG", {
    //         scrollTrigger: {
    //             trigger: "#motionPath",
    //             start: "top center",
    //             end: () => "+=" + document.querySelector("#motionPath").getBoundingClientRect().height,
    //             scrub: 0.5,
    //             markers: true,
    //             onUpdate: self => {
    //                 if (prevDirection !== self.direction) { // only run this when we're changing direction
    //                     rotateTo(self.direction === 1 ? 0 : -180);
    //                     prevDirection = self.direction;
    //                 }
    //             }
    //         },
    //         ease: pathEase("#motionPath"), // a custom ease that helps keep the tractor centered
    //         immediateRender: true,
    //         motionPath: {
    //             path: "#motionPath",
    //             align: "#motionPath",
    //             alignOrigin: [0.5, 0.5],
    //             autoRotate: 90,
    //         }
    //     });
    //
    // },[])

    return (
        <main id="aboutUs">
            <section className="headerAboutUs">
                <div className="headerContainer"
                     style={{
                         backgroundImage: `url(${bg.src})`,
                         backgroundPosition: "center",
                         backgroundSize: "cover"
                     }}>
                    <div className="headerContent">
                        <h1>درباره ما </h1>
                        <h2>با ما همراه باشید</h2>
                    </div>
                </div>
            </section>
            <section id="ourCompany">
                <div className="companyContainer">
                    <div className="companyBanner" data-aos="fade-left" data-aos-offset="300"
                         data-aos-easing="ease-in-sine">
                        <img src="/img/aboutUs/about-1.jpg" alt=""/>
                        <div className="onIcon">
                            <img src="/img/aboutUs/icon-4.png" alt=""/>
                        </div>
                    </div>
                    <div className="companyContent" data-aos="fade-right" data-aos-offset="300"
                         data-aos-easing="ease-in-sine">
                        <div className="contentTitle">
                            <p>درباره <span>شرکت ما</span></p>
                            <h1>کسب و کار خود را به وسیله ما به بهترین شکل بهبود ببخشید.</h1>
                        </div>
                        <div className="contentmid">
                            <img src="/img/aboutUs/icon-1-2.png" alt=""/>
                            <div className="midItems">
                                <p className="p-t">+3000 <span>کاربر فعال</span></p>
                                <p className="p-b">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از <br/> صنعت چاپ و
                                    با استفاده
                                    از طراحان گرافیک
                                    است
                                </p>
                            </div>
                        </div>
                        <div className="contentBody">
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </p>

                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="consor">
                <div className="consorContainer">
                    <h1 className="consorTitle">
                        شما از طرف مشاوران ما<br/> به صورت تخصصی <span>برای رسیدن به هدف خود</span> <br/> راهنمایی
                        خواهید
                        شد
                    </h1>
                    <div className="videoConsor" data-aos="fade-up" data-aos-duration="2000">
                        <img src="/img/aboutUs/video-2.jpg" alt=""/>
                        <a className="playVideo" href="#">
                            <img src="/img/aboutUs/video-icon-light.png" alt=""/>
                        </a>
                    </div>
                </div>
            </section>
            <section id="consultant">
                <div className="consContainer">
                    <div className="consContent">
                        <div className="consTitle">
                            <h5 className="subTitle">
                                <span>مشاوران</span>
                                ما
                            </h5>
                            <h2 className="mainTitle">بهترین مشاوره کاری را از ما بخواهید</h2>
                        </div>
                    </div>
                    <div className="consSlider" data-aos="fade-up" data-aos-duration="2000">
                        <div className="swiper consSwiper">
                            <div className="swiper-wrapper">
                                <div className="consSwiper-items swiper-slide">
                                    <div className="swiperItems">
                                        <img src="/img/aboutUs/consultant-1.jpg" alt=""/>
                                        <div className="backGround-hover">
                                        </div>
                                        <div className="detail">
                                            <a href="">اشکان فلانی</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="consSwiper-items swiper-slide">
                                    <div className="swiperItems">
                                        <img src="/img/aboutUs/consultant-2.jpg" alt=""/>
                                        <div className="backGround-hover">
                                        </div>
                                        <div className="detail">
                                            <a href="">اشکان فلانی</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="consSwiper-items swiper-slide">
                                    <div className="swiperItems">
                                        <img src="/img/aboutUs/consultant-3.jpg" alt=""/>
                                        <div className="backGround-hover">
                                        </div>
                                        <div className="detail">
                                            <a href="">اشکان فلانی</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="consSwiper-items swiper-slide">
                                    <div className="swiperItems">
                                        <img src="/img/aboutUs/consultant-1.jpg" alt=""/>
                                        <div className="backGround-hover">
                                        </div>
                                        <div className="detail">
                                            <a href="">اشکان فلانی</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="joinUs">
                            <a href="">به ما ملحق شوید </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="customer">
                <div className="customerConainer">
                    <div className="customerContent">
                        <div className="cusomerTitle">
                            <div className="subTitle">
                                <h5>
                                    <span>نظرات</span>
                                    کاربران
                                </h5>
                                <h2 className="mainTitle">نظرات برتر کاربران ما</h2>
                            </div>
                        </div>
                    </div>
                    <div className="customerSlider custSwiper w-100 px-5" data-aos="fade-up" data-aos-duration="2000">
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
                                    slidesPerView: 2,
                                },
                            }}
                            spaceBetween={60}
                            navigation={true}
                            modules={[Autoplay]}
                            className="mySwiper w-100"
                        >

                            <SwiperSlide>
                                <div className="cousttomerSlide">
                                    <div className="singleCustomer">
                                        <div className="customerAuthor">
                                            <img src="/img/aboutUs/author-1.jpg" alt=""/>
                                        </div>
                                        <div className="customerContent-slider">
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                                                که
                                                لازم است
                                            </p>
                                            <h2>اشکان فلانی</h2>
                                            <span>طراح</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cousttomerSlide">
                                    <div className="singleCustomer">
                                        <div className="customerAuthor">
                                            <img src="/img/aboutUs/author-1.jpg" alt=""/>
                                        </div>
                                        <div className="customerContent-slider">
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                                                که
                                                لازم است
                                            </p>
                                            <h2>اشکان فلانی</h2>
                                            <span>طراح</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cousttomerSlide">
                                    <div className="singleCustomer">
                                        <div className="customerAuthor">
                                            <img src="/img/aboutUs/author-1.jpg" alt=""/>
                                        </div>
                                        <div className="customerContent-slider">
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                                                که
                                                لازم است
                                            </p>
                                            <h2>اشکان فلانی</h2>
                                            <span>طراح</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cousttomerSlide">
                                    <div className="singleCustomer">
                                        <div className="customerAuthor">
                                            <img src="/img/aboutUs/author-1.jpg" alt=""/>
                                        </div>
                                        <div className="customerContent-slider">
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                                                که
                                                لازم است
                                            </p>
                                            <h2>اشکان فلانی</h2>
                                            <span>طراح</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                        </Swiper>
                        {/*<div className="customerSwiper swiper custSwiper">*/}
                        {/*    <div className="swiper-wrapper">*/}
                        {/*        */}
                        {/*        <div className="cousttomerSlide swiper-slide">*/}
                        {/*            <div className="singleCustomer">*/}
                        {/*                <div className="customerAuthor">*/}
                        {/*                    <img src="/img/aboutUs/author-1.jpg" alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <div className="customerContent-slider">*/}
                        {/*                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از*/}
                        {/*                        طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان*/}
                        {/*                        که*/}
                        {/*                        لازم است*/}
                        {/*                    </p>*/}
                        {/*                    <h2>اشکان فلانی</h2>*/}
                        {/*                    <span>طراح</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="cousttomerSlide swiper-slide">*/}
                        {/*            <div className="singleCustomer">*/}
                        {/*                <div className="customerAuthor">*/}
                        {/*                    <img src="/img/aboutUs/author-1.jpg" alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <div className="customerContent-slider">*/}
                        {/*                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از*/}
                        {/*                        طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان*/}
                        {/*                        که*/}
                        {/*                        لازم است*/}
                        {/*                    </p>*/}
                        {/*                    <h2>اشکان فلانی</h2>*/}
                        {/*                    <span>طراح</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="cousttomerSlide swiper-slide">*/}
                        {/*            <div className="singleCustomer">*/}
                        {/*                <div className="customerAuthor">*/}
                        {/*                    <img src="/img/aboutUs/author-1.jpg" alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <div className="customerContent-slider">*/}
                        {/*                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از*/}
                        {/*                        طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان*/}
                        {/*                        که*/}
                        {/*                        لازم است*/}
                        {/*                    </p>*/}
                        {/*                    <h2>اشکان فلانی</h2>*/}
                        {/*                    <span>طراح</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="cousttomerSlide swiper-slide">*/}
                        {/*            <div className="singleCustomer">*/}
                        {/*                <div className="customerAuthor">*/}
                        {/*                    <img src="/img/aboutUs/author-1.jpg" alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <div className="customerContent-slider">*/}
                        {/*                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از*/}
                        {/*                        طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان*/}
                        {/*                        که*/}
                        {/*                        لازم است*/}
                        {/*                    </p>*/}
                        {/*                    <h2>اشکان فلانی</h2>*/}
                        {/*                    <span>طراح</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="actionSlider">*/}
                        {/*        <div className="next-prev-slider">*/}
                        {/*            <div className="swiper-button-next"></div>*/}
                        {/*            <div className="swiper-button-prev"></div>*/}
                        {/*        </div>*/}
                        {/*        <div className="pagination">*/}
                        {/*            <div className="swiper-pagination"></div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
            <section id="contactUS">
                <div className="contactContainer">
                    <div className="contact-Content">
                        <div className="contactTitle">
                            <h1 className="mainTitle">برای رسیدن به هدفتان! با ما تماس بگیرید.</h1>
                        </div>
                        <div className="contactBtn">
                            <a href="">تماس با ما</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}