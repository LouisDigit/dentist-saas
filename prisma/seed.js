const { PrismaClient } = require("@prisma/client");

const { billings } = require("./data");

const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.billing.createMany({
      data: billings,
    });
    console.log("Billings are created.");
  } catch (error) {
  } finally {
    await prisma.$disconnect();
  }
};

load();
