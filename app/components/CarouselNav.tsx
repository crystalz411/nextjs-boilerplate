'use client'

import Link from 'next/link'

type Props = {
    current: number
}

export default function CarouselNav ({current}: Props) {

    const max = 5
    return (
        <div className='flex'>
         <div>
            {Array.from({length: max}).map((_, i) => {
                const page = i + 1
                return(
                    <Link
                    key={page}
                    href={``}
                    className={`w-4 h-4 rounded-full${page === current ? 'bg-white' : 'bg-gray-500'} `}
                    />
                )
            })}

         </div>

        </div>
    )

}