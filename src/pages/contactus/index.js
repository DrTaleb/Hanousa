import bg from "@/pages/aboutus/bg/page-banner.jpg";
import {useContext, useEffect, useState} from "react";
import AuthContext from "@/contexts/authContext";
import swal from "sweetalert2";


export default function Contactus() {
    const {userData} = useContext(AuthContext)
    const [name , setName] = useState("")
    const [nameError , setNameError] = useState(true)
    const [email , setEmail] = useState("")
    const [mobile , setMobile] = useState("")
    const [mobileError , setMobileError] = useState(true)
    const [text , setText] = useState("")

    const validateEmail = (email) => {
        return !!String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    };

    useEffect(()=>{
        userData.name ? setName(userData.name) : setName("")
        userData.mobile ? setMobile(userData.mobile) : setMobile("")
        userData.email ? setEmail(userData.email) : setEmail("")
    },[userData])
    useEffect(()=>{
        name.length ? setNameError(false) : setNameError(true)
    },[name])
    useEffect(()=>{
        mobile.length === 11 && mobile[0] == 0 && mobile[1] == 9 ? setMobileError(false) : setMobileError(true)
    },[mobile])
    const nameHandler = (event)=>{
        setName(event.target.value)
    }
    const emailHandler = (event)=>{
        setEmail(event.target.value)
    }
    const mobileHandler = (event)=>{
        setMobile(event.target.value)
    }
    const textHandler = (event)=>{
        setText(event.target.value)
    }
    const submitHandler = async (event)=>{
        event.preventDefault()
        if (validateEmail(email) && !nameError && !mobileError){
           try {
               const dataRes = await fetch(`${process.env.SERVER_URL}/contactus/`,{
                   method : "POST",
                   headers : {
                       'Content-Type': 'application/json; charset=UTF-8',
                   },
                   body : JSON.stringify({
                       name,
                       mobile,
                       email,
                       comment : text
                   })
               })
               const data = await dataRes.json()
               if (data.message === "comment saved"){
                   swal.fire({
                       icon : "success",
                       title : "پیام شما با موفقیت ثبت شد",
                       text : "همکاران ما در اسرع وفت پاسخ شما را در قالب ایمیل ارسال خواهند کرد"
                   })
                   setText("")

               }
           }catch {
               swal.fire({
                   icon : "error",
                   text : "دوباره تلاش کنید"
               })
           }
        }else swal.fire({
            icon : "error",
            text : "در وارد کردن اطلاعات دفت کنید"
        })

    }

    return (
        <>

            <section className="headerAboutUs"
                     style={{
                         backgroundImage: `url(${bg.src})`,
                         backgroundPosition: "center",
                         backgroundSize: "cover"
                     }}>
                <div className="headerContainer">
                    <div className="headerContent">
                        <h1>تماس با ما</h1>
                        <h2>با ما همراه باشید</h2>
                    </div>
                </div>
            </section>

            <section id="contactUs-info">
                <div className="contactUs-container">
                    <div className="container-fluid">
                        <div className="row">
                            <div data-aos="fade-up" data-aos-delay="300"
                                 className="col-sm-12 col-lg-6 col-xl-4 colItems">
                                <div className="contact-info bgInfo">
                                    <div className="info-icon">
                                        <img src="/img/icon-5-1.png" alt=""/>
                                    </div>
                                    <div className="info-content">
                                        <h3>تلفن:</h3>
                                        <span></span>
                                        <p>0513-256-5887</p>
                                        <p>0912-345-6789</p>
                                    </div>
                                </div>
                                <div className="contact-detail bgInfo">
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک
                                        است
                                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="150"
                                 className="col-sm-12 col-lg-6 col-xl-4 colItems">
                                <div className="contact-info bgWarning">
                                    <div className="info-icon">
                                        <img src="/img/icon-6-1.png" alt=""/>
                                    </div>
                                    <div className="info-content">
                                        <h3>پست الکترونیکی:</h3>
                                        <span className="span2"></span>
                                        <p>info@gmail.com</p>
                                        <p>info@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact-detail bgWarning">
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک
                                        است
                                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="100"
                                 className="col-sm-12 col-lg-6 col-xl-4 colItems">
                                <div className="contact-info bgdodi">
                                    <div className="info-icon">
                                        <img src="/img/icon-7.png" alt=""/>
                                    </div>
                                    <div className="info-content">
                                        <h3>آدرس:</h3>
                                        <span className="span3"></span>
                                        <p>بلوار نمایشگاه،پژوهش9</p>
                                        <p>پلاک 13</p>
                                    </div>
                                </div>
                                <div className="contact-detail bgdodi">
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک
                                        است
                                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contactUS-form">
                <div className="formContainer">
                    <div className="formTitle">
                        <h2>اگر به کمک نیاز دارید!
                            اکنون می توانید تماس بگیرید
                        </h2>
                    </div>
                    <form className="form" action="">
                        <div className="form-1 mt-3">
                            <input placeholder="نام *" value={name} type="text" onInput={nameHandler}/>
                            <input dir={"ltr"} value={email} placeholder="ایمیل *" type="email" onInput={emailHandler}/>
                            <input placeholder="تلفن *" value={mobile} type="number" onInput={mobileHandler}/>
                        </div>
                        <textarea
                            className="textArea"
                            name="textArea"
                            id="text-area"
                            value={text}
                            cols="100%"
                            rows="10"
                            placeholder="متن خود را وارد کنید"
                            onInput={textHandler}
                        ></textarea>
                        <button onClick={submitHandler} className={"mt-5 submitBtn"}>ارسال</button>
                    </form>
                </div>
            </section>
        </>
    )
}