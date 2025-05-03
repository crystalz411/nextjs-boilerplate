import CarouselNav2 from './components/CarouselNav2'
import styles from './page.module.css'

export default function Home() {
  
  return (
    <>
     <main className={styles.main}>
     <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-purple-900 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-purple-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80">

</div>
      <h1>Crystal Yalanopolos</h1>
      <p>CSM, Customer Success Manager, Digital Success 2025
(Global) Take-Home Exercise</p>
    </main>
        <CarouselNav2/>

    </>
   
  )
}
