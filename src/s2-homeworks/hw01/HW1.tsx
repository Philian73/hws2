import React from 'react'
import {Message} from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import {FriendMessage} from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 5 - сделать стили в соответствии с дизайном
* */

export type MessageType = {
   id: number
   user: {
      avatar: string
      name: string
   }
   message: {
      text: string
      time: string
   }
}

export const message0: MessageType = {
   id: 0,
   user: {
      avatar: avatar,
      name: 'Nikolay Sulteev',
   },
   message: {
      text: 'Hello, she didn’t do anything and rested all day, how are you?',
      time: '00:13',
   },
}
export const friendMessage0: MessageType = {
   id: 100,
   user: {
      avatar: avatar,
      name: 'Darya Serkina',
   },
   message: {
      text: 'I fully support the above!',
      time: '00:14',
   },
}

export const HW1: React.FC = () => {
   return (
      <div id={'hw1'}>
         <div className={s2.hwTitle}>Homework #1</div>
         <div className={s2.hw}>
            {/*проверка отображения (не менять)*/}
            <div>
               <Message message={message0} />
               <FriendMessage message={friendMessage0} />
            </div>

            {/*для автоматической проверки дз (не менять)*/}
            <MessageSender M={Message} />
         </div>
      </div>
   )
}