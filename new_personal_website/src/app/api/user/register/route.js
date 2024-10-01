import { auth } from "../../../../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Prisma, PrismaClient } from "@prisma/client";

const primsa = new PrismaClient();

export async function POST(req) {
  const { email, password, firstName, lastName } = await req.json();

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      firstName,
      lastName
    );

    const user = userCredential.user;

    const newUser = await primsa.user.create({
      data: {
        supabaseId: user.uid,
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      },
    });
    console.log("Successfully created user");
    return new Response(
      JSON.stringify({
        message: "User creation request successfully processed",
        user: newUswer,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log("I have failed at life");
    return new Response(
      JSON.stringify({
        message: "An error occured by creating user",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
