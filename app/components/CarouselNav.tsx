'use client'

import Link from 'next/link'

type Props = {
    current: number
}

export default function CarouselNav({ current }: Props) {
    const max = 5;
  
    return (
      <div className="absolute bottom-50 w-full flex justify-center pb-6">
        <div className="flex h-10 gap-x-4">
          {Array.from({ length: max }).map((_, i) => {
            const page = i + 1;
            return (
              <Link
                key={page}
                href={`/question-${page}`}
                className={`flex items-center justify-center w-16 p-2 rounded-2xl
                  ${page === current ? 'bg-blue-700' : 'bg-blue-500'} text-white`}
              >
                {page}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }