import { useMutation } from '@apollo/client';
import { CREATE_AI_RESPONSE, CreateAIResponseType } from '@/graphql/mutations/AI/create-ai-response';

export const useCreateAIResponse = () => {
  const [createAIResponse, { loading, data, error }] = useMutation(CREATE_AI_RESPONSE);

  const generateText = async (createAiAssistantInput: CreateAIResponseType) => {
    try {
      const response = await createAIResponse({ variables: { createAiAssistantInput } });
      return response;
    } catch (e) {
      return { data: e };
    }
  };

  return {
    generateText,
    loading,
    data,
    error
  };
};