import React from 'react';

interface Props {
  title: string;
  imageDesktop: string;
  imageMobile: string;
  onMouseEnter: any;
  onMouseLeave: any;
}

const VideoBox = ({ title, imageDesktop, imageMobile, ...props }: Props) => {
  return (
    <div {...props} aria-label={title}>
      <picture>
        <source srcSet={imageMobile} media="(max-width: 680px)" />
        <img src={imageDesktop} alt={title} className="radius" />
      </picture>
    </div>
  );
};

export default VideoBox;
