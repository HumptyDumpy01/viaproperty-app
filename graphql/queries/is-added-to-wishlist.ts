import gql from 'graphql-tag';

export const IS_ADDED_TO_WISHLIST = gql`
  query UserAddedPropertyToWishlist($propertyId: String!){
    userAddedPropertyToWishlist(propertyId: $propertyId){
      wishlisted
    }
  }
`;

/*
query {
    userAddedPropertyToWishlist(propertyId:"d989027e-bd7f-45dc-9a8a-9ea36c810989") {
        wishlisted
    }
}
*/
