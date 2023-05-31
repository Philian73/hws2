import React, { useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

export const HW11 = () => {
   // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
   const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
   const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

   const change = (event: Event, value: number | number[]) => {
      // если пришёл массив - сохранить значения в оба useState, иначе в первый
      if (Array.isArray(value)) {
         setValue1(value[0])
         value[1] > value[0] && setValue2(value[1])
      } else {
         setValue1(value)
      }
   }

   return (
      <div id={'hw11'}>
         <div className={s2.hwTitle}>Homework #11</div>

         <div className={`${s2.hw} ${s2.hw_11}`}>
            <div className={s.container}>
               <div className={s.wrapper}>
                  <span id={'hw11-value'} className={s.number}>{value1}</span>
                  <SuperRange
                     id={'hw11-single-slider'}
                     value={value1}
                     // value 1 изменяется
                     onChange={change}
                  />
               </div>
               <div className={s.wrapper}>
                  <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                  <SuperRange
                     id={'hw11-double-slider'}
                     value={[value1, value2]}
                     // value1/2 изменяются
                     onChange={change}
                  />
                  <span id={'hw11-value-2'} className={s.number}>{value2}</span>
               </div>
            </div>
         </div>
      </div>
   )
}