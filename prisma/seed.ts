import { PrismaClient } from "@prisma/client";
import e from "express";

const prisma = new PrismaClient();


async function main() {
    const post1 = await prisma.series.upsert({
        where: {name: 'Breaking bad'},
        update:{},
        create: {
            name: 'Breaking bad',
            description: 'Breaking Bad is a show about a chemistry teacher who turns into a drug manufacturer after being diagnosed with cancer.',
            year: 2008,
            genre: 'Drama, Crimen',
            platform: 'Max',
            recommendation: true,
        },
    });

    const post2 = await prisma.series.upsert({
        where: {name: 'Better Call Saul'},
        update:{},
        create: {
            name: 'Better Call Saul',
            description: 'Better Call Saul is a spin-off of Breaking Bad, focusing on the character of Saul Goodman before the events of the original series.',
            year: 2015,
            genre: 'Drama, Crimen',
            platform: 'Netflix',
            recommendation: true,
        },
    });

    const post3 = await prisma.series.upsert({
        where: {name: 'Presumed innocent'},
        update:{},
        create: {
            name: 'Presumed innocent',
            description: 'A gruesome murder shakes the Chicago District Attorneys Office when one of their own is suspected of the crime. The accused will have to fight to keep their family together.',
            year: 2024,
            genre: 'Thriller',
            platform: 'Apple TV+',
            recommendation: true,
        },
    });

    const post4 = await prisma.series.upsert({
        where: {name: 'Euphoria'},
        update:{},
        create: {
            name: 'Euphoria',
            description: 'A group of high school students navigates through drugs, sexual relationships, trauma, social media, love, and friendship.',
            year: 2019,
            genre: 'Drama, Thriller',
            platform: 'HBO',
            recommendation: true,
        },
    });

    const post5 = await prisma.series.upsert({
        where: {name: 'The Boys'},
        update:{
            recommendation: false
        },
        create: {
            name: 'The Boys',
            description: 'When superheroes abuse their superpowers instead of using them for good, a group of "boys" embarks on a heroic quest to expose their secrets.',
            year: 2019,
            genre: 'Action, Drama',
            platform: 'Amazon Prime Video.',
            recommendation: false,
        },
    });

    console.log({ post1, post2, post3, post4, post5 });
}

main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})

.finally(async () => {
    await prisma.$disconnect;
});

