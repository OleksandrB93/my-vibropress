import styled from "@emotion/styled/macro";

export const SliderContainer = styled.div`
  position: absolute;
  top: 98%;
  left: 0;
  height: 500px;
  width: 100vw;
  background: ${(p) => p.theme.colors.sliderBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.494) 0px 30px 45px 8px;
  padding-top: 70px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: inset 0 0 20px -5px rgba(0, 0, 0, 0.5);

  @media (max-width: 480.98px) {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
  @media (min-width: 481px) and (max-width: 888.98px) {
    top: 0;
    left: 0;
    height: 120vh;
    width: 100vw;
    padding-top: 110px;
  }

  .swiper-button-next {
    font-style: normal;
    color: ${(p) => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.black};
    margin-right: 30px;
    width: 50px;
    height: 70px;
    border-radius: 10px;
    transform: translateY(-50%);

    @media (max-width: 888.98px) {
      width: 35px;
      height: 55px;
      margin-right: 0px;
    }
  }
  .swiper-button-prev {
    font-style: normal;
    color: ${(p) => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.black};
    margin-left: 30px;
    width: 50px;
    height: 70px;
    border-radius: 10px;
    transform: translateY(-50%);

    @media (max-width: 888.98px) {
      width: 35px;
      height: 55px;
      margin-left: 0px;
    }
  }

  .swiper-pagination {
    position: absolute;
    bottom: 0px;
    left: 50%;
    z-index: 1000000000;
    transform: translateX(-50%);
    .swiper-pagination-bullet {
      width: 20px;
      height: 20px;
      background-color: #007bff;
      opacity: 0.5;
      border-radius: 50%;
      margin-right: 10px;
      @media (max-width: 888.98px) {
        margin-bottom: 80px;
      }
      @media (min-width: 481px) and (max-width: 888.98px) {
       display: none;
      }

      &.swiper-pagination-bullet-active {
        opacity: 0.85;
      }
    }
  }
  a {
    text-decoration: none !important;
  }

  button {
    margin-top: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 10px;
    
    border-radius: 5px;
    color: ${(p) => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.link};
    width: 100%;
    border: none;
    transition: all 250ms ease-in-out;
    :hover{
      background-color: ${(p) => p.theme.colors.accent};
      color: ${(p) => p.theme.colors.link};
      box-shadow: inset 0 0 10px 3px ${(p) => p.theme.colors.link};
      transform: translateY(2px);
    }
    
    p{
      font-style: italic;
      text-align: center;
      font-weight: 700;
      font-size: 16px;

    }
    @media (max-width: 480.98px) {
      margin-top: 40px;
    }
    @media (max-width: 888.98px) {
      font-size: 12px;
    }
  }
`;

export const SliderSlide = styled.div``;

export const SlideImg = styled.img`
  margin-top: 10px;
  display: block;
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 888.98px) {
    height: 180px;
  }
`;

export const DropSliderContainer = styled.div`
  width: 100vh;
  position: fixed;
  top: 100%;
  left: 0;
`;
