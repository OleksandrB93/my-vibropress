import styled from "@emotion/styled";

export const SlideBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 140px;
  padding-bottom: 70px;
  background-image: url("https://img.freepik.com/free-vector/white-technology-background_23-2148403783.jpg?w=1380&t=st=1683442391~exp=1683442991~hmac=0f9123a97c8c5b9203d21a529241183c204f184b760fdb6e1bb5c9536c68cb1a");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .swiper-button-next,
  .swiper-button-prev {
    height: 80px;
    width: 40px;
    transform: translateY(-50%);
  }
  .swiper-pagination {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);

    .swiper-pagination-bullet {
      width: 40px;
      height: 40px;
      background-color: #007bff;
      opacity: 0.5;
      border-radius: 50%;
      margin-right: 10px;

      &.swiper-pagination-bullet-active {
        opacity: 0.85;
      }
    }
  }
`;
