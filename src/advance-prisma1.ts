import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    let res = await prisma.post.findMany({
        take: 2,
        skip: 2,
    })
    console.log(res);
}

main()