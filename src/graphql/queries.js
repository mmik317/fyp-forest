/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInference = /* GraphQL */ `
  query GetInference($id: ID!) {
    getInference(id: $id) {
      id
      image
      query
      createdAt
      updatedAt
    }
  }
`;
export const listInferences = /* GraphQL */ `
  query ListInferences(
    $filter: ModelInferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        query
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComparison = /* GraphQL */ `
  query GetComparison($id: ID!) {
    getComparison(id: $id) {
      id
      image
      query
      createdAt
      updatedAt
    }
  }
`;
export const listComparisons = /* GraphQL */ `
  query ListComparisons(
    $filter: ModelComparisonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComparisons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        query
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const inferenceByQuery = /* GraphQL */ `
  query InferenceByQuery(
    $query: String!
    $sortDirection: ModelSortDirection
    $filter: ModelInferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inferenceByQuery(
      query: $query
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        image
        query
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const comparisonByQuery = /* GraphQL */ `
  query ComparisonByQuery(
    $query: String!
    $sortDirection: ModelSortDirection
    $filter: ModelComparisonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    comparisonByQuery(
      query: $query
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        image
        query
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
