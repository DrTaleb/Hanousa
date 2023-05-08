export default function CompanyServices() {


    return (
        <section className="company-services">
            <div className="header-services">
                <h4> <span>۱۰۰٪</span> آماده برای طراحی تا پشتیبانی سایت شما</h4>
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
                        <img className="mac-img" src="/img/photo_2023-05-06+15.54.54.webp" alt="mac"/>
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
                                    قدم اول
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
                                    قدم دوم
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
                                    قدم سوم
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content mt-3 pt-3" id="myTabContent">
                            <div
                                className="tab-pane fade show active service-tab-pane"
                                id="panel1"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                            >
                                چه چیزی میخواهید؟ <br/>
                                ابتدا تمام معیار های شما در طراحی را از شما میگیریم و سپس با تیمی پر قدرت فعالیت شما را
                                بررسی میکنیم و با استفاده از متد های روز دنیا شما را به سمت بهترین انتخاب هدایت میکنیم
                            </div>
                            <div
                                className="tab-pane fade service-tab-pane"
                                id="panel2"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                            >
                                تمامی مراحل آرام آرام در کوتاه ترین زمان ممکن شروع به ساخت میشود تا به شما عزیزان
                                بتوانیم بهترین خدمات را ارائه دهیم تا بتوانید پیشرفت خود، کارتان را روز به روز ببینید
                            </div>
                            <div
                                className="tab-pane fade service-tab-pane"
                                id="panel3"
                                role="tabpanel"
                                aria-labelledby="contact-tab"
                            >
                                پس از پایان کار نیز تیم ما همراه شماست تا در صورت هر گونه اتفاق بتواند بهترین راهکار ها
                                را به شما برای پیشرفت بهترتان بدهد کافیست با ما هم مسیر شوید و از پیشرفت لذت ببرید
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}