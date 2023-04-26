import Container from "react-bootstrap/Container";
import {Button} from "@mui/material";
import {useRouter} from "next/router";

export default function slideView({data}){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const returnLastPage = ()=> {
        router.push("/admin/sliders")
    }

    return(
        <Container>
            <div className={"w-100"}>
                <Button variant={"outlined"} onClick={returnLastPage}>بازگشت به صفحه قبل</Button>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={""} className={"w-100 rounded mt-5"} src={`/img/${data.image}`}/>
            </div>
        </Container>
    )
}

export async function getServerSideProps (context){
    const {params} = context
    console.log(params.sliderId)
    const dataRes = await fetch(`http://localhost:4000/sliders/${params.sliderId}`)
    const data = await dataRes.json()
    if (!data){
        return{
            notFound : true
        }
    }
    return{
        props : {data}
    }

}