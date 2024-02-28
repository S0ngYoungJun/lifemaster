"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import styles from "@/styles/slide.module.scss"
import Link from "next/link";
import Image from "next/image";
const slideData = [
  {
    id: 1,
    text: '테스트 테스트1',
    path: '/path1',
    imageUrl: '/image/1.png', // 이미지 URL 추가
  },
  {
    id: 2,
    text: '테스트 테스트2',
    path: '/path2',
    imageUrl: '/image/2.png',
  },
  {
    id: 3,
    text: '테스트 테스트3',
    path: '/path3',
    imageUrl: '/image/3.png',
  },
  {
    id: 4,
    text: '테스트 테스트4',
    path: '/path4',
    imageUrl: '/image/4.png',
  },
  {
    id: 5,
    text: '테스트 테스트5',
    path: '/path5',
    imageUrl: '/image/5.png',
  }
];


export default function Swiperslide() {
  SwiperCore.use([Navigation, Scrollbar]);
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className={styles.container}>
      <h1>   </h1>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Scrollbar]}
        spaceBetween={50} // 슬라이드 사이 간격 조정
        slidesPerView={3} // 한 번에 보여줄 슬라이드 개수
        navigation // 네비게이션 화살표 사용
        
      >
       {slideData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className={styles.cardcontainer}> 
            <Link href={slide.path}> {/* Link 컴포넌트로 감싼다 */}
              <div className={styles.card}>
                <Image fill={true} src={slide.imageUrl} alt={slide.text} className={styles.card} /> 
              </div>
              </Link>
          </div>
        </SwiperSlide>
        ))}
        {/* 필요한 만큼 SwiperSlide를 추가하세요. */}
      </Swiper>
    </div>
  );
}