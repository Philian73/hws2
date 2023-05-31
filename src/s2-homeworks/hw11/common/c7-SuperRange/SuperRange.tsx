import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
   return (
      <Slider
         sx={{ // стили для слайдера
            color: '#00CC22',
            width: '10.3125rem',
            '& .MuiSlider-thumb': {
               backgroundColor: '#fff',
               border: '1px solid #00CC22',
               borderRadius: '50%',
               width: '1.125rem',
               height: '1.125rem',
               '&::before': {
                  backgroundColor: '#00CC22',
                  width: '0.375rem',
                  height: '0.375rem',
               },
               transition: 'none', // Изменяем анимацию передвижения ползунка
            },
            '& .MuiSlider-rail': {
               backgroundColor: '#8B8B8B', // Изменяем цвет неиспользуемой части слайдера
               opacity: 1,
            },
            '& .MuiSlider-track': {
               transition: 'none', // Изменяем анимацию заполнения
            },
         }}
         {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
      />
   )
}

export default SuperRange
