import { VFC, ReactNode } from "react"

import { Footer } from "#components/Footer"
import { isEmbedded } from "#utils/isEmbedded"

type Props = {
  top?: ReactNode
} & InnerProps

export const PageLayout: VFC<Props> = ({ top, main, aside }) => {
  return isEmbedded() ? (
    <Inner main={main} aside={aside} />
  ) : (
    <div className="container">
      <div className="px-5 lg:px-20 xl:px-48 flex flex-col min-h-screen">
        {top && <div>{top}</div>}
        <Inner main={main} aside={aside} />
        <Footer />
      </div>
    </div>
  )
}

type InnerProps = {
  main: ReactNode
  aside: ReactNode
}
const Inner: VFC<InnerProps> = ({ main, aside }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-8 xl:gap-36 pt-8 items-start">
      <main className="w-full md:w-7/12">{main}</main>
      <aside className="w-full md:w-5/12">
        <div className="md:bg-gray-50 pb-5 md:py-10 md:px-7 rounded-md w-full">
          {aside}
        </div>
      </aside>
    </div>
  )
}
