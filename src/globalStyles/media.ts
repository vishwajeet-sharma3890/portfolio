import { useMedia } from 'react-media';

export type ScreenSize = "largedesktop" | "desktop" | "largetab" | "tag" | "largemobile" | "mobile"
export type TextAlign = "left" | "center" | "right"

const GLOBAL_MEDIA_QUERIES = {
  largedesktop: "(min-width: 4000px)",
  desktop: "(min-width: 1280px) and (max-width: 2299px)",
  largetab: "(min-width: 951px) and (max-width: 1279px)",
  tab: "(min-width: 793px) and (max-width: 950px)",
  largemobile: "(min-width: 421px) and (max-width: 792px)",
  mobile: "(max-width: 420px)",
}

interface GlobalMediaQueryResultInterface {
  largedesktop: boolean
  desktop: boolean
  largetab: boolean
  tab: boolean
  largemobile: boolean
  mobile: boolean
}

export const getScreenSize = () => {
  const matches: GlobalMediaQueryResultInterface = useMedia({
    queries: GLOBAL_MEDIA_QUERIES,
  })
  let calculatedScreenSize: ScreenSize = "desktop"
  Object.keys(matches).map(key => {
    if (matches[key]) {
      calculatedScreenSize = key as ScreenSize
    }
  })
  return calculatedScreenSize
}

export const isMobileScreen = (screenSize: ScreenSize) => {
  return screenSize.includes('mobile')
}

export const isTabletScreen = (screenSize: ScreenSize) => {
  return screenSize.includes('tab')
}