export const typeDefs = `#graphql
    """Game type."""
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }

    """Review type."""
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    """Author type."""
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    type Query {
        """Retrieves a list of games."""
        games: [Game]

        """Retrieves a single game."""
        game(id: ID!): Game

        """Retrieves a list of authors."""
        authors: [Author]

        """Retrieves a single review."""
        author(id: ID!): Author

        """Retrieves a list of reviews."""
        reviews: [Review]

        """Retrieves a single review."""
        review(id: ID!): Review
    }

    type Mutation {
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!): [Game]
        updateGame(id: ID!, edits: EditGameInput!) : Game
    }

    input AddGameInput {
        title: String!
        platform: [String!]!
    }

    input EditGameInput {
        title: String
        platform: [String!]
    }
`;
