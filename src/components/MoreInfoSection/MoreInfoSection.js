import bg from "./background/bckg-4.jpg"
export default function MoreInfoSection(){


    return(
        <section className="info"
                 style={{
                     background: `url(${bg.src})`,
                     backgroundAttachment: "fixed",
                     backgroundRepeat: "no-repeat",
                     backgroundSize: "cover"
                 }}>
            <div className="overlay-info">
                <h3>متن آزمایشی</h3>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                    از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                    سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                    متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
            </div>
        </section>
    )
}