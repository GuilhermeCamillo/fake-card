"use client";

import React from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer";
import { Settings, UserRound } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { User } from "@prisma/client";
import { ScrollArea } from "../ui/scroll-area";

const AnhembiCard = ({ user }: { user: User }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Drawer defaultOpen open={true}>
      <DrawerContent className="shadow-md h-3/4">
        <DrawerHeader>
          <DrawerTitle className="text-gray-500 font-medium">
            Minha UAM identidade
          </DrawerTitle>
          <Link className="absolute top-9 right-4" href="/home">
            <Settings />
          </Link>
        </DrawerHeader>
        <ScrollArea>
          <div className="flex flex-col p-6 w-full max-w-xl mx-auto">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {[1, 2].map((item, index) => (
                  <CarouselItem key={index}>
                    {index === 0 ? (
                      <Card className="bg-[#0ca788]">
                        <CardContent className="flex flex-col aspect-video p-2">
                          <div className="flex flex-row justify-between h-[50%] p-2">
                            {user?.imageUrl ? (
                              <Image
                                className="w-[65px] h-[65px] rounded-full"
                                height={65}
                                width={65}
                                priority={true}
                                src={user.imageUrl}
                                alt="card photo"
                              />
                            ) : (
                              <div className="rounded-full bg-white w-[65px] h-[65px] flex items-center justify-center">
                                <UserRound
                                  size={55}
                                  className="text-slate-200"
                                />
                              </div>
                            )}
                            <Image
                              src={"/UAMSR_fundo.png"}
                              width={90}
                              height={60}
                              className="absolute right-5 top-5"
                              alt="santander"
                            />
                          </div>
                          <div className="flex flex-col h-[50%] p-2 text-white mt-auto justify-end">
                            <p className="font-bold text-sm">
                              {user.name} {user.lastName}
                            </p>
                            <p className="font-semibold text-sm">
                              Universidade Anhembi Morumbi
                            </p>
                            <p className="font-thin text-sm">
                              Estudante {user.documentNumber}
                            </p>
                            <Image
                              src={"/santander1-logo.png"}
                              width={70}
                              height={40}
                              className="absolute right-4 bottom-5"
                              alt="santander"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Image
                          src={"/qrcode.png"}
                          width={160}
                          height={50}
                          alt="santander"
                          className="rounded-md"
                        />
                      </div>
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="flex justify-center gap-2 mt-4">
              {[1, 2].map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    current === index ? "bg-[#0ca788]" : "bg-muted"
                  )}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full items-center justify-center mt-3">
            <p className="text-lg w-3/4 text-center">
              Use seu UAM ID para se identificar no campus
            </p>
            <hr className="w-[90%] my-5 h-0.5 border-t-0 bg-neutral-300" />
            <Image
              src={"/bolsa-santander.jpg"}
              width={120}
              height={50}
              alt="santander"
              className="w-[80%] rounded-md mb-4"
            />
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default AnhembiCard;
