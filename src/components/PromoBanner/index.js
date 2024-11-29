import React from "react";
import {GatsbyImage} from "gatsby-plugin-image";
import {PromoWrapper, PromoText} from "./style";

export const PromoBanner = ({heading,buttonText, link, image, showButton, promoText}) => {
  return <PromoWrapper>
    <GatsbyImage alt={heading} image={image} />
    <PromoText>
      <h2>{heading}</h2>
      <p>{promoText}</p>
      {showButton && <div>
        <a href={link}>{buttonText}</a>
      </div>}
    </PromoText>d
  </PromoWrapper>
}