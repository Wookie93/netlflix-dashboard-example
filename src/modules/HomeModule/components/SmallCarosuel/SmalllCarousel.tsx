import React from 'react';
import Slider from 'react-slick';
import VideoBox from '../VideoBox/VideoBox';

// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  title: string;
  content: any;
  handleOpenModal: (event: MouseEvent, src: string) => void;
}

interface boxProps {
  title: string;
  position: number;
  imageDesktop: string;
  imageMobile: string;
  trailerSrc: string;
  onMouseLeave: () => void;
}

const SmallCarousel = ({ title, content, handleOpenModal }: Props) => {
  const [timeout, setTimeoutID] = React.useState(0);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5.25,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const handleMouseEnter = (e: MouseEvent, src: string) => {
    const timeoutID: number = window.setTimeout(
      () => handleOpenModal(e, src),
      800
    );
    setTimeoutID(timeoutID);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeout);
    setTimeoutID(0);
  };

  return (
    <div className="slider" aria-label={title}>
      <div className="slider__boxhead">
        <h2 className="slider__title">{title}</h2>
        <a href="#" className="slider__link">
          Zobacz wszystkie {'>'}
        </a>
      </div>
      <Slider {...settings}>
        {content.map((box: boxProps, index: number) => (
          <VideoBox
            key={index}
            title={box.title}
            imageDesktop={box.imageDesktop}
            imageMobile={box.imageMobile}
            onMouseEnter={(e: MouseEvent) =>
              handleMouseEnter(e, box.trailerSrc)
            }
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SmallCarousel;
