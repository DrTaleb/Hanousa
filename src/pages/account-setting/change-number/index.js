import {Col} from "react-bootstrap";
import {Alert, Button, TextField} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import authContext from "@/contexts/authContext";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

export default function ChangeNumber() {
    const router = useRouter()
    const {userData, setUserData} = useContext(authContext)
    const [mobile, setMobile] = useState("")
    const [mobileError, setMobileError] = useState(false)
    const [code, setCode] = useState("")
    const [codeError, setCodeError] = useState(true)
    const [isCodeSend, setIsCodeSend] = useState(false)

    const mobileHandler = (event) => {
        setMobile(event.target.value)
    }
    useEffect(() => {
        if (userData.mobile) {
            setMobile(userData.mobile)
        }
    }, [userData])
    useEffect(() => {
        mobile.length === 11 && mobile[0] == 0 && mobile[1] == 9 ? setMobileError(false) : setMobileError(true)

    }, [mobile])
    const codeHandler = (event) => {
        setCode(event.target.value)
    }
    useEffect(() => {
        if (code) {
            code.length === 4 ? setCodeError(false) : setCodeError(true)
        }
    }, [code])

    const sendUserMobile = async () => {
        const dataRes = await fetch(`${process.env.LOCAL_URL}/api/auth/editUserInfo/${userData.user_id}`, {
            method: "PUT",
            body: JSON.stringify({
                mobile,
            })
        })
        return dataRes.json()
    }
    const submitHandler = async (event) => {
        event.preventDefault()
        if (mobile !== userData.mobile) {
            const dataSend = await sendUserMobile();
            if (dataSend.code) {
                console.log(dataSend.code)
                toast.success("کد ارسال شد")
                setIsCodeSend(true)
            }
        }  else toast.error("لطفا موبایل خود را تغییر دهید")
    }
    const sendCode = async () => {
        if (!codeError){
            const dataRes = await fetch(`http://localhost:3000/api/auth/editUserInfo/${userData.user_id}`, {
                method: "POST",
                body: JSON.stringify({
                    code,
                    mobile
                })
            })
            return dataRes.json()
        }else toast.error("لطفا در وارد کردن کد دقت کنید")
    }

    const codeSubmitHandler = async (event) => {
        event.preventDefault()
        const dataSend = await sendCode();
        if (dataSend.message === "user changed"){
            await toast.success("شماره شما با موفقیت تغییر کرد به صفحه اصلی هدایت می شوید")
            await router.push("/")
        }else toast.error("مشکلی در ثبت شماره شما پیش آمده")
    }

    return (
        <div className={"container h-70vh"}>
            <div className={"d-flex flex-row justify-content-center align-items-center h-100"}>
                <Col xs={12} sm={11} md={7} lg={5} className={"shadow-lg p-3 rounded-3 d-flex flex-column gap-3"}>
                    <h4 className={"text-start mt-3"}>فرم تنظیمات اکانت </h4>
                    <Alert severity="warning">لطفا شماره موبایل جدید خود را وارد کنید</Alert>
                    <TextField
                        value={mobile}
                        onChange={(event) => mobileHandler(event)}
                        className={"w-100"}
                        label="شماره"
                        error={mobileError}
                        disabled={isCodeSend}
                        type="number"
                    />
                    {
                        isCodeSend &&
                        <TextField
                            value={code}
                            onChange={(event) => codeHandler(event)}
                            className={"w-100"}
                            label="کد"
                            error={codeError}
                            type="number"
                        />
                    }
                    <div className={"d-flex flex-row gap-1 justify-content-end mt-3"}>
                        {
                            !isCodeSend &&
                            <Button
                                variant={"contained"}
                                color={"success"}
                                className={"align-self-end"}
                                onClick={submitHandler}
                            >ارسال کد
                            </Button>
                        }
                        {
                            isCodeSend &&
                            <Button
                                variant={"contained"}
                                color={"success"}
                                className={"align-self-end"}
                                onClick={codeSubmitHandler}
                            >ثبت شماره
                            </Button>
                        }
                    </div>
                </Col>
            </div>
        </div>
    )
}