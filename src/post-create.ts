import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.post.create({
        data: {
            title: "how to be developer ",
            content: "Practice",
            authorId: 1,
            published: true,
        }
    })
}


main();