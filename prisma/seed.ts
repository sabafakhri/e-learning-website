import { prisma } from "../lib/prisma-simple";

async function main() {
  await prisma.user.create({
    data: { name: "Zahra", email: "zahra@example.com" },
  });
  console.log("User created ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
