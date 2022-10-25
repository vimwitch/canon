import React from 'react'
import { observer } from 'mobx-react-lite'
import Canon from '../contexts/canon'
import User from '../contexts/User'
import Button from './Button'

export default observer(({ id }) => {
  const canonContext = React.useContext(Canon)
  const userContext = React.useContext(User)
  const section = canonContext.sectionsById[id]
  if (!section) {
    return (<div>unable to find section</div>)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>Author: {`0x${BigInt(section.author).toString(16)}`}</div>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <div>Votes: {section.voteCount}{section.winner ? ' (Current leader)' : null}</div>
        <Button onClick={() => userContext.voteSection(section.id)}>Vote</Button>
      </div>
      <div>
        <div>{section.content}</div>
        <div>{section.graffiti}</div>
      </div>
    </div>
  )
})
