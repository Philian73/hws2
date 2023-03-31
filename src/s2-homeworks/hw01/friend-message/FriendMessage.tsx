import React from 'react'
import s from './FriendMessage.module.css'
import {MessagePropsType} from '../message/Message'

export const FriendMessage: React.FC<MessagePropsType> = props => {
   return (
      <div id={'hw1-friend-message-' + props.message.id} className={s.friendMessage}>
         <div className={s.friendImageAndText}>
            <img
               id={'hw1-friend-avatar-' + props.message.id}
               src={props.message.user.avatar}
               alt={`Avatar of ${props.message.user.name}`}
            />
            <div className={s.friendText}>
               <div id={'hw1-friend-name-' + props.message.id} className={s.friendName}>
                  <span>{props.message.user.name}</span>
               </div>
               <pre id={'hw1-friend-text-' + props.message.id} className={s.friendMessageText}>
                  {props.message.message.text}
               </pre>
            </div>
         </div>
         <div id={'hw1-friend-time-' + props.message.id} className={s.friendTime}>
            <time dateTime={props.message.message.time}>{props.message.message.time}</time>
         </div>
      </div>
   )
}