import React from 'react';
import Slider from 'react-slick';
import BigVideoBox from '../BigVideoBox/BigVideoBox';

// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TopTenCarosuel.scss';

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

const TopTenCarosuel = ({ title, content, handleOpenModal }: Props) => {
  const [timeout, setTimeoutID] = React.useState(0);
  const settings = {
    infinite: false,
    slidesToShow: 4.3,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    responsive: [
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
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1.55,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 355,
        settings: {
          slidesToShow: 1.25,
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
    <div className="slider top-ten-slider">
      <div className="slider__boxhead">
        <h2 className="slider__title">{title}</h2>
      </div>
      <Slider {...settings}>
        {content.map((box: boxProps, index: number) => (
          <BigVideoBox
            key={index}
            title={box.title}
            position={index}
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

export default TopTenCarosuel;
