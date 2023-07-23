"use client";

import { useState } from "react";
import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import Input from "../inputs/Input";
import { signIn } from "next-auth/react";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
        toast.success("Successfully registered");
        loginModal.onOpen();
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  let bodyContent = (
    <div className="flex flex-col gap-y-[30px] items-start w-full">
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        errors={errors}
        register={register}
        required
      />
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
        type="password"
        disabled={isLoading}
        errors={errors}
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
      className="underline cursor-pointer text-sm"
      onClick={() => {
        loginModal.onOpen();
        registerModal.onClose();
      }}
    >
      Already have an account? login here
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      title="Register"
      actionLabel="Register"
      onClose={registerModal.onClose}
      isOpen={registerModal.isOpen}
      body={bodyContent}
      footer={footer}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModal;
