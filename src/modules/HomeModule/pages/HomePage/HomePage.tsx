import React from 'react';

// components
import Hero from '../../components/Hero/Hero';
import SmallCarousel from '../../components/SmallCarosuel/SmalllCarousel';
import Wrapper from '@/global-components/Wrapper/Wrapper';
import TopTenCarosuel from '../../components/TopTenCarosuel/TopTenCarosuel';

// styles
import './HomePage.scss';
import MiniModal from '../../components/miniModal/miniModal';
import useMiniModal from '../../components/miniModal/useMiniModal';
import isOffTheScreen from '@/helpers/isOffTheScreen';

interface Movie {
  title: string;
  releaseYear: number;
  genre: string[];
  description: string;
  imageSrc: string;
  trailerSrc: string;
}

interface MovieCategory {
  [categoryName: string]: Movie[];
}

export const HomePage: React.FC = () => {
  const [topTenMovies, setTopTenMovies] = React.useState({});
  const [popularMovies, setPopularMovies] = React.useState({});
  const [modalPosition, setModalPosition] = React.useState({
    middleY: 0,
    middleX: 0,
  });
  const {
    isModalOpen,
    handleCloseModal,
    handleOpenModal,
    trailerSrc,
    setTrailerSrc,
  } = useMiniModal(false);

  const fetchJsonData = async (url: string) => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      return jsonData as MovieCategory;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  React.useEffect(() => {
    (async () => {
      const topData = await fetchJsonData('assets/data/top.json');
      const popularData = await fetchJsonData('assets/data/small.json');
      if (topData && popularData) {
        setTopTenMovies(topData);
        setPopularMovies(popularData);
      }
    })();
  }, []);

  const openModalOnHover = (e: any, src: string) => {
    const clickedElement = e.target;
    const rect = clickedElement.getBoundingClientRect();
    let middleX = rect.left - 40;
    const middleY = rect.top + document.documentElement?.scrollTop ?? 0;
    const offTheScreen = isOffTheScreen(rect);

    if (middleX <= 2) middleX = 10;
    if (offTheScreen.right) middleX = rect.left - rect.width;
    if (middleX > document.body.clientWidth - 360)
      middleX = document.body.clientWidth - 370;
    setModalPosition({ middleX, middleY });
    handleOpenModal();
    setTrailerSrc(src);
  };

  return (
    <>
      <Hero />
      <Wrapper>
        {Object.keys(popularMovies).map((item, index) => (
          <SmallCarousel
            key={index}
            title={item}
            content={popularMovies[item as keyof typeof popularMovies]}
            handleOpenModal={openModalOnHover}
          />
        ))}
        {Object.keys(topTenMovies).map((item, index) => (
          <TopTenCarosuel
            key={index}
            title={item}
            content={topTenMovies[item as keyof typeof topTenMovies]}
            handleOpenModal={openModalOnHover}
          />
        ))}
      </Wrapper>
      <MiniModal
        isOpen={isModalOpen}
        trailerSrc={trailerSrc}
        modalPosition={modalPosition}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};
