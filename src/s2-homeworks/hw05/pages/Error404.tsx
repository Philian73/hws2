import React from 'react'
import s from './Error404.module.css'
import error404 from './404.svg'

export const Error404: React.FC = () => {
    return (
        <div id={'hw5-page-404'}>
            <div className={s.wrapper}>
                <img src={error404} alt={'404'} className={s.error404} />
            </div>
        </div>
    )
}