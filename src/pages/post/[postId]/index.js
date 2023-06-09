import Link from "next/link";
import ShareIcon from '@mui/icons-material/Share';
import {Fab} from "@mui/material";
import {useEffect, useRef} from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import {toast} from "react-toastify";

export default function PostId({data}) {

    const router = useRouter()
    const blogText = useRef()
    useEffect(()=>{
        blogText.current.innerHTML = data.text
    },[])

    console.log(router)
    const copyLink = ()=>{
        navigator.clipboard.writeText(`${process.env.LOCAL_URL}/post/${data.id}`);
        toast.success("لینک مقاله کپی شد")
    }
    return (
        <>
        <Head>
            <title>{data.title}</title>
            <meta name="description" content={`${data.sub_title}`}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main className="mx-auto">
            <div className="one blogTitle mt-5">
                <h1>{data.title}</h1>
            </div>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-10 p-0">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item" aria-current="page">
                                    <Link className={"text-decoration-none text-dark"} href={"/posts/1"}>بلاگ</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {data.title}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <section className="container single-blog">
                <section className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <picture>
                            <source className={"w-100 rounded-3"} srcSet={data.image_url}/>
                            <img className="w-100 rounded-3" src={"/img/251-800x640-grayscale.jpg"}/>
                        </picture>
                        <div className={"col-12 mt-4"}>
                            <span className={"fw-bold"}>
                                به قلم :  {data.author__name}
                            </span>
                        </div>
                        <div ref={blogText} className={"col-12 mt-5 blog-text"}>

                        </div>
                        <hr className="mt-5"/>
                        <div className="col-12 mt-3">
                            <h4 className="text-start">برچسب ها</h4>
                            <ul className="list-inline text-start mt-3">
                                <li className="list-inline-item mb-2">
                                    <a href="#">
                                        <span className="badge text-bg-secondary p-2">
                                        هانوسا
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-2">
                        <div className="position-relative h-100">
                            <nav className="my-sticky-top pt-2 pb-5 pt-sm-5">
                                <Fab size="medium" aria-label="add" onClick={copyLink}>
                                    <ShareIcon></ShareIcon>
                                </Fab>
                            </nav>
                        </div>
                    </div>
                </section>
            </section>
        </main>
        </>
    )
}


export async function getServerSideProps(context) {
    const {params} = context
    const dataRes = await fetch(`${process.env.SERVER_URL}/posts/${params.postId}`)
    const data = await dataRes.json()
    console.log(data.id)
    if (!data.id) {
        return {
            notFound: true,
        }
    } else {
        return {
            props: {data}
        }
    }
}