const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function prismaGetMessage(room) {
  const getMessage = await prisma.messages.findMany({
    where: {
      room: room,
    },
    select: {
      message: true,
      username: true,
      created_time: true,
    },
  });

  if (getMessage) {
    return getMessage;
  }
}

module.exports = prismaGetMessage;
