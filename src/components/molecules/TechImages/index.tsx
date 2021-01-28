import * as React from "react"
import * as S from "./styles"
import {TechImagesProps} from "./types"
import {TechImage} from "../../atoms/TechImage";
import { useLayoutEffect, useRef, useState } from 'react';
import { TechImageProps } from '../../atoms/TechImage/types';

export const TechImages: React.FC<TechImagesProps> = ({images}) => {

  // TODO : Change this logic
  // States
  const [imagesDisplayed, setImagesDisplayed] = useState<TechImageProps[]>([])

  // Ref
  const scrollRef = useRef<HTMLDivElement>(null)

  // Variables
  let animationTimer: any
  let imageCount = 0

  // Function
  const handleImageAddition = (count: number) => {
    if (count === images.length) {
      clearInterval(animationTimer)
      animationTimer = null
      window.removeEventListener('scroll', onScroll)
    }
    else {
      const updatedImages = images.slice(0, imageCount++)
      setImagesDisplayed(updatedImages)
    }
  }

  const onScroll = () => {
    if (scrollRef && scrollRef.current) {
      const topPosition = scrollRef.current.getBoundingClientRect().top + window.innerHeight/2
      const scrollPosition = window.scrollY + window.innerHeight
      if (topPosition < scrollPosition) {
        animationTimer = setInterval(() => handleImageAddition(imageCount), 500)
        window.removeEventListener('scroll', onScroll)
      }
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <S.TechImagesWrapper ref={scrollRef}>
      {
        images.map((image, index) => {
          return (
            <S.TechImagesAnimationWrapper key={`TechImagesWrapper${index}`} opacity={index <= imagesDisplayed.length ? 1 : 0}>
              <TechImage {...image}/>
            </S.TechImagesAnimationWrapper>
          )
        })
      }
    </S.TechImagesWrapper>
  )
}