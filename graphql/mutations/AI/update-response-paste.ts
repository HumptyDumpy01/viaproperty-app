import gql from 'graphql-tag';

export type UpdateResponsePastedInputType = {
  id: string;
  pastedText: string;
}

export const UPDATE_RESPONSE_PASTE = gql`
  mutation UpdateResponsePasted($updateResponsePastedInput: UpdateResponsePastedInput!){
    updateResponsePasted(updateResponsePastedInput: $updateResponsePastedInput){
      response
    }
  }
`;

/*
mutation {
    updateResponsePasted(updateResponsePastedInput: {
        id: "f470568e-a312-4f78-af1b-a0042c0e41ba"
        pastedText: "123456"
    }) {
        response
    }
}
*/
