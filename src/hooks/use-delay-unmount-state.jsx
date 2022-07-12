import * as React from 'react';

export default function useDelayUnmountState(state, delayTime) {
  const [ shouldMount, setShouldMount ] = React.useState(false);

  React.useEffect(() => {
    let timerId
    if (!state && shouldMount) timerId = setTimeout(() => setShouldMount(false), delayTime)
    else if (state && !shouldMount) setShouldMount(true)

    return () => clearTimeout(timerId)

  }, [state, delayTime])
  return shouldMount
}