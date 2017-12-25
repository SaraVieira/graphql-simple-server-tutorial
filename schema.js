export default `

type Talk {
  _id: String
  name: String
  conferenceName: String
  video: String
  votes: Int
  description: String
  speakerName: String
  date: String
}

type Query {
  allTalks(
    name: String,
    conferenceName: String,
    video: String,
    description: String,
    speakerName: String,
  ): [Talk!]!,

  getTalk(
    id: String!
  ): Talk!
}

type Mutation {
  createTalk(
    name: String!,
    conferenceName: String!,
    video: String!,
    description: String!,
    speakerName: String!,
    date: String!
  ): Talk!


  upvoteTalk(
    id: String!
  ): Talk!
}

`
