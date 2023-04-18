import { useState } from 'react';

const useMiniModal = (initialState: boolean) => {
  const [isModalOpen, handleModalState] = useState(initialState);
  const [trailerSrc, setTrailerSrc] = useState('');

  const handleOpenModal = () => handleModalState(true);
  const handleCloseModal = () => handleModalState(false);

  return {
    isModalOpen,
    handleCloseModal,
    handleOpenModal,
    trailerSrc,
    setTrailerSrc,
  };
};

export default useMiniModal;
