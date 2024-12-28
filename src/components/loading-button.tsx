import React from "react";
import { Button } from "./ui/button";

interface LoadingButtonProps {
  title: string;
  isLoading: boolean;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
}

const LoadingButton = ({
  title,
  isLoading,
  type = "button",
  className = "",
}: LoadingButtonProps) => {
  return (
    <Button type={type} className={className}>
      {isLoading ? <span className="loader"></span> : title}
    </Button>
  );
};

export default LoadingButton;
