module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd76225179d77f0213596abf3de374c01'),
  },
});
