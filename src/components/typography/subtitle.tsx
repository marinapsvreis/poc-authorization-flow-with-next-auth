import React from "react";

interface SubtitleProps {
  children: React.ReactNode;
}

export default function Subtitle({ children }: SubtitleProps) {
  return <p className="text-lg">{children}</p>;
}
