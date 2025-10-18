import { PrismaClient } from "../lib/generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: { name: "Leyla", email: "Leyla@example.com" },
  // });
  // console.log("✅ User created!");
  // const country = await prisma.country.create({
  //   data: { name: "Iraq" },
  // });
  // console.log("✅ Country created!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
