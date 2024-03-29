import styled from "styled-components"
import tw from "twin.macro"

export const GuestWrapper = styled.div`
  ${tw`flex flex-wrap justify-end items-stretch flex-col max-w-screen-md mx-auto min-h-screen md:flex-row`}
`

export const CustomerWrapper = styled.div`
  ${tw`flex flex-wrap justify-end items-stretch flex-col min-h-screen md:flex-row`}
`

export const Main = styled.div`
  ${tw`flex-none justify-center order-first h-screen md:(flex-1 order-last h-auto)`}
`

export const DesktopOnly = styled.div`
  ${tw`hidden lg:(inline bg-gray-50)`}
`

export const Aside = styled.div`
  ${tw`flex-none lg:(flex-1 h-full)`}
`

export const MobileMenu = styled.div`
  ${tw`z-20 fixed top-16 left-0 bottom-0 flex flex-col min-w-full max-w-sm bg-white border-r overflow-y-auto lg:hidden`}
`
