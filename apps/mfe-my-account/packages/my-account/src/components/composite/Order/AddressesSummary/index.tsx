import { useContext } from "react"
import { useTranslation } from "react-i18next"

import {
  Wrapper,
  AddressesTitle,
  BillingAddress,
  ShippingAddress,
} from "./styled"

import { AddressCard } from "#components/ui/AddressCard"
import { OrderContext } from "#providers/OrderProvider"

function AddressesSummary(): JSX.Element {
  const { t } = useTranslation()

  const ctx = useContext(OrderContext)
  const order = ctx?.order

  if (!order || !order?.billing_address || !order?.shipping_address)
    return <></>

  return (
    <Wrapper>
      <BillingAddress>
        <AddressesTitle>{t("order.addresses.billedTo")}</AddressesTitle>
        <AddressCard
          address={order?.billing_address}
          addressType="billing"
          readonly={true}
        />
      </BillingAddress>
      <ShippingAddress>
        <AddressesTitle>{t("order.addresses.shippedTo")}</AddressesTitle>
        <AddressCard
          address={order?.shipping_address}
          addressType="shipping"
          readonly={true}
        />
      </ShippingAddress>
    </Wrapper>
  )
}

export default AddressesSummary
