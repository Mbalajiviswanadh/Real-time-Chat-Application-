"use client";
import React from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { Button } from "./button";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function ChatHeader({ user }: { user: User | undefined }) {
  const router = useRouter();

  const handleLoginWithGithub = () => {
    const supabase = supabaseBrowser();

    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  };

  const handleLogout = async () => {
    const supabase = supabaseBrowser();

    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <div className="h-20">
      <div className="p-5 border-b flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Daily Chat</h1>

          <div className="flex gap-2 items-center">
            <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
            <h1 className="text-sm text-gray-400 border-b border-orange-200">
              2 Onlines.
            </h1>
          </div>
        </div>
        {user ? (
          <Button
            onClick={handleLogout}
            className="text-sm"
            variant="destructive">
            Logout
          </Button>
        ) : (
          <Button
            onClick={handleLoginWithGithub}
            className="text-sm"
            variant="destructive">
            Login
          </Button>
        )}
      </div>
    </div>
  );
}
