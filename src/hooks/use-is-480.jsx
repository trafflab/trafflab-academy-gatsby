import React from "react";

export function useIs480v1() {
  const [is480, setIs480] = React.useState('init');

  React.useEffect(() => {
    const handleResize = () => {
      if (document.body.clientWidth <= 480 && (is480 ==='init' || !is480)) setIs480(true)
      else if (document.body.clientWidth > 480 && (is480 ==='init' || is480)) setIs480(false)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [is480]);

  return is480;
}

export default function useIs480() {
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