import { memo } from 'react'

/**
 * a Button component tat will display a button with
 * a blue background color and white text color
 * @param {{children: React.ReactNode onClick: () => void | null, className?: string }} param0
 * @returns
 */

const Button = ({ children, className = 'bg-sky-500 hover:bg-sky-600 text-white ', ...props }) => {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center space-x-1 md:space-x-1.5 py-2 px-2 sm:px-4 md:py-3 md:px-5 rounded-full active:scale-95 ${className}`}
    >
      {children}
    </button>
  )
}

export default memo(Button)
