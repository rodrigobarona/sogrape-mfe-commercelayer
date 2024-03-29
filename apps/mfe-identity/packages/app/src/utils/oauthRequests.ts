export interface OauthResponse {
  access_token?: string
  scope?: string
  token_type?: string
  refresh_token?: string
  error?: string
  error_description?: string
}

interface GetSalesChannelTokenConfig {
  clientId: string
  endpoint: string
  scope: string
}

export const getSalesChannelToken = async ({
  clientId,
  endpoint,
  scope
}: GetSalesChannelTokenConfig): Promise<OauthResponse> => {
  const apiEndpoint = `${endpoint}/oauth/token`
  return await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: clientId,
      scope
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(async (res) => await res.json())
}
