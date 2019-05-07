import React from 'react'


import style from './box.module.scss'

const box = () => {
  return (
    <React.Fragment>
      <div className={style.wrap}>
        <div className={style.rotate_dots}>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
        </div>
        <div className={style.front_dots}>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
        </div>
        <div className={style.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default box