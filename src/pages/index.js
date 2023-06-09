import Head from 'next/head'
import MainPageSlider from "@/components/MainPageSlider/MainPageSlider";
import MainPageFeatures from "@/components/MainPageFeatures/MainPageFeatures";
import MainPostSection from "@/components/MainPostSection/MainPostSection";
import MoreInfoSection from "@/components/MoreInfoSection/MoreInfoSection";
import CompanyServices from "@/components/CompanyServices/CompanyServices";
import Comments from "@/components/Comments/Comments";
import DetailsSection from "@/components/DetailsSection/DetailsSection";
import PartnersSection from "@/components/PartnersSection/PartnersSection";


export default function Home({data}) {
    return (
        <>
            <Head>
                <title>گروه دیجیتال مارکتینگ هانوسا</title>
                <meta name="description"
                      content={`مجموعه هانوسا با هدف بهبود کیفیت و افزایش فروش شما عزیزان و برای سهولت در زمینه بازاریابی چه در زمینه بازاریابی آنلاین ( دیجیتال مارکتینگ) و بازار یابی آفلاین ( کلامی و پخش ) به صورت همزمان با تیم های مجرب آماده همکاری با تمام مشاغل و ارگان ها می باشد `}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <MainPageSlider data={data.slides}></MainPageSlider>
                <MainPageFeatures></MainPageFeatures>
                <MoreInfoSection></MoreInfoSection>
                <CompanyServices></CompanyServices>
                <MainPostSection data={data.posts}></MainPostSection>
                <DetailsSection></DetailsSection>
                <Comments></Comments>
                <PartnersSection data={data.teammates}></PartnersSection>
            </main>
        </>
    )
}

export async function getServerSideProps() {
    const dataRes = await fetch(`${process.env.SERVER_URL}/home/?format=json`)
    const data = await dataRes.json()

    if (!data) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {data},
        }
    }

}

