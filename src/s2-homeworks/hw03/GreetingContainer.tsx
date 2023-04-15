import React, {ChangeEvent, KeyboardEvent, useState} from 'react'

import {Greeting} from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
   users: UserType[]
   addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
   if (!name.trim()) setError('Ошибка! Введите имя!')
   else {
      addUserCallback(name)
      setName('')
   }
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => {
   // если имя пустое - показать ошибку
   if (!name.trim()) setError('Ошибка! Введите имя!')
}

/**
 * Если нажата кнопка Enter - добавить юзера
 */
export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
   if (e.key === 'Enter') addUser()
}

export const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                           users,
                                                                           addUserCallback,
                                                                        }) => {
   const [name, setName] = useState<string>('')
   const [error, setError] = useState<string>('')

   /**
    * Функция-коллбэк: сетаем имя из инпута.
    * Обнуляем ошибку
    */
   const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.currentTarget.value)
      error && setError('')
   }

   /**
    * Функция-колбэк для pureAddUser.
    */
   const addUser = () => pureAddUser(name, setError, setName, addUserCallback)

   /**
    * Функция-коллбэк для pureOnBlur
    */
   const onBlur = () => pureOnBlur(name, setError)

   /**
    * Функция коллбэк для pureOnEnter
    */
   const onEnter = (e: KeyboardEvent<HTMLInputElement>) => pureOnEnter(e, addUser)

   /**
    * Длина массива пользователей (users)
    */
   const totalUsers = users.length
   /**
    * Имя последнего добавленного юзера
    */
   const lastUserName = users.at(-1)?.name

   return (
      <Greeting
         name={name}
         setNameCallback={setNameCallback}
         addUser={addUser}
         onBlur={onBlur}
         onEnter={onEnter}
         error={error}
         totalUsers={totalUsers}
         lastUserName={lastUserName}
      />
   )
}