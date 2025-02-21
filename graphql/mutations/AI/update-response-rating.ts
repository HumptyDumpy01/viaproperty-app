import gql from 'graphql-tag';

export type UpdateRatingAiAssistantInputType = {
  id: string;
  rated: number;
}

export const UPDATE_RESPONSE_RATING = gql`
  mutation UpdateResponseRating($updateRatingAiAssistantInput: UpdateRatingAiAssistantInput!) {
    updateResponseRating(updateRatingAiAssistantInput: $updateRatingAiAssistantInput){
      response
    }
  }
`;

/*
mutation {
    updateResponseRating(updateRatingAiAssistantInput:{
        id: "f470568e-a312-4f78-af1b-a0042c0e41ba"
        rated: 4
    }){
        response
    }
}
*/
