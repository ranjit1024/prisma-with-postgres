import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.post.create({
        data: {
            title: "how to make babies",
            content: 'have intercourse',
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })
}


main();