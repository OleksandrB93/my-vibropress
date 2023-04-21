import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { breakpoints, breakpointsTrans, pagination } from "configs/sliderall";
import { SliderContainer, SlideImg, SliderSlide } from "./DropSlider.styled";

SwiperCore.use([Navigation]);

export default function DropSlider({ handleMouseLeave, data, handleToggle }) {
  const [transData, setTransData] = useState(false);

  useEffect(() => {
    const hasDropTransport = data.some(
      (item) => item.id === "droptransport" && item.items.length === 3
    );
    setTransData(hasDropTransport);
  }, [data]);

  const swiperBreakpoints = transData ? breakpointsTrans : breakpoints;

  return (
    <div>
      <SliderContainer>
        <Swiper
          navigation={true}
          modules={[Pagination, Navigation]}
          pagination={pagination}
          loop={true}
          breakpoints={swiperBreakpoints}
        >
          {data.map((dropSlide, index) => (
            <SliderSlide key={uuidv4()}>
              <SwiperSlide key={index}>
                <Link to={dropSlide.path}>
                  <SlideImg
                    src={process.env.PUBLIC_URL + dropSlide.imgUrl}
                    alt="name"
                    onClick={() => {
                      handleMouseLeave();
                      if (window.innerWidth <= 889) {
                        handleToggle();
                      }
                    }}
                  />
                  <p>{dropSlide.text}</p>
                </Link>
              </SwiperSlide>
            </SliderSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </SliderContainer>
    </div>
  );
}

export function DropSliderTrans({
  handleMouseLeave,
  droptransport,
  handleToggle,
}) {
  return (
    <div>
      <SliderContainer>
        <Swiper
          navigation={true}
          modules={[Pagination, Navigation]}
          pagination={pagination}
          loop={true}
          breakpoints={breakpointsTrans}
        >
          {droptransport.map((dropSlide, index) => (
            <SliderSlide key={uuidv4()}>
              <SwiperSlide key={index}>
                <Link to={dropSlide.path}>
                  <SlideImg
                    src={process.env.PUBLIC_URL + dropSlide.imgUrl}
                    alt="name"
                    onClick={() => {
                      handleMouseLeave();
                      if (window.innerWidth <= 889) {
                        handleToggle();
                      }
                    }}
                  />
                  <p>{dropSlide.text}</p>
                </Link>
              </SwiperSlide>
            </SliderSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </SliderContainer>
    </div>
  );
}
