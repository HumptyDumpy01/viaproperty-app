import gql from 'graphql-tag';

export const CREATE_ORDER = gql`
    mutation CreateOrder($createOrderInput: createOrderInput!) {
        createOrder(createOrderInput: $createOrderInput) {
            id
            propertyId
            contactDetails {
                firstName
                lastName
                phoneNumber
                email
            }
        }
    }
`;