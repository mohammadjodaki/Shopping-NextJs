"use client"
import React, { useRef, useState, useEffect } from 'react';  
import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css';  
import 'swiper/css/pagination';  
import 'swiper/css/navigation';  
import { Autoplay} from 'swiper/modules';  
import Image from 'next/image';
import Brand1 from '../../Images/Highsnobiety_Logo_text-white_small.png'
import Brand2 from '../../Images/gl-og-img_small.png'
import Brand3 from '../../Images/forbes_logo_small.png'
import Brand4 from '../../Images/Daco_1655576_small.png'
import Brand5 from '../../Images/Daco_1655575_small.png'
import Brand6 from '../../Images/Daco_1655573_20a5ef07-18c4-42cd-9956-22994a13a09f_small.png'
import Brand7 from '../../Images/T3-shopify_7ab890f7-51d7-4acd-8d4e-df8abd1ca271_small.png'


function slider() {
    const progressBar = useRef(null);  
    const [autoplayTimeLeft, setAutoplayTimeLeft] = useState(5000);  
  
    const onAutoplayTimeLeft = (s, time, progress) => {  
      const progressValue = 100 - (progress * 100);  
      if (progressBar.current) { 
        progressBar.current.style.width = `${progressValue}%`;  
      }
      setAutoplayTimeLeft(Math.ceil(time / 1000));  
    }; 
  
    useEffect(() => {  
      progressBar.current.style.width = '100%';  
    }, []);  
  
    return (  
      <div className="w-full h-96 bg-black py-20">  
              <div className="w-11/12 mx-auto h-[2px] bg-gray-500">  
          <div  
            ref={progressBar}  
            className="h-full bg-gray-200 transition-all duration-0"  
          ></div>  
        </div>
        <Swiper 
        slidesPerView={3}
          spaceBetween={20}  
          loop={true}
          centeredSlides={true}  
          autoplay={{  
            delay: 5000,  
            disableOnInteraction: false,  
          }}  
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
 
          modules={[Autoplay ]}  
          onAutoplayTimeLeft={onAutoplayTimeLeft}  
          className="mt-20 w-11/12 mx-auto flex justify-center items-center"  
        >  
          <SwiperSlide className="w-full flex items-center justify-center h-full">
            <Image className='h-16 bg-cover' src={Brand1}/>
            </SwiperSlide>  
          <SwiperSlide className="w-full flex items-center justify-center h-full">
            <Image className='h-16 bg-cover' src={Brand2}/>
            </SwiperSlide>  
          <SwiperSlide className="w-full flex items-center justify-center h-full">
            <Image className='h-16 bg-cover' src={Brand3}/>
            </SwiperSlide>  
          <SwiperSlide className="w-full flex items-center justify-center h-full">
            <Image className='h-16 bg-cover' src={Brand4}/>
            </SwiperSlide>  
          <SwiperSlide className="w-full flex items-center justify-center h-full">
            <Image className='h-16 bg-cover' src={Brand5}/>
            </SwiperSlide>  
          <SwiperSlide className="w-full flex items-center justify-center h-full">
            <Image className='h-16 bg-cover' src={Brand6}/>
            </SwiperSlide>  
          <SwiperSlide className="w-full flex items-center justify-center h-full">
            <Image className='h-16 bg-cover' src={Brand7}/>
            </SwiperSlide>   
        </Swiper>    
      </div>  
    );  
}

export default slider