import { Transition } from "@headlessui/react"
import { DotsThreeVertical } from "phosphor-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import OutsideClickHandler from "react-outside-click-handler"

import { Wrapper, ActionsMenuWrapper, ActionsMenuButton } from "./styled"

import { SrOnly } from "#components/ui/Common/styled"

interface Props {
  children: React.ReactNode
  className?: string
}

const actionMenuTransition = {
  enter: "transition duration-400 ease-out",
  enterFrom: "transform scale-95 opacity-0",
  enterTo: "transform scale-100 opacity-100",
  leave: "transition duration-300 ease-out",
  leaveFrom: "transform scale-100 opacity-100",
  leaveTo: "transform scale-95 opacity-0",
}

function ActionsMenu({ children, className }: Props): JSX.Element {
  const { t } = useTranslation()
  const [showActionsMenu, setShowActionsMenu] = useState(false)

  const handleClick = async () => {
    setShowActionsMenu(!showActionsMenu)
  }

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setShowActionsMenu(false)
      }}
    >
      <Wrapper showActionsMenu={showActionsMenu} className={`${className}`}>
        <ActionsMenuButton
          type="button"
          onClick={handleClick}
          showActionsMenu={showActionsMenu}
        >
          <SrOnly>{t("actionsMenu.mainLabel")}</SrOnly>
          <DotsThreeVertical weight="bold" className="w-5 h-5" />
        </ActionsMenuButton>
        <Transition show={showActionsMenu} {...actionMenuTransition}>
          <ActionsMenuWrapper>{children}</ActionsMenuWrapper>
        </Transition>
      </Wrapper>
    </OutsideClickHandler>
  )
}

export default ActionsMenu
