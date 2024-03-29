import type { Settings } from "HostedApp"

import { Wrapper, HeaderContainer } from "#components/composite/Header/styled"
import Logo from "#components/ui/Logo"
import MenuButton from "#components/ui/MenuButton"

type Props = Pick<Settings, "logoUrl" | "companyName">

function GuestHeader({ logoUrl, companyName }: Props): JSX.Element {
  return (
    <HeaderContainer>
      <Wrapper>
        <MenuButton />
        <Logo
          logoUrl={logoUrl}
          companyName={companyName}
          className="self-center"
        />
      </Wrapper>
    </HeaderContainer>
  )
}

export default GuestHeader
