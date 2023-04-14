import React, {useState} from 'react'
import {v1} from 'uuid'

import s2 from '../../s1-main/App.module.css'

import {GreetingContainer} from './GreetingContainer'

// types
export type UserType = {
   _id: string
   name: string
}
/**
 * Чистая коллбэк функция для добавления пользователя
 */
export const pureAddUserCallback = (name: string, setUsers: (users: UserType[]) => void, users: UserType[]) => {
   setUsers([...users, {_id: v1(), name: name}])
}

export const HW3: React.FC = () => {
   const [users, setUsers] = useState<UserType[]>([])

   /**
    * Колбэк функция для pureAddUserCallback
    */
   const addUserCallback = (name: string) => pureAddUserCallback(name, setUsers, users)

   return (
      <div id={'hw3'}>
         <div className={s2.hwTitle}>Homework #3</div>
         {/*для автоматической проверки дз (не менять)*/}

         <div className={`${s2.hw} ${s2.hw_3}`}>
            <GreetingContainer
               users={users}
               addUserCallback={addUserCallback}
            />
         </div>
      </div>
   )
}