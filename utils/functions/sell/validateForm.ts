export function validateForm(validationStages: { stage: string, label: string, optional: boolean }[]) {
  for (const { stage, label, optional } of validationStages) {
    if (stage === `neutral` && !optional) {
      return `please provide a valid "${label}" for your property.`;
    }
    if (stage === `error` && optional) {
      return `please provide a valid "${label}" for your property.`;
    }
  }
  return null;
}