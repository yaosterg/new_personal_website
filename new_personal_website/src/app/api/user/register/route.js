import { auth } from "../../../../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Prisma, PrismaClient } from "@prisma/client";
import axios from "axios";

const primsa = new PrismaClient();

export async function GET(req) {
  return new Response("GET request: REgister API is working!", { status: 200 });
}

export async function POST(req, res, next) {
  const { email, password } = await req.json();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const newUser = await primsa.user.create({
      data: {
        supabaseId: user.uid,
        email: email,
        password: password,
      },
    });
    res.status(200).json({ user: newUser });
  } catch (err) {
    console.log("Error creating user:", err);
    res.status(500).json({ err: "User creation failed" });
  }
}
