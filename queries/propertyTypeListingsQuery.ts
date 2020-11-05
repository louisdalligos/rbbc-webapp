import gql from 'graphql-tag';

export const PROPERTY_TYPE = gql`
  query getAllListingByType($id: ID!) {
    listingType(id: $id) {
      name
      listings {
        _id
        title
        slug
        startingPrice
        gallery {
          formats
        }
        listing_types {
          name
        }
      }
    }
  }
`;
