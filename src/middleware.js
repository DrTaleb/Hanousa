import {NextResponse} from "next/server";

export async function middleware(req, res) {
    const authToken = req.cookies.get("userToken")
    let userAdmin;
   if(authToken){
       try {
           await fetch(`${process.env.SERVER_URL}/account/getme/`,{
               method : "GET",
               credentials : 'include',
               headers: {
                   'Content-Type': 'application/json; charset=UTF-8',
                   'Authorization' : `Token ${authToken.value}`
               },
           }).then(response => response.json()).then(data =>{
               userAdmin = data.is_staff
           })
       }catch {
           userAdmin = ""
       }
       if (!userAdmin){
           if (req.nextUrl.pathname.startsWith("/admin")) {
               return NextResponse.redirect(`${process.env.LOCAL_URL}`)
           }
       }
       if (req.nextUrl.pathname.startsWith("/login")) {
           return NextResponse.redirect(`${process.env.LOCAL_URL}`)
       }
   }else {
        if (req.nextUrl.pathname.startsWith("/account-setting")) {
            return NextResponse.redirect(`${process.env.LOCAL_URL}`)
        }
       if (req.nextUrl.pathname.startsWith("/admin")) {
           return NextResponse.redirect(`${process.env.LOCAL_URL}`)
       }
   }
}