import {useContext, useEffect, useRef, useState} from "react";
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import AuthContext from "@/contexts/authContext";
import {toast} from "react-toastify";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useRouter} from "next/router";

export default function Login() {
    const router = useRouter()
    const containerRef = useRef()
    const signinFormRef = useRef()
    const loginFormRef = useRef()

    // mobile form input ---------------------------------------------
    const [mobile, setMobile] = useState("")
    const [mobileError, setMobileError] = useState(true)
    const {sendMobile} = useContext(AuthContext)
    const {signup , signin} = useContext(AuthContext)
    const mobileHandler = (event) => {
        setMobile(event.target.value)
    }
    useEffect(() => {
        mobile.length === 11 && mobile[0] == 0 && mobile[1] == 9 ? setMobileError(false) : setMobileError(true)
    }, [mobile])
    const mobileSubmitHandler = async (event) => {
        await event.preventDefault()
        const data = await sendMobile(mobile)
        if (data.message === "code send!") {
            if (!data.user) {
                toast.success("کد ارسال شد")
                signinFormRef.current.classList.remove("d-none")
                containerRef.current.classList.add("right-panel-active")
            }
        } else if (data.user) {
            toast.warning("پسورد خود را وارد کنید")
            loginFormRef.current.classList.remove("d-none")
            containerRef.current.classList.add("right-panel-active")
        }
    }
    // end mobile form input ---------------------------------------------
    // signup form handler -----------------------------------------------

    const [showPassword, setShowPassword] = useState(false);
    const [showSecondPassword, setShowSecondPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowSecondPassword = () => setShowSecondPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownSecondPassword = (event) => {
        event.preventDefault();
    };

    const [otp, setOtp] = useState("")
    const [otpError, setOtpError] = useState(true)
    useEffect(() => {
        otp.length === 4 ? setOtpError(false) : setOtpError(true)
    }, [otp])
    const otpHandler = (event) => {
        setOtp(event.target.value)
    }

    const [pass1, setPass1] = useState("")
    const [pass1Error, setPass1Error] = useState(true)
    useEffect(() => {
        pass1.length >= 8 ? setPass1Error(false) : setPass1Error(true)
    }, [pass1])
    const pass1Handler = (event) => {
        setPass1(event.target.value)
    }

    const [pass2, setPass2] = useState("")
    const [pass2Error, setPass2Error] = useState(true)
    useEffect(() => {
        pass2.length >= 8 ? setPass2Error(false) : setPass2Error(true)
    }, [pass2])
    const pass2Handler = (event) => {
        setPass2(event.target.value)
    }

    const signupSubmitHandler = async () => {
        const data = await signup(mobile, otp, pass1, pass2)
        if (data.message === "code is invalid") {
            toast.error("کد وارد شده اشتباه است")
            setOtpError(true)
        } else if (data.token) {
            toast.success("کاربر با موفقیت ثبت شد")
            router.push("/")
        } else if (data.message === "passwords not same") {
            toast.error("لطفا در وارد کردن پسوورد ها دقت کنید")
            setPass1Error(true)
            setPass2Error(true)
        }
    }
    const signinSubmitHandler = async () => {
        const data = await signin(mobile, pass1)
        if (data.message === "رمز عبور اشتباه است") {
            toast.error(data.massage)
            setOtpError(true)
        } else if (data.token) {
            toast.success("کاربر با موفقیت وارد شد")
            await router.push("/")
        }
    }

    const correctMobile = () => {
        signinFormRef.current.classList.add("d-none")
        loginFormRef.current.classList.add("d-none")
        containerRef.current.classList.remove("right-panel-active")
        setMobile("")
        setMobileError(true)
        setPass1("")
        setPass2("")
        setPass2Error(true)
        setPass2Error(true)
        setOtp("")
        setOtpError(true)
    }


    return (
        <div className="login-parent d-flex flex-row justify-content-center w-100 h-100 align-items-center ">
            <div className="login-modal-container my-5" id="container" ref={containerRef}>
                <div className="form-container sign-up-container">
                    <form className="login-modal-form login-form d-none" ref={loginFormRef}>
                        <h1 className="login-modal-h1">ورود به اکانت</h1>
                        <span className="login-modal-span mt-5">پسوورد خود را وارد کنید</span>
                        <FormControl sx={{m: 1, width: '100%'}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">پسوورد</InputLabel>
                            <OutlinedInput
                                type={showPassword ? 'text' : 'password'}
                                value={pass1}
                                onChange={(event) => pass1Handler(event)}
                                error={pass1Error}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <Button
                            variant={"contained"}
                            color={"error"}
                            className={"mt-2"}
                            disabled={pass1Error}
                            onClick={() => signinSubmitHandler()}
                        >
                            ورود
                        </Button>
                    </form>
                    <form className="login-modal-form signin-form d-none" ref={signinFormRef}>
                        <h1 className="login-modal-h1">ساخت اکانت</h1>
                        <span className="login-modal-span mt-3">کد پیامک شده را وارد کنید</span>
                        <TextField
                            value={otp}
                            onChange={(event) => otpHandler(event)}
                            className={"w-100 my-3"}
                            label="کد ارسال شده"
                            error={otpError}
                            type="number"
                        />
                        <span className="login-modal-span">پسوورد مورد نظر خود را انتخاب کنید</span>
                        <FormControl sx={{m: 1, width: '100%'}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">پسوورد</InputLabel>
                            <OutlinedInput
                                type={showPassword ? 'text' : 'password'}
                                value={pass1}
                                onChange={(event) => pass1Handler(event)}
                                error={pass1Error}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <FormControl sx={{m: 1, width: '100%'}} variant="outlined" className={"mt-2"}>
                            <InputLabel htmlFor="outlined-adornment-password">تکرار پسوورد</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showSecondPassword ? 'text' : 'password'}
                                value={pass2}
                                onChange={(event) => pass2Handler(event)}
                                error={pass2Error}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowSecondPassword}
                                            onMouseDown={handleMouseDownSecondPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <Button
                            variant={"contained"}
                            color={"error"}
                            className={"mt-2"}
                            disabled={pass1Error || otpError || pass2Error}
                            onClick={() => signupSubmitHandler()}
                        >
                            ثبت نام
                        </Button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form className="login-modal-form">
                        <h1>ورود</h1>
                        <span className="login-modal-span mt-3">شماره تلفن خود را وارد کنید</span>
                        <TextField
                            value={mobile}
                            onChange={(event) => mobileHandler(event)}
                            className={"w-100 my-3"}
                            label="شماره تلفن"
                            error={mobileError}
                            type="number"
                        />
                        <Button
                            variant={"contained"}
                            color={"error"}
                            className="login-modal-close-button"
                            id="signUp"
                            disabled={mobileError}
                            type={"submit"}
                            onClick={(event) => mobileSubmitHandler(event)}
                        >ورود
                        </Button>
                    </form>
                </div>
                <div className="login-modal-overlay-container">
                    <div className="login-modal-overlay">
                        <div className="login-modal-overlay-panel login-modal-overlay-left">
                            <h1 className={"text-white"}>مراحل ثبت نام</h1>
                            <p className="login-modal-p text-white">در صورتی که قبلا ثبت نام کردید با وارد کردن رمز وارد
                                میشوید و در صورتی که ثبت نام نکرده باشید وارد فرم ثبت نام می شوید</p>
                            <Button variant={"contained"} color={"warning"} onClick={correctMobile}>تصحیح شماره تلفن</Button>
                        </div>
                        <div className="login-modal-overlay-panel login-modal-overlay-right">
                            <h5 className={"text-white"}>ورود یا ثبت نام ...</h5>
                            <p className={"text-white mt-3 small"}>شماره تلفن خود را وارد کنید وارد مراحل ورود یا ثبت
                                نام شوید</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}