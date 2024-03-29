import { faker } from "@faker-js/faker"

import { test } from "../fixtures/tokenizedPage"
import { euAddress } from "../utils/addresses"

const TIMEOUT = 2000

test.describe("payment source amount mismatch with stripe", () => {
  const customerEmail = faker.internet.email().toLocaleLowerCase()

  test.use({
    defaultParams: {
      order: "with-items",
      orderAttributes: {
        customer_email: customerEmail,
      },
      lineItemsAttributes: [
        { sku_code: "CANVASAU000000FFFFFF1824", quantity: 1 },
      ],
      addresses: {
        billingAddress: euAddress,
        sameShippingAddress: true,
      },
    },
  })

  test("checkout changing shipping method", async ({ checkoutPage }) => {
    await checkoutPage.checkOrderSummary("Order Summary")
    await checkoutPage.checkStep("Shipping", "open")

    await checkoutPage.selectShippingMethod({ text: "Standard Shipping" })

    await checkoutPage.page.waitForTimeout(TIMEOUT)

    await checkoutPage.save("Shipping")

    await checkoutPage.selectPayment("stripe")

    await checkoutPage.page.waitForTimeout(TIMEOUT)

    await checkoutPage.checkPaymentSummary("€10,00")

    await checkoutPage.checkTotalAmount("€109,00")

    await checkoutPage.clickStep("Shipping")

    await checkoutPage.selectShippingMethod({ text: "Express Delivery" })

    await checkoutPage.page.waitForTimeout(TIMEOUT)

    await checkoutPage.checkTotalAmount("€121,00")

    await checkoutPage.save("Shipping")
    await checkoutPage.page.waitForTimeout(TIMEOUT)

    await checkoutPage.setPayment("stripe")

    await checkoutPage.save("Payment")
  })

  test("checkout applying coupon", async ({ checkoutPage }) => {
    await checkoutPage.checkOrderSummary("Order Summary")

    await checkoutPage.checkStep("Shipping", "open")

    await checkoutPage.selectShippingMethod({ text: "Standard Shipping" })

    await checkoutPage.save("Shipping")
    await checkoutPage.checkTotalAmount("€99,00")

    await checkoutPage.selectPayment("stripe")

    await checkoutPage.checkTotalAmount("€109,00")

    await checkoutPage.page.waitForTimeout(TIMEOUT)

    await checkoutPage.setCoupon("testcoupon")
    await checkoutPage.checkTotalAmount("€79,30")
    await checkoutPage.selectShippingMethod({ text: "Standard Shipping" })

    await checkoutPage.page.waitForTimeout(TIMEOUT)
    await checkoutPage.save("Shipping")

    await checkoutPage.checkStep("Payment", "open")
    await checkoutPage.page.waitForTimeout(TIMEOUT)

    await checkoutPage.selectPayment("stripe")
    await checkoutPage.page.waitForTimeout(TIMEOUT)

    await checkoutPage.setPayment("stripe")
    await checkoutPage.page.waitForTimeout(TIMEOUT)

    await checkoutPage.save("Payment")
  })
})

test.describe("payment source amount mismatch for coupon with stripe", () => {
  const customerEmail = faker.internet.email().toLocaleLowerCase()

  test.use({
    defaultParams: {
      order: "with-items",
      orderAttributes: {
        customer_email: customerEmail,
      },
      lineItemsAttributes: [
        { sku_code: "CANVASAU000000FFFFFF1824", quantity: 1 },
      ],
      addresses: {
        billingAddress: euAddress,
        sameShippingAddress: true,
      },
      couponCode: "testcoupon",
    },
  })

  test("checkout remove coupon", async ({ checkoutPage }) => {
    await checkoutPage.checkOrderSummary("Order Summary")

    await checkoutPage.checkStep("Shipping", "open")

    await checkoutPage.selectShippingMethod({ text: "Standard Shipping" })

    await checkoutPage.save("Shipping")

    await checkoutPage.selectPayment("stripe")

    await checkoutPage.page.waitForTimeout(TIMEOUT)

    await checkoutPage.removeCoupon()

    await checkoutPage.page.waitForTimeout(TIMEOUT)
    await checkoutPage.checkStep("Shipping", "open")

    await checkoutPage.selectShippingMethod({ text: "Standard Shipping" })

    await checkoutPage.save("Shipping")
    await checkoutPage.page.waitForTimeout(TIMEOUT)

    await checkoutPage.setPayment("stripe")

    await checkoutPage.save("Payment")
  })
})
