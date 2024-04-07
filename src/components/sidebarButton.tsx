import React from "react";

interface SidebarButtonProps {
  text: string;
  setActive: (text: string) => void; 
}

export const SidebarButton: React.FC<SidebarButtonProps> = ({
  text,
  setActive,
}) => {
  return (
    <div
      onClick={() => {
        setActive(text.toLowerCase());
      }}
      className="w-full cursor-pointer bg-[#d7dfdf] px-2 py-2"
    >
      {text}
    </div>
  );
};

export const SidebarHeading = ({ text }: { text: string }) => {
  return <div className="w-full cursor-pointer px-2 py-2 border-b">{text}</div>;
};
