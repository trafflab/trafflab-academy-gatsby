import React from "react";

export default function useIs480() {
  const [is480, setIs480] = React.useState('init');

  const handleCheckIs480 = () => {
    if (document.body.clientWidth <= 480) return true
    else if (document.body.clientWidth > 480) return false
  }
  React.useEffect(() => {
    const handleResize = () => setIs480(handleCheckIs480())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  if (is480 === 'init' && typeof window !== 'undefined') return handleCheckIs480()

  return is480;
}

export function useIs480v1() {
  const [is480, setIs480] = React.useState('init');

  React.useEffect(() => {
    const mediaMatch = window.matchMedia('(max-width: 480px)')
    const updateState = () => {
      setIs480(mediaMatch.matches)
    }
    setIs480(mediaMatch.matches)
    mediaMatch.addEventListener('change', updateState)
    return () => mediaMatch.removeEventListener('change', updateState)
  }, []);

  if (is480 === 'init' && typeof window !== 'undefined') return window.matchMedia('(max-width: 480px)').matches
  return is480;
}