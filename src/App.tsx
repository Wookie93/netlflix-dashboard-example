import React from 'react';
import { HomePage } from '@modules';
import MainTemplate from './templates/MainTemplate';

const App: React.FC = () => (
  <MainTemplate>
    <HomePage />
  </MainTemplate>
);

export default App;
