'use client'

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Locomotive({ children }) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const mainElement = document.querySelector('.scrollContainer');
    const elementsToAnimate = mainElement.children; // Lấy tất cả các phần tử con để áp dụng hiệu ứng

    gsap.from(elementsToAnimate, {
      scrollTrigger: {
        trigger: mainElement,
        start: 'top 80%', // Thay đổi giá trị start để kích hoạt hiệu ứng ở một vị trí cụ thể trên trang
        end: 'bottom bottom',
        scrub: 1,
      },
      y: 0, // Điều chỉnh giá trị Y để phù hợp với yêu cầu của bạn
      opacity: 1, // Bắt đầu với opacity: 0 để tạo hiệu ứng fade-in
      scale: 1, // Bắt đầu với scale: 0.8 để tạo hiệu ứng zoom-in
      ease: 'power1.inOut',
      stagger: 0.2, // Thêm stagger để có hiệu ứng smooth và rõ ràng
      
    });

    return () => gsap.globalTimeline.clear();
  }, []);

  return (
    <div className='scrollContainer'>
      {children}
    </div>
  );
}

export default Locomotive;
