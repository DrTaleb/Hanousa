
export default function CompanyServices() {


    return (
        <section className="company-services">
            <div className="header-services">
                <h4>در خدمت شما <span>24/7</span></h4>
                <em>
                    همه چیزهایی را که برای راه‌اندازی وب‌سایت جدید خود در کوتاه‌ترین زمان
                    نیاز دارید، دارد
                </em>
                <div className="line-border mt-4">
                    <span></span>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-6 img-container-mac">
                        <img className="mac-img" src="/img/flex-mac-right.jpg" alt="mac"/>
                    </div>
                    <div
                        className="col-12 mt-4 mt-md-0 col-md-4 d-flex flex-column offset-0 offset-md-1 navtabs-container"
                    >
                        <ul
                            className="nav nav-tabs justify-content-between"
                            id="myTab"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#panel1"
                                    type="button"
                                    role="tab"
                                    aria-controls="panel1"
                                    aria-selected="true"
                                >
                                    اول
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#panel2"
                                    type="button"
                                    role="tab"
                                    aria-controls="panel2"
                                    aria-selected="false"
                                >
                                    دوم
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#panel3"
                                    type="button"
                                    role="tab"
                                    aria-controls="panel3"
                                    aria-selected="false"
                                >
                                    سوم
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content pt-3" id="myTabContent">
                            <div
                                className="tab-pane fade show active service-tab-pane"
                                id="panel1"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                            >
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                            </div>
                            <div
                                className="tab-pane fade service-tab-pane"
                                id="panel2"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                            >
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                            </div>
                            <div
                                className="tab-pane fade service-tab-pane"
                                id="panel3"
                                role="tabpanel"
                                aria-labelledby="contact-tab"
                            >
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}