/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInference = /* GraphQL */ `
  mutation CreateInference(
    $input: CreateInferenceInput!
    $condition: ModelInferenceConditionInput
  ) {
    createInference(input: $input, condition: $condition) {
      id
      image
      query
      createdAt
      updatedAt
    }
  }
`;
export const updateInference = /* GraphQL */ `
  mutation UpdateInference(
    $input: UpdateInferenceInput!
    $condition: ModelInferenceConditionInput
  ) {
    updateInference(input: $input, condition: $condition) {
      id
      image
      query
      createdAt
      updatedAt
    }
  }
`;
export const deleteInference = /* GraphQL */ `
  mutation DeleteInference(
    $input: DeleteInferenceInput!
    $condition: ModelInferenceConditionInput
  ) {
    deleteInference(input: $input, condition: $condition) {
      id
      image
      query
      createdAt
      updatedAt
    }
  }
`;
export const createComparison = /* GraphQL */ `
  mutation CreateComparison(
    $input: CreateComparisonInput!
    $condition: ModelComparisonConditionInput
  ) {
    createComparison(input: $input, condition: $condition) {
      id
      image
      query
      createdAt
      updatedAt
    }
  }
`;
export const updateComparison = /* GraphQL */ `
  mutation UpdateComparison(
    $input: UpdateComparisonInput!
    $condition: ModelComparisonConditionInput
  ) {
    updateComparison(input: $input, condition: $condition) {
      id
      image
      query
      createdAt
      updatedAt
    }
  }
`;
export const deleteComparison = /* GraphQL */ `
  mutation DeleteComparison(
    $input: DeleteComparisonInput!
    $condition: ModelComparisonConditionInput
  ) {
    deleteComparison(input: $input, condition: $condition) {
      id
      image
      query
      createdAt
      updatedAt
    }
  }
`;
