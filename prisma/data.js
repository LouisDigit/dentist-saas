const { Prisma } = require("@prisma/client");

const billings = [
  {
    name: "FREE",
    price: 0.0,
  },
  {
    name: "START",
    price: 19.99,
  },
  {
    name: "PREMIUM",
    price: 39.99,
  },
];

module.exports = {
  billings,
};
