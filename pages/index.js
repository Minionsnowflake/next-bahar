import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'
export default function Home() {
  return (
  <>

    <h2>سلام</h2>

    <div className={'flex justify-center items-center gap-5'}>
      <button className={'bg-blue-500 p-3 text-white rounded-lg hover:bg-blue-700 transition-all duration-500 '}>
        ورود به سایت
      </button>
      <button className={'bg-rose-500 text-white p-3 rounded-lg hover:bg-rose-700 transition-all duration-500'}>
        تماس با ما
      </button>
    </div>

  </>
  )
}
