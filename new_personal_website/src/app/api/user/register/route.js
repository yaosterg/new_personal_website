import { auth } from "../../../../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const primsa = new PrismaClient();

// export async function GET(req) {
//   return new Response("GET request: REgister API is working!", { status: 200 });
// }

export async function POST(req, res) {
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

    console.console.log("this is the response object", res);
    // res.status(200).json(data);
    return NextResponse.json({ message: "User created successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Registration error" },
      { status: 500 }
    );
  }
}
