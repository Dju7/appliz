import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const users = await db.user.findMany({
    include: {
      posts: true, // Inclure les posts associés à chaque utilisateur
    },
  });

  return NextResponse.json(users);
}