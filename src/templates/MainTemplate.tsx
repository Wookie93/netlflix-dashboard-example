import React from 'react';
import Header from '@/global-components/Header/Header';

interface Props {
  children: React.ReactElement;
}

const MainTemplate = ({ children }: Props) => (
  <>
    <Header />
    {children}
  </>
);

export default MainTemplate;
