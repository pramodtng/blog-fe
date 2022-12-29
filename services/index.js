import { request, gql } from "graphql-request";

const graphqlApi = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getPosts = async () => {
  const query = gql`
    query {
      posts(sort: "createdAt:desc") {
        data {
          id
          attributes {
            title
            slug
            excerpt
            createdAt
            image {
              data {
                attributes {
                  url
                }
              }
            }
            writer {
              data {
                attributes {
                  name
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlApi, query);
  return result;
};

export const getRecentPosts = async () => {
  const query = gql`
    query {
      posts(sort: "createdAt:desc", pagination: { start: 0, limit: 3 }) {
        data {
          id
          attributes {
            title
            createdAt
            slug
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlApi, query);

  return result;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        data {
          id
          attributes {
            name
            slug
          }
        }
      }
    }
  `;

  const result = await request(graphqlApi, query);

  return result;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query {
      posts(filters: { featuredPost: { eq: true } }) {
        data {
          id
          attributes {
            title
            createdAt
            image {
              data {
                attributes {
                  url
                }
              }
            }
            writer {
              data {
                attributes {
                  name
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlApi, query);

  return result;
};


