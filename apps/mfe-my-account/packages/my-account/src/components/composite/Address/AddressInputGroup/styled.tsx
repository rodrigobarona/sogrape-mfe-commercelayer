import { AddressCountrySelector } from "@commercelayer/react-components/addresses/AddressCountrySelector"
import { AddressInput } from "@commercelayer/react-components/addresses/AddressInput"
import { AddressStateSelector } from "@commercelayer/react-components/addresses/AddressStateSelector"
import { Errors } from "@commercelayer/react-components/errors/Errors"
import styled from "styled-components"
import tw from "twin.macro"

import { ErrorCss } from "#components/ui/form/Error"
import { InputCss } from "#components/ui/form/Input"

export const Wrapper = styled.div`
  position: relative;
`

export const StyledAddressInput = styled(AddressInput)`
  ${InputCss}
  &.hasError {
    ${tw`border-red-400 border-2 focus:ring-offset-0 focus:ring-red-400 focus:ring-opacity-50`}
  }
`

export const StyledAddressCountrySelector = styled(AddressCountrySelector)`
  ${InputCss}
`

export const StyledAddressStateSelector = styled(AddressStateSelector)`
  ${InputCss}
  &.hasError {
    ${tw`border-red-400 border-2 focus:ring-offset-0 focus:ring-red-400 focus:ring-opacity-50`}
  }
`

export const StyledErrors = styled(Errors)`
  ${ErrorCss}
`
