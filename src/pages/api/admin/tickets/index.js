
export default async function Handler(req, res) {
    const userToken = req.cookies.userToken
    if (req.method === "GET"){
       try {
           const dataResponse = await fetch(`${process.env.SERVER_URL}/page/tickets/`,{
               method : "GET",
               headers : {
                   'Content-Type': 'application/json; charset=UTF-8',
                   'Authorization' : `Token ${userToken}`
               }
           })
           const data = await dataResponse.json()
           console.log(data)
           res.status(200).json(data)
       }catch {
           res.status(500).json({"massage" : "ارور سرور"})
       }
    }else {
        res.setHeader("Allow", ["post"]);
        res.status(405).json({massage: "not allowed"})
    }
}
