import gql from 'graphql-tag';

export const REMOVE_PROPERTY_FROM_WISHLIST = gql`
  mutation RemovePropertyIdFromUserWishlist($propertyId: String!) {
    removePropertyIdFromUserWishlist(propertyId: $propertyId){
      wishlist
    }
  }
`;

/*
mutation {
    removePropertyIdFromUserWishlist(propertyId: "d989027e-bd7f-45dc-9a8a-9ea36c810989"){
        wishlist
    }
}*/
