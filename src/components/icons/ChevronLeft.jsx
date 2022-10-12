import { memo } from 'react'

const ChevronLeft = ({ className = 'h-6 w-6', ...props }) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    style={{color:'#D8D9CF',cursor:'pointer', width: '4%', border:'solid 1px #EDEDED', borderRadius:'50%',marginRight: 8 }}
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
  </svg>
)

export default memo(ChevronLeft)
