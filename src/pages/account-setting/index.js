import {Col} from "react-bootstrap";
import {Alert, Button, TextField} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import authContext from "@/contexts/authContext";
import {toast} from "react-toastify";
import Link from "next/link";

export default function AccountSetting() {
    const {userData , getUserData} = useContext(authContext)
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState(true)
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(true)

    const nameHandler = (event) => {
        setName(event.target.value)
    }
    useEffect(() => {
        if (userData.name){
            setEmail(userData.email)
            setName(userData.name)
        }
    }, [userData])
    useEffect(() => {
        if (name) {
            name.length <= 3 ? setNameError(true) : setNameError(false)
        }
    }, [name])
    const emailHandler = (event) => {
        setEmail(event.target.value)
    }
    useEffect(() => {
        if (email) {
            email.length <= 3 ? setEmailError(true) : setEmailError(false)
        }
    }, [email])

    const validateEmail = (email) => {
        return !!String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    };
    const sendUserData = async () => {
        const dataRes = await fetch(`${process.env.LOCAL_URL}/api/auth/editUserInfo/${userData.user_id}`, {
            method: "PUT",
            body: JSON.stringify({
                name,
                email
            })
        })
        return dataRes.json()
    }
    const submitHandler = async (event) => {
        event.preventDefault()
        if (validateEmail(email)) {
            const dataSend = await sendUserData();
            if(dataSend.message === "user changed"){
                toast.success("اطلاعات با موفقیت ثبت شد")
                await getUserData()
            }
        } else if (!validateEmail(email)) {
            toast.error("لطفا در وارد کردن ایمیل خود دقت کنید")
        }
    }


    return (
        <div className={"container h-70vh"}>
            <div className={"d-flex flex-row justify-content-center align-items-center h-100"}>
                <Col xs={12} sm={11} md={7} lg={5} className={"shadow-lg p-3 rounded-3 d-flex flex-column gap-3"}>
                    <h4 className={"text-start mt-3"}>فرم تنظیمات اکانت </h4>
                    {userData.name === null ? <Alert severity="warning">لطفا نام و نام خانوادگی خود را وارد کنید</Alert>
                        :
                        null
                    }
                    <TextField
                        value={name}
                        onChange={(event) => nameHandler(event)}
                        className={"w-100"}
                        label="نام و نام خانوادگی"
                        error={nameError}
                        type="text"
                    />
                    <TextField
                        value={email}
                        onChange={(event) => emailHandler(event)}
                        className={"w-100"}
                        label="ایمیل"
                        error={emailError}
                        type="email"
                    />
                    <div className={"d-flex flex-row gap-1 justify-content-end mt-3"}>
                        <Link href={"/account-setting/change-number"}>
                            <Button variant={"contained"} color={"secondary"} className={"align-self-end"}>تغییر شماره
                                موبایل</Button>
                        </Link>
                        <Link href={"account-setting/change-password"}>
                            <Button variant={"contained"} color={"warning"} className={"align-self-end"}>تغییر رمز
                                عبور
                            </Button>
                        </Link>
                        <Button
                            variant={"contained"}
                            color={"success"}
                            className={"align-self-end"}
                            onClick={submitHandler}
                            disabled={nameError || emailError}
                        >ثبت اطلاعات
                        </Button>
                    </div>
                </Col>
            </div>
        </div>
    )
}