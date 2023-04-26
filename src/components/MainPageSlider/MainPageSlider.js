import Carousel from 'react-bootstrap/Carousel';


export default function MainPageSlider({data}) {
    return (
        <Carousel fade className={"w-100"}>
            {data.map(item =>
                <Carousel.Item key={item.id}>
                    <img src={item.image_url} alt="slider-img"/>
                    <div className="carousel-caption first-slider">
                        <h5>{item.title}</h5>
                        <p>
                            {item.text}
                        </p>
                    </div>
                </Carousel.Item>)}
        </Carousel>
    );
}