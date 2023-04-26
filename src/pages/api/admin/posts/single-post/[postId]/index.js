export default async function Handler(req, res) {
    const userToken = req.cookies.userToken
    if (req.method === "GET"){
        const dataResponse = await fetch(`https://server.hanousa.ir/page/posts/${req.query.postId}/`,{
            method : "GET",
            headers : {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization' : `Token 240cef19e6a53a5348aa6a717ebcd321ddc4dacc`
            }
        })
        const data = await dataResponse.json()
        console.log(data)
        res.status(200).json(data)
    }else {
        res.setHeader("Allow", ["post"]);
        res.status(405).json({massage: "not allowed"})
    }
}