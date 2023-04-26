

export default async function Handler(req, res) {
    const params = req.params
    console.log(params)
    // if (req.method === "PUT") {
    //     try {
    //         await fetch(`https://server.hanousa.ir/account/user/${params}`,{
    //             method : "PUT",
    //             credentials : 'include',
    //             headers: {
    //                 'Content-Type': 'application/json; charset=UTF-8',
    //             },
    //             body : req.body
    //         }).then(response => response.json()).then(data =>{
    //             res.status(200).json(data)
    //         })
    //     }catch {
    //         res.status(500).json({"massage" : "ارور سرور"})
    //     }
    // } else {
    //     res.setHeader("Allow", ["post"]);
    //     res.status(405).json({massage: "درخواست غیر معتبر"})
    // }
}
