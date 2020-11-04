import gql from 'graphql-tag';

export const PROPERTY_DETAIL = gql`
  query propertyPostBySlugQuery($slug: String) {
    listings(where: { slug: $slug }) {
      id
      title
      startingPrice
      address
      gallery {
        url
      }
      tags {
        name
      }
    }
  }
`;
