export default async function Handler(req, res) {
    if (req.method === "POST") {
        await fetch("https://server.hanousa.ir/account/signup",{
            method : "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body : req.body
        }).then(response => response.json()).then(data => res.status(200).json(data))
        console.log("scklmlkmkjnkjcnkjnkjn")

    } else {
        res.setHeader("Allow", ["post"]);
        res.status(405).json({massage: "not allowed"})
    }
}
