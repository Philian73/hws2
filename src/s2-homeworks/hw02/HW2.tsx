import React, {useState} from 'react'
import {Affairs} from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

// тип приоритета который может быть в массиве
export type AffairPriorityType = 'low' | 'middle' | 'high'
// тип массива
export type AffairType = {
   _id: number
   name: string
   priority: AffairPriorityType
}
// тип фильтра. all и все приоритеты
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: AffairType[] = [
   {_id: 1, name: 'React', priority: 'high'},
   {_id: 2, name: 'anime', priority: 'low'},
   {_id: 3, name: 'games', priority: 'low'},
   {_id: 4, name: 'work', priority: 'high'},
   {_id: 5, name: 'html & css', priority: 'middle'},
]

// фильтрация - новый массив в зависимости от переданного filter (all | low | middle | high)
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
   return filter === 'all' ? affairs : affairs.filter(affair => affair.priority === filter)
}
// фильтрация - новый массив в котором оставляем только только те элементы,
// affair._id которых не равен переданному ID
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
   return affairs.filter(affair => affair._id !== _id)
}

export const HW2 = () => {
   const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
   const [filter, setFilter] = useState<FilterType>('all')

   // присваиваем в переменную отфильтрованный масив
   const filteredAffairs = filterAffairs(affairs, filter)
   // Коллбэк, в котором мы сетаем новый массив из результата deleteAffair
   const deleteAffairCallback = (_id: number) => {
      setAffairs(deleteAffair(affairs, _id))
   }

   return (
      <div id={'hw2'}>
         <div className={s2.hwTitle}>Homework #2</div>
         <div className={`${s2.hw} ${s2.hw_2}`}>
            <Affairs
               data={filteredAffairs}
               setFilter={setFilter}
               deleteAffairCallback={deleteAffairCallback}
               filter={filter}
            />
         </div>
      </div>
   )
}