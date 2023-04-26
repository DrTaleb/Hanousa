import {Col} from "react-bootstrap";
import {
    Alert,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import authContext from "@/contexts/authContext";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import {Visibility, VisibilityOff} from "@mui/icons-material";

export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showSecondPassword, setShowSecondPassword] = useState(false);
    const handleClickShowSecondPassword = () => setShowSecondPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownSecondPassword = (event) => {
        event.preventDefault();
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const router = useRouter()
    const {userData} = useContext(authContext)
    const [pass1, setPass1] = useState("")
    const [pass1Error, setPass1Error] = useState(false)
    const [pass2, setPass2] = useState("")
    const [pass2Error, setPass2Error] = useState(true)


    const pass1Handler = (event) => {
        setPass1(event.target.value)
    }
    useEffect(() => {
        pass1.length >= 8 ? setPass1Error(false) : setPass1Error(true)
    }, [pass1])


    const pass2Handler = (event) => {
        setPass2(event.target.value)
    }
    useEffect(() => {
        pass2.length >= 8 ? setPass2Error(false) : setPass2Error(true)
    }, [pass2])


    const sendPass = async () => {
        const dataRes = await fetch(`${process.env.LOCAL_URL}/api/auth/changePass/${userData.user_id}`, {
            method: "PUT",
            body: JSON.stringify({
                password1 : pass1,
                password2 :pass2,
                mobile : userData.mobile
            })
        })
        return dataRes.json()
    }
    const submitHandler = async (event) => {
        event.preventDefault()
        if (!pass1Error && !pass2Error && pass2 === pass1) {
            const dataSend = await sendPass();
            if (dataSend.message === "password changed"){
                toast.success("پسوورد شما با موفقیت تغییر کرد")
                await router.push("/")
            }
        } else toast.error("لطفا در وارد کردن رمز ها دقت کنید")
    }

    return (
        <div className={"container h-70vh"}>
            <div className={"d-flex flex-row justify-content-center align-items-center h-100"}>
                <Col xs={12} sm={11} md={7} lg={5} className={"shadow-lg p-3 rounded-3 d-flex flex-column gap-3"}>
                    <h4 className={"text-start mt-3"}>فرم تنظیمات اکانت </h4>
                    <Alert severity="warning">لطفا پسوورد جدید خود را وارد کنید</Alert>
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
                    <div className={"d-flex flex-row gap-1 justify-content-end mt-3"}>
                        <Button
                            variant={"contained"}
                            color={"success"}
                            className={"align-self-end"}
                            onClick={submitHandler}
                        >ثبت رمز جدید
                        </Button>
                    </div>
                </Col>
            </div>
        </div>
    )
}