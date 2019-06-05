import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from "graphql";
import people from './data/people';

let humanType = new GraphQLObjectType({
  name: "Human",
  fields: () => ({
    id: { type: GraphQLString },
    description: { type: GraphQLString },
    name: { type: GraphQLString }
  })
});

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "World";
        }
      },
      person: {
        type: humanType,
        resolve() {
          return people[0];
        }
      },
      people: {
        type: new GraphQLList(humanType),
        resolve() {
          return people;
        }
      }
    }
  })
});

export { graphql };
export default schema;