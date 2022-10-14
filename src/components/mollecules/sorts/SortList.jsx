import { sortList } from '../../../libs/constant'

import { Suspense, lazy, memo } from 'react'

const SortItem = lazy(() => import('./SortItem'))

const SortList = () => {
  return (
    <div className='absolute top-4 md:top-8 -left-56 md:-left-24 w-56 h-56'>
      <div
        data-cy='sort-parent'
        className='w-full h-full flex flex-col items-stretch justify-between rounded-lg divide-y border bg-white'
      >
        <Suspense fallback={null}>
          {sortList.map((item) => (
            <SortItem key={item.title} {...item} />
          ))}
        </Suspense>
      </div>
    </div>
  )
}

export default memo(SortList)
