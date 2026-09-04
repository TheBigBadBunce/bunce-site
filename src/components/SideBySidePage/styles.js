import styled from "styled-components";

import { space, mobileMediaQuery, colors } from "@/data/styles";
import { Swiper } from "swiper/react";

export const SideBySideContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  & > * {
    width: 50%;
  }

  ${mobileMediaQuery} {
    flex-direction: column;

    & > * {
      width: 100%;
    }
  }
`;

export const SwiperContainer = styled.div`
  padding-left: ${space.page};

  ${mobileMediaQuery} {
    padding-left: 0;
    padding-top: ${space.box};
  }
`;

export const AutoHeightSwiper = styled(Swiper)`
  .swiper-slide {
    height: auto;
  }
  .swiper-pagination {
    color: ${colors.mid};
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ImageCredit = styled.div`
  width: 100%;
  text-align: right;
  color: ${colors.text};

  a {
    color: ${colors.text};
    text-decoration: underline;
  }
`;
