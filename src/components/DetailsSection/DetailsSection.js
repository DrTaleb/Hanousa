export default function DetailsSection(){


    return(
        <div className="container-fluid container-lg mt-4 details-container">
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
                                Home
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
                                Profile
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
                                Contact
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
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
                            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
                            زیادی در شصت و سه درصد گذشته حال و آینده شناخته
                        </div>
                        <div
                            className="tab-pane fade details-tabs"
                            id="profile-tab-pane"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                            tabIndex="0"
                        >
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
                            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
                            زیادی در شصت و سه درصد گذشته حال و آینده شناخته
                        </div>
                        <div
                            className="tab-pane fade details-tabs"
                            id="contact-tab-pane"
                            role="tabpanel"
                            aria-labelledby="contact-tab"
                            tabIndex="0"
                        >
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
                            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
                            زیادی در شصت و سه درصد گذشته حال و آینده شناخته
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
                    <h4 className="details-header">شرکت فلکس</h4>
                    <p className="details-content">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                        استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
                    </p>
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                    <img
                        className="iphone-img rounded"
                        src="/img/flex-iPhone6-hand-FrontView-2.png"
                        alt="phone"
                    />
                </div>
            </div>
        </div>
    )
}