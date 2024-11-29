import React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

export const HeroImageCarousel = ({slides}) => {
  console.log(slides);
  return (
    <Carousel infiniteLoop={true} autoPlay={true}>
      {slides.map(slide => {
        return <div key={slide.id}>
                <h1>{slide.heading}</h1>
                <GatsbyImage alt={slide.heading} image={slide.backgroundImage.gatsbyImageData} />
              </div>
      })}
    </Carousel>
  )
}