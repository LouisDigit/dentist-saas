import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const existingUser = await db.user.findFirst({
      where: {
        id: params.userId,
      },
    });

    if (!existingUser) {
      return new NextResponse("User not found", { status: 401 });
    }
    const user = await db.user.deleteMany({
      where: {
        id: params.userId,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log("[USER_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
