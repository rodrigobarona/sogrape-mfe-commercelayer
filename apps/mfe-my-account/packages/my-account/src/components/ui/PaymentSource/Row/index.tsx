import { PaymentSourceBrandIcon } from "@commercelayer/react-components/payment_source/PaymentSourceBrandIcon"
import { PaymentSourceDetail } from "@commercelayer/react-components/payment_source/PaymentSourceDetail"

import { PaymentSourceWrapper, PaymentSourceBrandNameWrapper } from "./styled"

import {
  PaymentSourceName,
  PaymentSourceCreditCardEndingIn,
  PaymentSourceCreditCardExpires,
} from "#components/ui/PaymentSource"
import {
  PaymentSourceBrandIconWrapper,
  PaymentSourceTextWrapper,
} from "#components/ui/PaymentSource/styled"

export function PaymentSourceRow(): JSX.Element {
  return (
    <PaymentSourceWrapper>
      <PaymentSourceBrandIconWrapper>
        <PaymentSourceBrandIcon width={36} />
      </PaymentSourceBrandIconWrapper>
      <PaymentSourceBrandNameWrapper>
        <PaymentSourceDetail type="last4">
          {(props) => {
            if (props.text === null || props.text.length === 0)
              return (
                <PaymentSourceTextWrapper>
                  <PaymentSourceName />
                </PaymentSourceTextWrapper>
              )
            return (
              <>
                <PaymentSourceTextWrapper>
                  <PaymentSourceName />
                  <PaymentSourceCreditCardEndingIn />
                </PaymentSourceTextWrapper>
                <PaymentSourceCreditCardExpires variant="row" />
              </>
            )
          }}
        </PaymentSourceDetail>
      </PaymentSourceBrandNameWrapper>
    </PaymentSourceWrapper>
  )
}
