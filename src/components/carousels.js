import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Jabz_ASU from './assets/Jabz_ASU.jpg';
import Jabz_DC from './assets/Jabz_DC.jpg';
import Jabz_MAU from './assets/Jabz_MAU.jpg';
import Jabz_MandD from './assets/Jabz_MandD.jpg';
import Jabz_OH from './assets/Jabz_OH.jpg';
import Jabz_OHa from './assets/Jabz_OHa.jpg';
import Jabz_dupi from './assets/Jabz_dupi.jpg';
import Jabz_kido from './assets/Jabz_kido.jpg';


function CarouselItem({img}, {IsVertical}) {
    let width = '0.5'
    let height = '0.5'
    if (IsVertical) {
        height = '360'
        width = '240'
    }
    else {
        height = '240'
        width = '360'
    }
    return( 
        <div className='text-center'>
        <img src={img} alt="Pic not found" class="img-fluid rounded shadow-lg" 
          width={width} height={height}/>
      </div>     
          
    );
 }

function CarouselObject() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    
    <div>
    <Carousel style={{margin:'0.5in'}} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <CarouselItem img={Jabz_ASU} IsVertical={true}/>
        </Carousel.Item>
        <Carousel.Item>
            <CarouselItem img={Jabz_DC} IsVertical={true}/>
        </Carousel.Item>
        <Carousel.Item>
           <CarouselItem img={Jabz_OHa} IsVertical={true}/>
        </Carousel.Item>
        <Carousel.Item>
            <CarouselItem img={Jabz_MAU} IsVertical={true}/>
        </Carousel.Item>
     
        <Carousel.Item>
            <CarouselItem img={Jabz_kido} IsVertical={false}/>
        </Carousel.Item>
        <Carousel.Item>
            <CarouselItem img={Jabz_dupi} IsVertical={false}/>
        </Carousel.Item>
        <Carousel.Item>
            <CarouselItem img={Jabz_MandD} IsVertical={false}/>
        </Carousel.Item>
        <Carousel.Item>
            <CarouselItem img={Jabz_OH} IsVertical={false}/>
        </Carousel.Item>
    </Carousel>
</div>

  );
}

export default CarouselObject;