"use client";

import { useState } from "react";

import { Plus } from "lucide-react";
import SettingsProfileForm from "../components/settings-profile-form";
import EditPasswordForm from "../components/edit-password-form";

const SettingsProfilePage = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  return (
    <>
      <div className="flex flex-col  mb-8 gap-y-2">
        <h1 className="text-xl font-bold">Edit your profile</h1>
      </div>
      <SettingsProfileForm />
      <div className="w-full flex justify-between md:mt-10">
        <span
          className="text-sm border-b cursor-pointer"
          onClick={() => setShowPasswordForm(!showPasswordForm)}
        >
          Change password
        </span>
        <Plus
          size={24}
          className={`${
            showPasswordForm ? "rotate-45" : ""
          } transition-all duration-200 cursor-pointer`}
          onClick={() => setShowPasswordForm(!showPasswordForm)}
        />
      </div>
      <hr className="border-gray-700" />
      <EditPasswordForm visible={showPasswordForm} />
    </>
  );
};

export default SettingsProfilePage;
