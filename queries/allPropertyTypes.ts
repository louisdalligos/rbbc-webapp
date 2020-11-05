import gql from 'graphql-tag';

export const ALL_PROPERTY_TYPES = gql`
  query getAllPropertyTypes {
    listingTypes {
      _id
      name
    }
  }
`;
