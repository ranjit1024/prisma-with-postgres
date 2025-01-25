import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ['query'] });

async function main() {
    const user = await prisma.user.findMany({

    })
    console.log(user)
}

main()  