import gql from 'graphql-tag';

export const ADD_PROPERTY_TO_USER_WISHLIST = gql`
  mutation AddPropertyIdToUserWishlist($propertyId: String!){
    addPropertyIdToUserWishlist(propertyId: $propertyId){
      wishlist
    }
  }
`;

/*
mutation {
    addPropertyIdToUserWishlist(propertyId: "d989027e-bd7f-45dc-9a8a-9ea36c810989"){
        wishlist
    }
}
*/
