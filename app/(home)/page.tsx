"use client";

import { ActionResponse, Feedback } from "@/components/feedback";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center gap-4">
      <h1 className="text-6xl">Hack Club Mobile</h1>
      <div className="flex flex-row gap-2">
        <Link
          href="/docs"
          className="text-xl py-2 px-6 bg-fd-primary text-fd-primary-foreground rounded-xl"
        >
          Docs
        </Link>
      </div>
    </div>
  );
}
