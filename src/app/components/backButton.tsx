"use client";

import { useRouter } from "next/navigation";
import BackArrowIcon from "@/app/components/icons/backArrowIcon";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      aria-label="Go back"
      className="absolute left-5 top-5 z-30 hover:drop-shadow-[0_0_8px_currentColor]"
      onClick={() => router.push("/work")}
    >
      {/* Use your BackArrowIcon here or import it */}
      <BackArrowIcon />
    </button>
  );
}
