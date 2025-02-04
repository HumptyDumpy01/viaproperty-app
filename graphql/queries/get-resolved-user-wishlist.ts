import gql from 'graphql-tag';

export type GetResolvedUserWishlistInputType = {
  take: number;
  skip: number;
}

export const GET_RESOLVED_USER_WISHLIST = gql`
  query GetResolvedUserWishlist($getResolvedUserWishlistInput: GetResolvedUserWishlistInput!) {
    getResolvedUserWishlist(getResolvedUserWishlistInput: $getResolvedUserWishlistInput) {
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
      total
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
