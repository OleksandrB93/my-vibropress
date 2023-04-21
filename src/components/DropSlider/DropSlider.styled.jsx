import styled from "@emotion/styled/macro";

export const SliderContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  height: 500px;
  width: 100vw;
  background-color: #bbcbcc;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.494) 0px 30px 45px 8px;
  padding-top: 70px;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 100;

  @media (max-width: 480.98px) {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
  @media (max-width: 888.98px) {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 110px;
  }

  .swiper-button-next {
    font-style: normal;
    color: #ffbb00;
    background-color: #000000;
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
    color: #ffbb00;
    background-color: #000000;
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
        margin-bottom: 45px;
      }

      &.swiper-pagination-bullet-active {
        opacity: 0.85;
      }
    }
  }

  p {
    margin-top: 20px;

    padding: 10px 15px;
    border-radius: 15px;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    color: black;
    background-color: white;

    @media (max-width: 480.98px) {
      margin-top: 40px;
    }
    @media (max-width: 888.98px) {
      font-size: 10px;
    }
  }
`;

export const Backdrop = styled.div``;

export const SliderSlide = styled.div``;

export const SlideImg = styled.img`
  margin-top: 10px;
  display: block;
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
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
  z-index: 998;
`;
