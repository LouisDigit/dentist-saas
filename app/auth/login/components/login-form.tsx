"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { LoginSchema } from "@/schemas";
import { toast } from "react-hot-toast";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/ui/form-error";
import { FormEventHandler, useState } from "react";
import { FormSuccess } from "@/components/ui/form-success";
import { useTransition } from "react";
import { login } from "@/actions/auth/login";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

const LoginForm: React.FC = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    const result = await login(formData);

    if (result?.error) {
      setError(result.error);
      return;
    }
    setError("");

    toast.success("You are logged");
    router.push(`/dashboard`);
    router.refresh();
  };

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-6 flex flex-col w-full ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email..."
                  autoComplete="off"
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className=""
                  autoComplete="off"
                  type="password"
                  disabled={isPending}
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link
          href="/"
          className="text-blue-500 hover:text-blue-400 cursor-pointer self-end text-sm"
        >
          Forgot password ?
        </Link>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 hover:bg-blue-400 "
        >
          Sign In
        </Button>
        <p className="text-sm font-light text-center">
          Don’t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-blue-600 hover:text-blue-600/90"
          >
            Sign up
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
