import React, { useEffect } from 'react'

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.addEventListener('click', handleClick)
    }
  })
}

export default useOutsideClick
