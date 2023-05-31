import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
   return (
      <Slider
         sx={{ // стили для слайдера // пишет студент
            width: 160,
            color: '#00CC22',
            '& .MuiSlider-track': {
               border: 'none',
               transition: 'none', // Изменяем анимацию заполнения
            },
            '& .MuiSlider-rail': {
               backgroundColor: '#8B8B8B', // Изменяем цвет неиспользуемой части слайдера
               opacity: 1,
            },
            '& .MuiSlider-thumb': {
               width: 20,
               height: 20,
               border: '1px solid #00CC22',
               backgroundColor: '#fff',
               '&:before': {
                  content: '""',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: '#00CC22',
                  zIndex: -1,
               },
               '&:hover, &.Mui-focusVisible, &.Mui-active': {
                  boxShadow: 'none',
               },
               transition: 'none', // Изменяем анимацию передвижения ползунка
            },
         }}
         {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
      />
   )
}

export default SuperRange
