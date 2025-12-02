import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

  // Athlètes de test
  await prisma.athlete.createMany({
    data: [
      { name: "Quentin Fillon-Maillet", country: "FRA", gender: "M" },
      { name: "Emilien Jacquelin", country: "FRA", gender: "M" },
      { name: "Johannes Boe", country: "NOR", gender: "M" },
      { name: "Julia Simon", country: "FRA", gender: "F" },
      { name: "Ingrid Tandrevold", country: "NOR", gender: "F" }
    ]
  })

  // Course de test
  const event = await prisma.event.create({
    data: {
      name: "Course de test",
      date: new Date(),
    }
  })

  console.log("Seed OK - un event créé avec ID =", event.id)
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
  })
