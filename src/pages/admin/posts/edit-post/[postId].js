import React, {useRef, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {FileUploader} from "react-drag-drop-files";
import axios from "axios";
import Nprogress from "nprogress";
import Swal from "sweetalert2";
import {useRouter} from "next/router";
export default function EditPost({data}) {
    const router = useRouter()
    const formData = new FormData();
    const [title, setTitle] = useState(data.title)
    const [subtitle, setSubTitle] = useState(data.sub_title)
    const [status, setStatus] = useState(data.status)
    const [text, setText] = useState(data.text)
    const editorRef = useRef(null);
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


    const titleHandler = (event)=>{
        setTitle(event.target.value)
    }
    const subtitleHandler = (event)=>{
        setSubTitle(event.target.value)
    }
    const statusHandler = (event)=>{
        setStatus(event.target.value)
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [file, setFile] = useState(null);
    const fileTypes = ["WEBP"];
    const handleChange = (file) => {
        setFile(file);
    };
    const submitHandler = async ()=>{
        const text = await editorRef.current.getContent()
        await formData.append("text", text)
        await formData.append("title" , title)
        await formData.append("sub_title" , subtitle)
        await formData.append("image", file)
        await formData.append("status" , status)
        try {
            const res = await axios.post(`${process.env.LOCAL_URL}/api/admin/posts/edit-post/${router.query.postId}`,formData,{headers : {
                        'Content-Type': 'multipart/form-data',
                    }
                }
            )
            if (res.data.message === "post changed"){
                Nprogress.done()
                await Swal.fire({
                    icon: 'success',
                    text: "پست آپدیت شد",
                })
                router.push("/admin/sliders")
            }else {
                Nprogress.done()
                await Swal.fire({
                    icon: 'error',
                    text: "مشکلی در سرور ایجاد شده",
                })
            }
        }catch{
            Nprogress.done()
            await Swal.fire({
                icon: 'error',
                text: "مشکلی در سرور ایجاد شده",
            })
        }

    }




    return (
        <div className={"container"}>
            <div className={"bg-white rounded-3 shadow d-flex flex-column gap-4 pt-3 pb-3 px-3"}>
                <div className={"d-flex flex-column flex-wrap gap-4"}>
                    <TextField
                        className={"col-md-5 col-12 content h-100"}
                        label="عنوان"
                        value={title}
                        onChange={titleHandler}
                        variant="outlined" />
                    <TextField
                        className={"col-md-5 col-12 content h-100"}
                        multiline={true}
                        value={subtitle}
                        onChange={subtitleHandler}
                        label="توصیف پست بصورت کوتاه"
                        variant="outlined" />
                    <TextField
                        select
                        label="وضعیت"
                        className={"col-md-5 col-12 content h-100"}
                        onChange={statusHandler}
                        value={status}
                    >
                        {statusList.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <label>عکس پست</label>
                <FileUploader  handleChange={handleChange} name="file" types={fileTypes}
                               label={"بکشید و در این نقطه رها کنید"}/>
                <Editor
                    initialValue={text}
                    onInit={(evt, editor) => editorRef.current = editor}
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:"vazir",sans-serif; font-size:16px; direction: rtl; }'
                    }}
                />
                <Button onClick={submitHandler} className={"align-self-end col-xl-4"} color={"success"} variant={"contained"}>اشتراک گذاری</Button>
            </div>
        </div>
    );
}
export async function getServerSideProps(context){
    const {params} = context
    const layoutResponse = await fetch(`${process.env.LOCAL_URL}/api/admin/posts/single-post/${params.postId}`)
    const data = await layoutResponse.json()
    return {
        props: {data}
    }
}

