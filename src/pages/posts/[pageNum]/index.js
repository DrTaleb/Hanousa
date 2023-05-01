import {useRouter} from "next/router";
import Link from "next/link";
import {Button, Pagination, PaginationItem} from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import {Suspense} from "react";
import Loading from "@/components/loading/Loading";
import Head from "next/head";

export default function PageNum({data}) {
    const router = useRouter()
    const clickHandler = (event, value) => {
        router.push(`/posts/${value}`)
    }
    return (
        <>
            <Head>
                <title>مقالات</title>
                <meta name="description" content="مقالات وبسایت هانوسا"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <section className="container blog-single mt-5">
                <div className="row justify-content-start">
                    <div className="col-4 w-100"></div>
                    {data.posts.map(item =>
                        <Suspense fallback={<Loading/>} key={item.id}>
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <div className="card">
                                    <Link href={`/post/${item.id}`}>
                                        <img src={item.image_url} className="card-img-top w-100" alt=""/>
                                    </Link>
                                    <div className="card-body d-flex flex-column justify-content-between ">
                                        <h5 className="card-title py-2">{item.title}</h5>
                                        <p className="card-text text-muted cardblogdescription">
                                            {item.sub_title}
                                        </p>
                                        <Link href={`/post/${item.id}`}>
                                            <Button color={"error"} variant={"contained"}>
                                                ادامه مطالب
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between px-3">
                                        <div className={"d-flex flex-row align-items-center"}>
                                            <CalendarMonthIcon fontSize={"small"}></CalendarMonthIcon>
                                            <span className="text-muted small">{item.persian_date}</span>
                                        </div>
                                        <div>
                                            <PersonOutlinedIcon fontSize={"small"}></PersonOutlinedIcon>
                                            <span className="text-muted small">{item.author__name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Suspense>
                    )}
                </div>
                <div className={"d-flex flex-row justify-content-center mb-5"}>
                    <Pagination
                        count={data.page_count}
                        onChange={(event, value) => clickHandler(event, value)}
                        size="large"
                        renderItem={(item) => (
                            <PaginationItem
                                {...item}
                            />
                        )}
                    />
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps(context) {
    const {params} = context
    const dataRes = await fetch(`${process.env.SERVER_URL}/post_list/${params.pageNum}`)
    const data = await dataRes.json()
    if (data.posts.length) {
        return {
            props: {data}
        }
    } else {
        return {
            notFound: true
        }
    }

}