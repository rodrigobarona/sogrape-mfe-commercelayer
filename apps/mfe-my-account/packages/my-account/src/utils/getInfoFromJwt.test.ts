import { getInfoFromJwt } from "#utils/getInfoFromJwt"

const jwtSalesChannelOrgAcme =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJhYmMxMjM0Iiwic2x1ZyI6ImFjbWUifSwiYXBwbGljYXRpb24iOnsiaWQiOiJiY2Q0NDIxIiwia2luZCI6InNhbGVzX2NoYW5uZWwiLCJwdWJsaWMiOnRydWV9LCJ0ZXN0Ijp0cnVlLCJleHAiOjE2NTI3OTUxMDIsInJhbmQiOjAuMzE0NTUwMDUwMTg4ODYzOH0.mX4A08-f_vdab6_dDpA1eDdGri91kR0erP8X7obZr1M"

describe("Get info from JWT", () => {
  test("Parsing a valid token", () => {
    const { isTest, customerId, kind, slug } = getInfoFromJwt(
      jwtSalesChannelOrgAcme
    )
    expect(isTest).toBe(true)
    expect(customerId).toBe(undefined)
    expect(kind).toBe("sales_channel")
    expect(slug).toBe("acme")
  })

  test("Parsing a malformed token", () => {
    const { isTest, customerId, kind, slug } = getInfoFromJwt(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    )
    expect(isTest).toBe(undefined)
    expect(customerId).toBe(undefined)
    expect(kind).toBe(undefined)
    expect(slug).toBe(undefined)
  })
})
