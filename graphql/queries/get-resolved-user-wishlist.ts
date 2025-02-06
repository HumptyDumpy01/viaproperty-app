import gql from 'graphql-tag';

export const GET_RESOLVED_USER_WISHLIST = gql`
  query GetResolvedUserWishlist {
    getResolvedUserWishlist {
      resolvedWishlist {
        id
        title
        propertyFor
        description {
          overall
          priceAndTaskHistory {
            price
          }
        }
        images
        createdAt
      }
    }
  }
`;

/*
query {
    getResolvedUserWishlist {
        resolvedWishlist {
            id
            title
            propertyFor
            description {
                overall
                priceAndTaskHistory {
                    price
                }
            }
            images
            createdAt

        }
    }
}
*/
