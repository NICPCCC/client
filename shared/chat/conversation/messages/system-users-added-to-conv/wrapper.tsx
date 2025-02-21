import * as React from 'react'
import * as Constants from '../../../../constants/chat2'
import * as Container from '../../../../util/container'
import {ConvoIDContext} from '../ids-context'
import {WrapperMessage, useCommon, type Props} from '../wrapper/wrapper'
import type SystemUsersAddedToConvType from './container'

const SystemUsersAddedToConv = React.memo(function SystemUsersAddedToConv(p: Props) {
  const {ordinal} = p
  const conversationIDKey = React.useContext(ConvoIDContext)
  const common = useCommon(ordinal)
  const message = Container.useSelector(state => Constants.getMessage(state, conversationIDKey, ordinal))

  if (message?.type !== 'systemUsersAddedToConversation') return null

  const SystemUsersAddedToConv = require('./container').default as typeof SystemUsersAddedToConvType
  return (
    <WrapperMessage {...p} {...common}>
      <SystemUsersAddedToConv message={message} />
    </WrapperMessage>
  )
})

export default SystemUsersAddedToConv
