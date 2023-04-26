import {Col} from "react-bootstrap";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {useEffect, useState} from "react";
import {FileUploader} from "react-drag-drop-files";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {Breadcrumbs, Button} from "@mui/material";
import Container from "react-bootstrap/Container";
import Swal from "sweetalert2";
import {useRouter} from "next/router";

export default function editSlider({data}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href={"/admin/sliders"}>
            اسلایدر ها
        </Link>,
        <Typography key="3" color="text.primary" className={"color-my-purple"}>
            ویرایش اسلایدر
        </Typography>,
    ];


    const statusList = [
        {
            value: 1,
            label: "فعال"
        },
        {
            value: 0,
            label: "غیر فعال"
        }
    ]
    const linkTypeList = [
        {
            value: "1",
            label: "بیرونی"
        },
        {
            value: "2",
            label: "درونی"
        }
    ]
    // form input -----------------------------------
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState(data.name)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [nameError, setNameError] = useState(!data.name.length)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [link, setLink] = useState(data.link)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [linkError, setLinkError] = useState(!data.link.length)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [status, setStatus] = useState(data.status)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [statusError, setStatusError] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [linkType, setLinkType] = useState(data.link_type)
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const nameHandler = (event) => {
        setName(event.target.value)
        event.target.value.length ? setNameError(false) : setNameError(true)
    }
    const linkHandler = (event) => {
        setLink(event.target.value)
        event.target.value.length ? setLinkError(false) : setLinkError(true)
    }
    const statusHandler = (event) => {
        setStatus(event.target.value)
        event.target.value === 0 || event.target.value === 1 ? setStatusError(false) : setStatusError(true)
    };
    const linkTypeHandler = (event) => {
        setLinkType(event.target.value)
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };


    const submitHandler = async (event) => {
        event.preventDefault()
        if (nameError || linkError || statusError) {
            Swal.fire({
                icon: 'error',
                text: "لطفا تمام فیلد ها را پر کنید",
            })
        } else if (!file) {
            await fetch(`http://localhost:4000/sliders/${data.id}`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    link: link,
                    linkType: linkType,
                    status: status,
                })
            }).then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        text: 'اسلاید با موفقیت ثبت شد',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    router.push("/admin/sliders")
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: 'مشکلی پیش آمده لطفا دوباره تلاش کنید',
                    })
                }
            })
        } else {
            await fetch(`http://localhost:4000/sliders/${data.id}`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    link: link,
                    linkType: linkType,
                    status: status,
                    image : file.name
                })
            }).then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        text: 'اسلاید با موفقیت ثبت شد',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    router.push("/admin/sliders")
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: 'مشکلی پیش آمده لطفا دوباره تلاش کنید',
                    })
                }
            })
        }
    }
    const fileTypes = ["JPG", "PNG", "WEBP"];
    return (
        <Container>
            <Breadcrumbs className={"ms-4"} separator="›" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            <div className={"d-flex flex-row justify-content-center"}>

                <Col xs={11} sm={11} md={8} lg={6} xl={5} className={"content"}>
                    <form>
                        <div className={"d-flex flex-column align-items-center gap-3 py-5"}>
                            <TextField className={"w-75"}
                                       label="نام اسلاید"
                                       variant="outlined"
                                       value={name}
                                       error={nameError}
                                       InputLabelProps={{shrink: true}}
                                       onInput={(event) => nameHandler(event)}
                            />
                            <TextField className={"w-75"}
                                       label="لینک"
                                       variant="outlined"
                                       value={link}
                                       error={linkError}
                                       InputLabelProps={{shrink: true}}
                                       onInput={(event) => linkHandler(event)}
                            />
                            <TextField
                                select
                                label="وضعیت"
                                className={"w-75"}
                                onChange={statusHandler}
                                value={status}
                                error={statusError}
                            >
                                {statusList.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                select
                                label="نوع لینک"
                                className={"w-75"}
                                value={linkType}
                                onChange={linkTypeHandler}
                            >
                                {linkTypeList.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <label>عکس مورد نظر را وارد کنید</label>
                            <FileUploader handleChange={handleChange} name="file" types={fileTypes}
                                          label={"بکشید و در این نقطه رها کنید"}/>
                            <Button onClick={submitHandler} className={"col-8 mt-5"} variant={"contained"}
                                    color={"success"}>افزودن</Button>
                        </div>
                    </form>
                </Col>
            </div>
        </Container>
    )
}

export async function getServerSideProps(context) {
    const {params} = context
    const dataRes = await fetch(`http://localhost:4000/sliders/${params.sliderId}`)
    const data = await dataRes.json()
    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {data}
    }

}