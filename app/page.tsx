
import Swiperslide from "./components/Slide"
import style from "@/styles/main.module.scss"
export default function Home() {
  return (
    <div>
      <div className={style.root}>
          <div className={style.main}></div>
          <div className={style.week}>
            <Swiperslide></Swiperslide>
          </div>
        </div>
    </div>
  )
}
