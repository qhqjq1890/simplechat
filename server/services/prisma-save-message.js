const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function prismaSaveMessage(message, username, room, __createdtime__) {
  const createMessage = await prisma.messages.create({
    data: {
      message: message,
      username: username,
      room: room,
      created_time: __createdtime__,
    },
  });

  if (createMessage) {
    return createMessage;
  }
}

module.exports = prismaSaveMessage;
