import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto md:py-10 h-screen">
      <div className="h-full border  rounded-md">
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
            <Button className="text-sm" variant="destructive">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
