
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000, 
      };

  return (
    <Slider {...settings} className='m-16 '>
    
      <div >
        <img src="/images/ayat.jpg" alt="Image 1" className='h-96 w-full rounded-'/>
      </div>
      <div>
        <img src="/images/tsehay.jpg" alt="Image 2"className='h-96 w-full' />
      </div>
      <div>
        <img src="/images/vamos2.jpg" alt="Image 3"className='h-96 w-full' />
      </div>
      <div>
        <img src="/images/vamos.jpg" alt="Image 3" className='h-96 w-full' />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default ImageSlider;