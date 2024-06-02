import React, { useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import holdings from '../data/holdings';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  position: relative;

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }
`;

const HoldingLogo = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: ${({ color }) => color};
`;

const HoldingsSlider = () => {
  const sliderRef = useRef();

  return (
    <div>
      <StyledSlider ref={sliderRef} {...{
        infinite: true,
        speed: 3000,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true
      }}>
        {holdings.map(holding => (
          <div key={holding.id}>
            <HoldingLogo color={`#${Math.floor(Math.random()*16777215).toString(16)}`}>
              {holding.id}
            </HoldingLogo>
          </div>
        ))}
      </StyledSlider>
    </div>
  );
}

export default HoldingsSlider;
