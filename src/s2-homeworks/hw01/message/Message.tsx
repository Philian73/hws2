import React from 'react'
import s from './Message.module.css'
import {MessageType} from '../HW1'

export type MessagePropsType = {
   message: MessageType
}

export const Message: React.FC<MessagePropsType> = props => {
   return (
      <div id={'hw1-message-' + props.message.id} className={s.message}>
         <div className={s.imageAndText}>
            <img
               id={'hw1-avatar-' + props.message.id}
               src={props.message.user.avatar}
               alt={`Avatar of ${props.message.user.name}`}
            />
            <div className={s.text}>
               <div id={'hw1-name-' + props.message.id} className={s.name}>
                  <span>{props.message.user.name}</span>
               </div>
               <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                  {props.message.message.text}
               </pre>
            </div>
         </div>
         <div id={'hw1-time-' + props.message.id} className={s.time}>
            <time dateTime={props.message.message.time}>{props.message.message.time}</time>
         </div>
      </div>
   )
}