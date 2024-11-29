import React from "react";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {BLOCKS} from '@contentful/rich-text-types';
import {Hero} from "../Hero";
import {GatsbyImage} from "gatsby-plugin-image";
import {ImageWrapper, Wrapper} from "./style";
import {HeroImageCarousel} from "../HeroImageCarousel";
import {PromoBanner} from "../PromoBanner";

export const RichText = ({raw, references = []}) => {
  const referencesMap = {};

  references.forEach(reference => {
    referencesMap[reference.contentful_id] = reference;
  });

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const data = referencesMap[node.data.target.sys.id];
        return <ImageWrapper><GatsbyImage alt={data.title} image={data.gatsbyImageData} /></ImageWrapper>
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const data = referencesMap[node.data.target.sys.id];
        switch (data.__typename) {
          case "ContentfulHero":
            return <Hero heading={data.heading} backgroundImage={data.backgroundImage.gatsbyImageData} subHeading={data.subHeading}/>
          case "ContentfulHeroImageCarousel":
            return <HeroImageCarousel slides={data.slides}/>
          case "ContentfulPromotionalBanner":
            return  <PromoBanner heading={data.heading}
                                 promoText={data.promoText}
                                 showButton={data.showButton}
                                 image={data.promoImage.gatsbyImageData}
                                 buttonText={data.buttonText}
                                 link={data.buttonLink}/>
          default:
            return null
        }
      }
    }
  }

  return (
    <Wrapper>
      {documentToReactComponents(
        JSON.parse(raw),options
      )}
    </Wrapper>
  )
}