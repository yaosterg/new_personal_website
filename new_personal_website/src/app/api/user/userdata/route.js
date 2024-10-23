import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const uid = searchParams.get("uid");
  try {
    console.log("I am in this step of the process", uid);
    const user = await prisma.user.findUnique({
      where: { supabaseId: uid },
    });
    return new Response(
      JSON.stringify({
        message: "User found ",
        user: user,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.log("I have failed to find user", e);
    return new Response(
      JSON.stringify({
        message: "An error occured by finding user",
        e: e.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
