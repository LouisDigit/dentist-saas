"use client";

import { EditProfilePasswordSchema } from "@/schemas";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/ui/form-error";
import { FormSuccess } from "@/components/ui/form-success";
import { Button } from "@/components/ui/button";
import { editProfilePassword } from "@/actions/settings/edit-profile-password";

export type EditPasswordFormProps = {
  visible: boolean;
};

const EditPasswordForm: React.FC<EditPasswordFormProps> = ({ visible }) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof EditProfilePasswordSchema>>({
    resolver: zodResolver(EditProfilePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof EditProfilePasswordSchema>
  ) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      editProfilePassword(values).then((data) => {
        if (data?.error) setError(data.error);
        if (data?.success) {
          setSuccess(data.success);
          form.reset();
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`overflow-hidden space-y-6 transition-height duration-300 ${
          visible ? "h-[350px] " : "min-h-0 h-0"
        } flex flex-col w-full text-white`}
      >
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current password</FormLabel>
              <FormControl>
                <Input
                  placeholder="current password..."
                  autoComplete="off"
                  type="password"
                  className="focus:border-blue-500 focus:outline-none border-gray-900 bg-gray-900"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New password</FormLabel>
              <FormControl>
                <Input
                  placeholder="new password..."
                  autoComplete="off"
                  type="password"
                  className="focus:border-blue-500 focus:outline-none border-gray-900 bg-gray-900"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input
                  placeholder="confirm password..."
                  autoComplete="off"
                  type="password"
                  className="focus:border-blue-500 focus:outline-none border-gray-900 bg-gray-900"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 hover:bg-blue-400 "
        >
          Save
        </Button>
      </form>
    </Form>
  );
};

export default EditPasswordForm;
