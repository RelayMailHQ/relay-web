"use client"
import Image from "next/image"

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src="/relay-hq.png" alt="relay hq logo" width={100} height={100} className="rounded-3xl mb-2" />
      <h1 className="text-4xl font-bold mb-2">Relay HQ</h1>
      <h1 className="text-xl font-semibold text-gray-500">Under Construction</h1>
    </div>
  )
}

export default Main