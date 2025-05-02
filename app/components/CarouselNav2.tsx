'use client'

import Link from 'next/link'

export default function CarouselNav2() {
  const max = 5

  return (
    <div className="w-full flex justify-center mt-12">
      <div className="flex gap-4">
        {Array.from({ length: max }).map((_, i) => {
          const page = i + 1
          return (
            <Link
              key={page}
              href={`/question-${page}`}
              className="flex items-center justify-center w-40 p-2 text-white"
            >
              {`Question ${page} →`}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
