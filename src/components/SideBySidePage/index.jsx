import { Link } from "react-router-dom";

import { H1 } from "@/components/layout";
import { SideBySideContainer, ImageCredit, SwiperContainer } from "./styles";
import GigSwiper from "./swiper";

const SideBySidePage = ({ title, children, images, imageCredit }) => {
  return (
    <>
      <SideBySideContainer>
        <div>
          <H1>{title}</H1>
          {children}
        </div>
        <SwiperContainer>
          <GigSwiper images={images} />
          {imageCredit && (
            <ImageCredit>
              Image courtesy of{" "}
              {imageCredit.url ? (
                <Link to={imageCredit.url}>{imageCredit.source}</Link>
              ) : (
                imageCredit.source
              )}
            </ImageCredit>
          )}
        </SwiperContainer>
      </SideBySideContainer>
    </>
  );
};

export default SideBySidePage;
