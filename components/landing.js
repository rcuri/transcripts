/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import { MicrophoneIcon } from '@heroicons/react/24/outline'

export default function Landing() {
  return (
    <div className="relative bg-rose-950 mb-20">
      <div className="ml-20 mt-20 h-56 bg-rose-950 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/3">
        <Image
          className="object-cover rounded-3xl aspect-auto"
          src="/kevin-reggie.jpg"
          width={2048}
          height={1312}
          alt="reggie and kevin"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10 text-center">
          <div className="justify-center flex">
            <MicrophoneIcon height={200} />
          </div>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-8xl">TranscriptAI</p>
          <p className="mt-3 text-lg text-gray-300">
            If you're like me and can't get enough of Reggie Miller and Kevin Harlan, then you've come to the right place.
            Generate transcripts of your favorite games using play-by-play data.
          </p>
        </div>
      </div>
    </div>
  )
}
