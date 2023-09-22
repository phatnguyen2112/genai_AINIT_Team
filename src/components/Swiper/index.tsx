import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SSwiper = ({ children, id }: IphoneProps) => {
  return (
    <Box sx={{ minWidth: 0 }} id={id}>
      <Swiper
        {...{
          modules: [Pagination, Navigation],
          // slidesPerView: 1.5,
          centeredSlides: true,
          spaceBetween: 16,
          pagination: true,
          navigation: true,
          loop: true,
          className: "mySwiper",
        }}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default SSwiper;

interface IphoneProps {
  children: ReactNode;
  id: string;
}
