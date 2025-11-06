import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function HeroPage() {
  async function launchConsoleAction() {
    "use server";
    const { userId } = await auth();
    if (userId) {
      redirect("/console");
    } else {
      redirect("/sign-in?redirect_url=/console");
    }
  }
  return (
    <div>
      <form action={launchConsoleAction} className="hidden md:flex">
        <Button type="submit"
          className="purple-primary-button">
          Launch Console
        </Button>
      </form>
    </div>
  );
}
