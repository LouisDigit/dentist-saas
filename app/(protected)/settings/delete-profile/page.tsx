"use client";
import { AlertModal } from "@/components/modals/alert-modal";
import { Button } from "@/components/ui/button";
import DeleteButton from "@/components/ui/delete-button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const SettingsDeleteProfilePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const currentUser = useCurrentUser();
  console.log(currentUser);

  const onDelete = async () => {
    setLoading(true);

    if (currentUser?.id) {
      try {
        await axios.delete(`/api/user/${currentUser?.id}`);
        await signOut();
      } catch (error) {
        toast.error("Error on delete");
      }
    }

    setLoading(false);
    setOpen(false);
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex flex-col mb-8 gap-y-2">
        <h1 className="text-xl font-bold">Delete your profile</h1>
        <p className="text-md font-light text-gray-400">
          Deleting your account means that all your personal data will be
          permanently erased and your ongoing subscription will be terminated.
          Please be aware that this action is irreversible
        </p>
      </div>
      <Button
        variant="destructive"
        onClick={() => setOpen(true)}
        className="w-fit"
      >
        Delete profile
      </Button>
    </>
  );
};

export default SettingsDeleteProfilePage;
