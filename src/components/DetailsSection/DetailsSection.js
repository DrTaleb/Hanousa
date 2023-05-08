export default function DetailsSection() {


    return (
        <div className="container-fluid container-lg mt-4 details-container p-0">
            <div className="header-services mb-4">
                <h4>خدمات دیگر شرکت ما</h4>
                <em>
                    گروه هانوسا با تعهد بالا پاسخگوی درخواست های شماست
                </em>
                <div className="line-border mt-4">
                    <span></span>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 col-lg-4 mt-5">
                    <ul
                        className="nav nav-tabs justify-content-around"
                        id="myTab"
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#home-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="home-tab-pane"
                                aria-selected="true"
                            >
                                دیجیتال مارکتینگ
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profile-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="profile-tab-pane"
                                aria-selected="false"
                            >
                                سئو
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="contact-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#contact-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="contact-tab-pane"
                                aria-selected="false"
                            >
                                پخش تراکت
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade show active details-tabs"
                            id="home-tab-pane"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                            tabIndex="0"
                        >
                            تیم ما در زمینه دیجیتال مارکتینگ، طراحی وب و بازاریابی آفلاین فعالیت دارد. با استفاده از
                            تجربه و دانش فنی، ما قادر به ارائه راهکارهایی شخصی‌سازی شده و با کیفیت بالا برای شما هستیم.
                            با همکاری ما، می‌توانید به اهداف تجاری خود نزدیک شوید.
                        </div>
                        <div
                            className="tab-pane fade details-tabs"
                            id="profile-tab-pane"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                            tabIndex="0"
                        >
                            هر روز، میلیاردها نفر از سراسر جهان به دنبال اطلاعات و خدمات مختلف در اینترنت جستجو می‌کنند.
                            برای رسیدن به این جمعیت بزرگ، وب سایت شما نیاز به محتوایی با کیفیت و حرفه‌ای دارد که مخاطبان
                            را جذب کند. در این راستا، تولید محتوای مناسب و بهینه شده برای سئو، از اهمیت بالایی برخوردار
                            است.

                        </div>
                        <div
                            className="tab-pane fade details-tabs"
                            id="contact-tab-pane"
                            role="tabpanel"
                            aria-labelledby="contact-tab"
                            tabIndex="0"
                        >
                            هرچند دنیا به سمت عصر دیجیتال بسیار پیشگام می باشد اما این نکته نیز حائز اهمیت می باشد که
                            روش سنتی تبلیغات هنوز در ایران پابر جاست و هنوز بازار هدف و مشتری خود را دارد
                            مجموعه هانوسا با در نظر گرفتن تمام موارد تبلیغاتی تیمی متشکل از بازاریابان حرفه ای و پخش
                            کنندگان در عرصه تراکت را نیز به کار گرفته تا بتوانند برای شغل شما بیشترین بازخورد را به عمل
                            بیاورد
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-5 text-center">
                    <div className="rocket-wrapper">
                        <svg
                            className="svg-rocket"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                            />
                        </svg>
                    </div>
                    <h4 className="details-header">با ما تماس بگیرید</h4>
                    <p className="details-content">
                        در صورت داشتن هر گونه ابهام یا درخواست برای همکاری با ورود به بخش تماس با ما با ارتباط برقرار کنید.
                    </p>
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                    <img
                        className="iphone-img rounded"
                        src="/img/Group 6_1_11zon.webp"
                        alt="phone"
                    />
                </div>
            </div>
        </div>
    )
}