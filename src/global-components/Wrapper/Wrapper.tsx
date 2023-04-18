import React from 'react';
import './Wrapper.scss';

type Props = {
  children?: React.ReactNode;
};

const Wrapper = ({ children }: Props) => (
  <div className="wrapper">{children}</div>
);

export default Wrapper;
