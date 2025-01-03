import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaSpinner } from "react-icons/fa6";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
      aria-label={isLoading ? "Loading...." : "Submit"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg "
            alt="Loading icon"
            
            width={24}

            height={24}
            className="animate-spin"
          />
          <FaSpinner />
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
