import React from 'react'
import styles from '../styles/Play.module.css'
import PlayButtons from './PlayButtons'

export default function Play(props) {
  return (
    <div className={styles.container}>
      {props.advanced ? (
        <img src='./bg-pentagon.svg' />
      ) : (
        <img src='./bg-triangle.svg' />
      )}
      <PlayButtons
        onCLick={(value) => props.setselected(value)}
        advanced={props.advanced}
      />
    </div>
  )
}
