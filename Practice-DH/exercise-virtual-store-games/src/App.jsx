import React from 'react'
import MotivationApp from './Motivation/MotivationApp.jsx'
import { WithContext } from './Components/WithContext.jsx'
import { ChangoContext, ChangoProvider } from './Contexts/ChangoContext.jsx'
import { useContext } from 'react'
import { NoContext } from './Components/NoContext.jsx'
import { useMemo } from 'react'

const App = () => {

  return (
    <div>
      <MotivationApp />
      {/* <NoContext />
      <ChangoProvider>
        <WithContext />
      </ChangoProvider> */}
    </div>
  )
}

export default App
