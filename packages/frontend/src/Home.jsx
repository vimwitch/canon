import React from 'react'
import { observer } from 'mobx-react-lite'
import './home.css'
import HSelector from './components/HSelector'
import Button from './components/Button'
import Section from './components/Section'
import CanonSection from './components/CanonSection'

import User from './contexts/User'
import Canon from './contexts/canon'
import Highlight from './contexts/highlights'

export default observer(() => {
  const [isWriting, setIsWriting] = React.useState(false)
  const [writing, setWriting] = React.useState('')
  const [graffiti, setGraffiti] = React.useState('')
  const [visibleSection, setVisibleSection] = React.useState(0)
  const userContext = React.useContext(User)
  const canonContext = React.useContext(Canon)
  const highlightContext = React.useContext(Highlight)
  const [remainingTime, setRemainingTime] = React.useState(0)
  const updateTimer = () => {
    if (!userContext.userState) {
      setRemainingTime('Loading...')
      return
    }
    const time = userContext.userState?.sync.calcEpochRemainingTime()
    setRemainingTime(time)
  }
  React.useEffect(() => {
    setInterval(() => {
      updateTimer()
    }, 1000)
  }, [])

  return (
    <div className="container">
      <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
        <div style={{fontWeight: "bold"}}>canon party</div>
        {!userContext.hasSignedUp ?
          (
            <div
              key={highlightContext.joinKey}
              style={{
                animation: highlightContext.joinKey ? 'highlight 1 0.5s linear' : undefined,
              }}
            >
              <Button onClick={() => userContext.signup()}>Join</Button>
            </div>
            ) :
          <div>Remaining time in epoch: {remainingTime}</div>
        }
      </div>
      {canonContext.canon.length === 0 ? <div style={{ marginTop: '5px', alignSelf: 'center'}}>This is epoch 0, vote for the entries below!</div> : null}
      {canonContext.canon.map(({ sectionId }) => (
        <CanonSection key={sectionId} id={sectionId} />
      ))}
      <div className="end-divider">
        -- End of canonical story. Vote on the next sections below. --
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <div
          key={highlightContext.sectionKey}
          style={{
            animation: highlightContext.sectionKey ? 'highlight 1 0.5s linear' : undefined,
          }}
        >Section {Math.min(visibleSection + 1, canonContext.sections.length)}/{canonContext.sections.length}</div>
        {!isWriting &&
            <Button style={{alignSelf: 'flex-start'}} onClick={() => {
              if (!userContext.hasSignedUp)
                highlightContext.join()
              else
                setIsWriting(true)
            }}>Write</Button>
        }
      </div>
      {
        !isWriting && (
          <HSelector onChange={(s) => {
            setVisibleSection(s)
            highlightContext.section()
          }} sectionIds={canonContext.sections.map(({ id }) => id)} />
        )
      }
      {
        isWriting && (
          <>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={() => setIsWriting(false)}>Cancel</Button>
              <Button onClick={() => userContext.submitSection(writing, graffiti).then(() => setIsWriting(false))}>Submit</Button>
            </div>
            <textarea placeholder="Write your content here" onChange={(e) => setWriting(e.target.value)} value={writing} />
            <textarea placeholder="Write your graffiti here" onChange={(e) => setGraffiti(e.target.value)} value={graffiti} />
            <CanonSection draft={{ graffiti, content: writing }} />
          </>
        )
      }
    </div>
  )
})
