import { School } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

const collegeList = [
  { name: "ANHEMBI MORUMBI", icon: <School size={20} />, path: "/anhembi" },
  { name: "FIAP", icon: <School size={20} />, path: "/fiap" },
];

const CollegesList = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center">
      {collegeList.map((item) => (
        <Link key={item.name} href={item.path} className="w-4/5">
          <Card className="flex">
            <CardContent className="flex flex-row gap-2 items-center justify-center p-4">
              {item.icon}
              <p className="text-md font-medium">{item.name}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CollegesList;
