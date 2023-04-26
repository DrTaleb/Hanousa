export default function postDetails(){


    return(
        <h1>
            this is post section
        </h1>
    )
}


export async function getServerSideProps(context){
    const {params} = context
    console.log(params)
    const dataRes = await fetch(`https://server.hanousa.ir/posts/${params}`)
    const data = await dataRes.json()
    return{
        props : {data}
    }
}