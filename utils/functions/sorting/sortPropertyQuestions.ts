import { sortArrayByNewestDate } from '@/utils/functions/sorting/sortArrayByNewestDate';
import { ActiveFilterTypeQuestions } from '@/utils/types/activeFilterTypeQuestions';
import { PropertyQuestionsType } from '@/components/PropertyDescription/Layout/PropertyComments';
import React from 'react';

export function
sortPropertyQuestions(activeFilter: ActiveFilterTypeQuestions,
                      questions: PropertyQuestionsType[], setAllQuestions: React.Dispatch<React.SetStateAction<PropertyQuestionsType[]>>,
                      copyQuestions: PropertyQuestionsType[]) {
  switch (activeFilter) {
    case `Date`:
      setAllQuestions(sortArrayByNewestDate(questions));
      break;
    case `Most Liked`:
      copyQuestions.sort((a, b) => b.likes.length - a.likes.length);
      setAllQuestions([...copyQuestions]);
      break;
    case `Answered`:
      copyQuestions.sort((a, b) => b.replies.length - a.replies.length);
      setAllQuestions([...copyQuestions]);
      break;
  }
}