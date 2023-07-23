"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Input from "../inputs/Input";
import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("loggin in successfully");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  let bodyContent = (
    <div className="flex flex-col gap-y-[30px] items-start w-full">
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        errors={errors}
        register={register}
        required
      />
      <Input
        id="password"
        label="Passwod"
        disabled={isLoading}
        errors={errors}
        type="password"
        register={register}
        required
      />
      <div className="text-sm mt-[-0.8rem] text-black underline cursor-pointer">
        Forgot your password?
      </div>
    </div>
  );

  const footer = (
    <div
      className="underline cursor-pointer text-sm "
      onClick={() => {
        loginModal.onClose();
        registerModal.onOpen();
      }}
    >
      New Customer? Create your account
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      title="Login"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      isOpen={loginModal.isOpen}
      body={bodyContent}
      footer={footer}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default LoginModal;
