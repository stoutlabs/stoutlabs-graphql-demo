const Query = {
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }

    return db.posts.filter((post, i) => {
      const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
      const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
      return isTitleMatch || isBodyMatch;
    });
  },
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter((user, i) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase())
    });
  },
  comments(parent, args, { db }, info) {
    if (!args.query) {
      return db.comments;
    }

    return db.comments;
  }
};

export { Query as default };