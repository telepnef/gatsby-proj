import React from 'react';
import {Layout, SEO} from "../components";
import { graphql } from "gatsby";
import {RichText} from "../components/RichText";
import Client from 'shopify-buy';

export default function ContentfulPage(props) {
    const client = Client.buildClient({
        storefrontAccessToken: 'your-access-token',
        domain: 'your-shopify-url.myshopify.com'
    });
  console.log(props);
  return (
    <Layout>
        <SEO title={props.data.contentfulPage.title} description={props.data.contentfulPage.description} />
      {!!props.data.contentfulPage.pageContent &&
        <RichText
          raw={props.data.contentfulPage.pageContent.raw}
          references={props.data.contentfulPage.pageContent.references}/>}

    </Layout>
  )
}

export const query = graphql`
    query PageQuery($id: String) {
        contentfulPage(id: {eq: $id}) {
            id
            title
            description
            pageContent {
                raw
                references {
                    ... on ContentfulAsset {
                        __typename
                        contentful_id
                        title
                        gatsbyImageData(
                            layout: FULL_WIDTH, 
                            placeholder: BLURRED
                        )
                    }
                    ... on ContentfulHero {
                        __typename
                        contentful_id
                        heading
                        subHeading
                        backgroundImage {
                            gatsbyImageData(
                                layout: FULL_WIDTH, 
                                placeholder: BLURRED
                            )
                        }
                    }
                    ... on ContentfulPriceGroup {
                        __typename
                        contentful_id
                        priceOptions {
                            id
                            title
                            amountPerMonth
                            description {
                                raw
                            }
                            mostPopular
                        }
                    }

                    ... on ContentfulHeroImageCarousel {
                        contentful_id
                        __typename
                        slides {
                            id
                            heading
                            backgroundImage {
                                gatsbyImageData
                            }
                        }
                    }

                    ... on ContentfulPromotionalBanner {
                        contentful_id
                        __typename
                        buttonLink
                        buttonText
                        contentful_id
                        heading
                        promoImage {
                            gatsbyImageData
                        }
                        promoText
                        showButton
                    }
                }
            }
        }
    }
`;