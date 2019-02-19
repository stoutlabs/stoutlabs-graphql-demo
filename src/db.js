const users = [
  {
    id: '1',
    name: 'Daniel',
    email: 'daniel@example.com',
    age: 41
  },
  {
    id: '2',
    name: 'Darude',
    email: 'darude@sandstorm.com',
    age: 50
  },
  {
    id: '3',
    name: 'Pee-Wee',
    email: 'peewee@example.com',
    age: 52
  }
];

const posts = [
  {
    id: '21',
    title: "How to Write GraphQL Queries",
    body: "<p>Coming soon!</p>",
    published: true,
    author: '1'
  },
  {
    id: '22',
    title: "Ya Momma's So Fat...",
    body: "<p>How fat is she?</p>",
    published: true,
    author: '2'
  },
  {
    id: '23',
    title: "Advanced Basket Weaving Concepts",
    body: "<p>Now even more advanced!</p>",
    published: false,
    author: '1'
  },
];

const comments = [
  {
    id: '11',
    body: `<p>Ayyyy, here is a comment!</p>`,
    author: '1',
    post: '22'
  },
  {
    id: '12',
    body: `<p>First, bitches!</p>`,
    author: '3',
    post: '21'
  },
  {
    id: '13',
    body: `<p>KKona 'murica</p>`,
    author: '3',
    post: '22'
  }
];


const db = {
  users,
  posts,
  comments
};

export { db as default };