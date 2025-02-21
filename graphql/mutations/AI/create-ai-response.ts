import gql from 'graphql-tag';
import { AIToneType, GenerationForType } from '@/components/AI/modals/AIModal';

export type AIResponseType = `propertyAdvert` | `biography`;

export type CreateAIResponseType = {
  generationFor: GenerationForType;
  tags: string;
  tone: AIToneType;
  type: AIResponseType;
}

export const CREATE_AI_RESPONSE = gql`
  mutation CreateAIResponse($createAiAssistantInput: CreateAiAssistantInput!){
    createAIResponse(createAiAssistantInput: $createAiAssistantInput){
      response
      id
    }
  }
`;

/*
mutation {
    createAIResponse(createAiAssistantInput: {
        generationFor: "Property Description",
        tags: "USA, Los Angeles, 13 dollars per day on rent, pet free"
        tone: "Professional"
        type: "propertyAdvert"
    }){
        response
        id
    }
}
*/
