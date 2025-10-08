import { prismaClient } from "@/lib/prisma";

export async function GET() {
  const users = await prismaClient.user.findMany();
  return new Response(JSON.stringify(users));
}
