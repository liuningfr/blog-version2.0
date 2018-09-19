module.exports = {
  port: 3009,
  keys: ['key1', 'key2'], // session加密
  saltRounds: 5, // bcrypt加密
  mysql: {
    host: 'localhost',
    database: 'blog',
    username: 'root',
    password: 'avril1993',
  },
};
