import styled from "styled-components"
import tw from "twin.macro"

export const HeaderContainer = styled.header`
  ${tw`fixed top-0 lg:relative w-full z-10 flex border-b-2 bg-white border-gray-300 mb-8 -mx-5 md:(p-5 border-b) lg:(-mx-0 mb-16 px-0 pt-0 pb-0 h-[50px] items-center)`}
`

export const Wrapper = styled.div`
  ${tw`flex flex-1 justify-between p-5 md:(p-0)`}
`

export const User = styled.div`
  ${tw`flex items-center`}
`

export const Title = styled.h1`
  ${tw`hidden text-xxl font-medium lg:(inline)`}
`

export const Email = styled.p`
  ${tw`hidden text-sm text-gray-500 mr-3 font-medium lg:(inline)`}
`
