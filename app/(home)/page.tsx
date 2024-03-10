import { auth } from "@/auth"
import NavBar from "@/components/shared/NavBar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const session = await auth()
  // console.log("session:", session)

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500">
      <div className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto">
        <NavBar />
        <main className="flex flex-1 flex-col md:flex-row items-center justify-center px-8 mt-4">
          <div className="flex-1 md:text-left text-center h-full">
            <h1 className="text-4xl md:text-6xl font-bold">SnapChat App</h1>
            <p className="mt-4 text-xl font-semibold">
              Share your code with your friends to get feedback and improve your
              code.
            </p>
            <div className="mt-4">
              <p className="mt-2 text-lg font-semibold">
                What are you waiting for?
              </p>
            </div>
            {!session ? (
              <Button
                asChild
                className="mt-4 bg-black text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0"
              >
                <Link href={"/login"} className="max-w-max">
                  <Image
                    src="/logo.svg"
                    width={20}
                    height={20}
                    alt="Snapchat logo"
                  />
                  Log in now !
                </Link>
              </Button>
            ) : (
              <Button
                asChild
                className="mt-4 bg-black text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0"
              >
                <Link href={"/chat"} className="max-w-max">
                  <Image
                    src="/logo.svg"
                    width={20}
                    height={20}
                    alt="Snapchat logo"
                  />
                  Start chatting
                </Link>
              </Button>
            )}
          </div>
          <div className="flex-1 md:w-full md:flex">
            <Image
              alt="Avatar"
              width={651}
              height={621}
              src="/hero.png"
              priority
            />
          </div>
        </main>
      </div>
    </div>
  )
}
