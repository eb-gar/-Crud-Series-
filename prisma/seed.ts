import { PrismaClient } from "@prisma/client";
import e from "express";

// se inicia el prisma client en una constante
const prisma = new PrismaClient();


async function main() {
    // se crea una funcion 
    const post1 = await prisma.series.upsert({
        where: {name: 'Breaking bad'},
        update:{},
        create: {
            name: 'Breaking bad',
            description: 'Breaking Bad is a show about a chemistry teacher who turns into a drug manufacturer after being diagnosed with cancer.',
            year: 2008-2013,
            genre: ' Drama, Crimen',
        },
    });

    const post2 = await prisma.series.create({
        data: {
            name: 'Breaking bad',
            description: 'Breaking Bad is a show about a chemistry teacher who turns into a drug manufacturer after being diagnosed with cancer.',
            year: 2008-2013,
            genre: ' Drama, Crimen',
        },
    });

    console.log({ post1, post2 });
}

// si esxiste algun error
main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
// se cierra el prisma
.finally(async () => {
    await prisma.$disconnect;
});

