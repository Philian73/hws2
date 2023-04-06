import React, {useState} from 'react'
import {Affair} from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'

// Тип пропсов компоненты Affairs
type AffairsPropsType = {
   data: AffairType[]
   setFilter: (filter: FilterType) => void
   deleteAffairCallback: (_id: number) => void
   filter: FilterType
}

export const Affairs: React.FC<AffairsPropsType> = ({data, setFilter, deleteAffairCallback, filter}) => {
   // состояние для определения того, находится ли юзер во вкладке All или в приоритетах
   const [switcher, setSwitcher] = useState<boolean>(false)

   // Функция возвращает классы в види строки в зависимости от того, передано в неё true или false
   const allOrPriority = (bool: boolean): string => bool ? `${s.affairs} ${s.affairsNoWrap}` : s.affairs

   const setAll = () => {
      setFilter('all')
      setSwitcher(false)
   }
   const setLow = () => {
      setFilter('low')
      setSwitcher(true)
   }
   const setMiddle = () => {
      setFilter('middle')
      setSwitcher(true)
   }
   const setHigh = () => {
      setFilter('high')
      setSwitcher(true)
   }

   const cnAll = s.button + ' ' + s.all + (filter === 'all' ? ' ' + s.active : '')
   const cnHigh = s.button + ' ' + s.high + (filter === 'high' ? ' ' + s.active : '')
   const cnMiddle = s.button + ' ' + s.middle + (filter === 'middle' ? ' ' + s.active : '')
   const cnLow = s.button + ' ' + s.low + (filter === 'low' ? ' ' + s.active : '')

   const mappedAffairs = data.map(affair => (
      <Affair
         key={affair._id}
         affair={affair}
         deleteAffairCallback={deleteAffairCallback}
      />
   ))

   return (
      <div>
         <div className={s.buttonContainer}>
            <button
               id={'hw2-button-all'}
               onClick={setAll}
               className={cnAll}
            >
               All
            </button>
            <button
               id={'hw2-button-low'}
               onClick={setLow}
               className={cnLow}
            >
               Low
            </button>
            <button
               id={'hw2-button-high'}
               onClick={setHigh}
               className={cnHigh}
            >
               High
            </button>
            <button
               id={'hw2-button-middle'}
               onClick={setMiddle}
               className={cnMiddle}
            >
               Middle
            </button>
         </div>
         <div className={allOrPriority(switcher)}>{mappedAffairs}</div>
      </div>
   )
}