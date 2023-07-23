"use client";

import { signOut } from "next-auth/react";
import { RxDashboard } from "react-icons/rx";
import Container from "../components/Container";
import Header from "../components/Header";
import { CiLocationOn } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { SafeUser } from "../types";
import React from "react";

interface AccountClientProps {
  currentUser: SafeUser | null;
}

const AccountClient: React.FC<AccountClientProps> = ({ currentUser }) => {
  const router = useRouter();
  return (
    <div className="mt-[50px] md:mt-[148px]">
      <Header title="MY ACCOUNT" />
      <Container small={true}>
        <div className="flex flex-col md:flex-row items-start justify-center gap-4 mt-10 mb-10 md:mb-0">
          {/* div left */}
          <div className="w-full flex flex-col flex-1">
            <button className="flex items-center justify-start gap-2 p-2 border hover:bg-gray-100 bg-gray-100">
              <RxDashboard size={20} className="text-neutral-600" />
              <p className="text-[16px] text-neutral-600">Dashboard</p>
            </button>
            <button className="flex items-center justify-start gap-2 p-2 border hover:bg-gray-100">
              <CiLocationOn size={20} className="text-neutral-600" />
              <p className="text-[16px] text-neutral-600">Address</p>
            </button>
            <button
              className="flex items-center justify-start gap-2 p-2 border hover:bg-gray-100"
              onClick={() => {
                router.push("/");
                signOut();
              }}
            >
              <FiLogOut size={20} className="text-neutral-600" />
              <p className="text-[16px] text-neutral-600">Log out</p>
            </button>
          </div>
          {/* div right */}
          <div className="flex-[3] mt-4 md:md-0 w-full">
            <div>
              Hello <b>{currentUser?.name} </b> (not <b>{currentUser?.name}</b>?{" "}
              <span
                onClick={() => {
                  router.push("/");
                  signOut();
                }}
                className="underline cursor-pointer"
              >
                log out
              </span>
              )
            </div>

            <div className="flex flex-col gap-2 mt-2 w-full">
              <div className="font-bold">Order History:</div>
              <div className="flex flex-col md:items-center md:flex-row md:gap-x-2 gap-1">
                <div
                  className="underline cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  Make Your first order
                </div>
                <div className="text-neutral-500">
                  You haven&apos;t placed any orders yet.
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="font-bold mb-4">Order History:</div>
              <div className="mb-2 text-neutral-500">{currentUser?.name}</div>
              <div className="text-neutral-500">
                Email: {currentUser?.email}
              </div>
            </div>
            {/* table */}
            <div className="flex flex-col text-sm w-full mt-6">
              <div className="flex w-full">
                <div className="flex-1 p-2 border font-semibold text-neutral-500 w-full">
                  Name:
                </div>
                <div className="p-2 text-neutral-500 border flex-[3]">
                  {currentUser?.name}
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex-1 p-2 border font-semibold text-neutral-500">
                  Email:
                </div>
                <div className="p-2 text-neutral-500 border flex-[3]">
                  {currentUser?.email}
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex-1 p-2 border font-semibold text-neutral-500">
                  Address:
                </div>
                <div className="p-2 text-neutral-500 border flex-[3]">
                  Enter address
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex-1 p-2 border font-semibold text-neutral-500">
                  Address 2:
                </div>
                <div className="p-2 text-neutral-500 border flex-[3]">
                  Enter Second address
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AccountClient;
