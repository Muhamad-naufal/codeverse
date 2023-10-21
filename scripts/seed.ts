const  { PrismaClient } = require('@prisma/client')

const database = new PrismaClient()

async function main() {
    try {
        await database.category.createMany({
            data: [
                {name: 'Informatika'},
                {name: 'Komputer'},
                {name: 'Mobile Development'},
                {name: 'Web Development'},
                {name: 'Game Development'},
                {name: 'Multimedia'},
                {name: 'Desain Grafis'},
            ]
            
        });
        console.log('Success seeding data');
    } catch (error) {
        console.log('Failed seeding data'); 
    } finally {
        await database.$disconnect();
    }
}

main();