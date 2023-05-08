import Image from "next/image";

export default function notFound(){


    return(
        <div className={"d-flex flex-row vh-100 align-items-center justify-content-center"}>
            <img src={"/img/Lovepik_com-400217866-404-page-error.png"} className={"col-12 col-sm-8 col-lg-8"} alt={"404"}></img>
        </div>
    )
}