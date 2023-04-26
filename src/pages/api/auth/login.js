import cookie from "cookie";

export default async function Handler(req, res) {
    if (req.method === "POST") {
        try {
            await fetch(`${process.env.SERVER_URL}/account/signup/`,{
                method : "POST",
                credentials : 'include',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body : req.body
            }).then(response => response.json()).then(data =>{
                if (data.token){
                    res.setHeader('Set-Cookie', cookie.serialize('userToken', data.token, {
                        httpOnly: true,
                        maxAge: 60 * 60 * 24 * 30 , // 30 days
                        path : "/"
                    }));
                }
                res.status(200).json(data)
            })
        }catch {
            res.status(500).json({"massage" : "ارور سرور"})
        }
    } else {
        res.setHeader("Allow", ["post"]);
        res.status(405).json({massage: "درخواست غیر معتبر"})
    }
}
