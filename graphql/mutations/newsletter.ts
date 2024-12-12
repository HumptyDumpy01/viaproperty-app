import gql from 'graphql-tag';

export const ADD_NEWSLETTER_EMAIL = gql`
    mutation AddNewsletterEmail($email: String!) {
        newsletter(newsletterInput: { email: $email }) {
            email
        }
    }
`;