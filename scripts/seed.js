import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      username: "admin",
      email: "admin@example.com",
      password: "changeme",
      isAdmin: true
    }
  })

  await prisma.athlete.createMany({
    data: [
      { name: "Johannes Thingnes Bø", nation: "NOR" },
      { name: "Fabien Claude", nation: "FRA" },
      { name: "Emilien Jacquelin", nation: "FRA" }
    ]
  })

  await prisma.course.create({
    data: {
      name: "Sprint — Östersund",
      date: new Date(),
      type: "sprint",
      gender: "M"
    }
  })

  console.log("Seed ok")
}

main()
  .catch(err => console.error(err))
  .finally(() => process.exit())
