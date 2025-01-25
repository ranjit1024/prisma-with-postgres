import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.findMany({
        where: {
            id: 3
        }
    })
    console.log(user)
}

main()  