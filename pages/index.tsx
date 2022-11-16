import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <canvas width=100 height=100>
      </canvas>
      <style>
	canvas{
	  background:#000;
	}
      </style>
    </div>
  )
}
