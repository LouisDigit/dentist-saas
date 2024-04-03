"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/ui/form-error";
import { FormSuccess } from "@/components/ui/form-success";
import { Input } from "@/components/ui/input";
import { FormEventHandler, useState, useTransition } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EditProfileSchema } from "@/schemas";
import { useSession } from "next-auth/react";
import { editProfile } from "@/actions/settings/edit-profile";
import { useRouter } from "next/navigation";

export type SettingsProfileFormProps = {};

const SettingsProfileForm: React.FC<SettingsProfileFormProps> = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const { data: session, update } = useSession();

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof EditProfileSchema>>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      name: session?.user?.name ? session.user.name : "",
      email: session?.user?.email ? session.user.email : "",
    },
  });

  const onSubmit = async (values: z.infer<typeof EditProfileSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      editProfile(values).then(async (data) => {
        if (data?.error) {
          setError(data.error);
          return;
        }
        setSuccess(data?.success);
        await update({ email: data?.email, name: data?.name });
        console.log(session);
        form.reset();
      });
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex flex-col w-full "
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder={`name...`}
                    disabled={isPending}
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className=""
                    autoComplete="off"
                    placeholder={`current email...`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" disabled={isPending} className="">
            Save
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SettingsProfileForm;
