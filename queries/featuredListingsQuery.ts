import gql from 'graphql-tag';

export const FEATURED_LISTINGS = gql`
  query getListings {
    listings {
      _id
      title
      slug
      startingPrice
      bed
      bath
      area
      gallery {
        formats
      }
      listing_types {
        name
      }
    }
  }
`;
