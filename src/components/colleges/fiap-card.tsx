"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { User } from "@prisma/client";
import { format } from "date-fns";
import { UserRound } from "lucide-react";

const FiapCard = ({ user }: { user: User }) => {
  const [turn, setTurn] = useState<boolean>(true);
  return (
    <nav className="bg-black border-gray-700 flex flex-col h-lvh">
      <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/home"
          className="flex items-center space-x-3 rtl:space-x-reverse ms-2"
        >
          <svg
            className="w-5 h-5 text-[#860C35]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </Link>
        <span className="text-[#7C7C7C] font-bold">ID Digital FIAP</span>
        <svg
          className="w-5 h-5 fill-[#860C35]"
          viewBox="0 0 128 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
        </svg>
      </div>
      <div className="h-full bg-[#9D9692] p-4">
        <div className="flex flex-col h-full gap-10">
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-row gap-5">
              <button onClick={() => setTurn(!turn)}>
                <svg
                  className="w-8 h-8 fill-white"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"></path>
                </svg>
              </button>
              <svg
                className="w-8 h-8 fill-white"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"></path>
              </svg>
              <svg
                className="w-8 h-8 fill-white"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"></path>
              </svg>
            </div>
            <div>
              <svg
                className="w-8 h-8 fill-white"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"></path>
              </svg>
            </div>
          </div>
          {turn ? (
            <div className="flex flex-col h-full bg-black mb-12 rounded-[16px] items-center justify-center gap-6">
              <div className="w-2/4">
                {user.imageUrl ? (
                  <Image
                    className="w-[190px] h-[190px] rotate-90 rounded-full"
                    height={160}
                    width={160}
                    priority={true}
                    src="https://media.discordapp.net/attachments/1003715666706186302/1268672731520438404/31a775b7-2d4b-4f8d-830b-7a9a45e34f5a.png?ex=67710dcd&is=676fbc4d&hm=5d55f3c96bbb8f0de1ae6e99e05313bc57068393cc98284872b196b0d2dfaccd&=&format=webp&quality=lossless&width=351&height=468"
                    alt="card photo"
                  />
                ) : (
                  <div className="rounded-full bg-white w-[190px] h-[190px] rotate-90 flex items-center justify-center">
                    <UserRound size={150} className="text-slate-200" />
                  </div>
                )}
              </div>

              <div className="w-2/4 flex flex-col rotate-90 mt-12 font-bold text-[14px] text-[#EF1060] uppercase">
                <Image
                  className="w-[140px] h-[90px] rounded-full"
                  height={160}
                  width={160}
                  priority={false}
                  src="https://digitalks.com.br/expo/wp-content/uploads/sites/24/2023/05/fiap-digitalks-expo-2023.png"
                  alt="card logo"
                />
                <span className="flex w-full break-words overflow-wrap">
                  {user.name} {user.lastName}
                </span>
                <span className="text-[12px]">{user.course}</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full bg-black mb-12 rounded-[16px] items-center justify-center gap-6">
              <Image
                className="w-[180px] h-[120px] rounded-full rotate-90"
                height={160}
                width={160}
                priority={false}
                src="https://digitalks.com.br/expo/wp-content/uploads/sites/24/2023/05/fiap-digitalks-expo-2023.png"
                alt="card photo"
              />
              <hr className="my-4 w-3/5 h-0.5 border-t-0 bg-[#EF1060]" />
              <div className="flex flex-col rotate-90 mt-12 font-bold text-[14px] text-[#EF1060]">
                <span>
                  CPF: <span className="font-normal">{user.cpf}</span>
                </span>
                <span className="mb-4">
                  DATA DE NASCIMENTO:{" "}
                  <span className="font-normal">
                    {format(
                      user.birthDate?.toDateString() as string,
                      "dd/MM/yyyy"
                    )}
                  </span>
                </span>
                <span>
                  RM: <span className="font-normal">{user.documentNumber}</span>
                </span>
                <span>
                  VALIDADE: <span className="font-normal">JUL/26</span>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default FiapCard;
