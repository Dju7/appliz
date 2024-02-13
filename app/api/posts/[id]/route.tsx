import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function DELETE(request: any, {params}: any) {
    const id = Number(params.id)
    const post = await db.post.delete({
        where: {id}
    })
    return NextResponse.json(post)
}