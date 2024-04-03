import React from "react";
import { Button } from "./button";
import { auth, signOut } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

const DeleteButton = () => {
  return (
    <>
      <form>
        <Button
          formAction={async () => {
            "use server";
            const session = await auth();

            if (!session?.user?.email) {
              return null;
            }
            const currentUser = await getUserByEmail(session?.user?.email);
            await db.user.delete({
              where: {
                id: currentUser?.id,
              },
            });
            await signOut();
          }}
          variant="destructive"
          className="w-fit"
          size="lg"
        >
          DELETE
        </Button>
      </form>
    </>
  );
};

export default DeleteButton;
