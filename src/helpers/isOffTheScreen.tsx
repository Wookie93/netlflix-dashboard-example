interface Props {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

const isOffTheScreen = function (rect: Props) {
  // Check if it's out of the viewport on each side
  const out = {
    top: 0,
    left: 0,
    bottom: false,
    right: false,
  };

  out.top = rect.top < 0 ? rect.top : 0;
  out.left = rect.left < 0 ? rect.left : 0;
  out.bottom =
    rect.bottom > (window.innerHeight || document.documentElement.clientHeight);
  out.right =
    rect.right > (window.innerWidth || document.documentElement.clientWidth);

  return out;
};

export default isOffTheScreen;
