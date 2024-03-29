export declare global {
  interface Window {
    /**
     * Commerce Layer app configuration available from global window object
     */
    clAppConfig: CommerceLayerAppConfig
  }

  interface CommerceLayerAppConfig {
    /**
     * Specific domain to use for Commerce Layer API requests.
     * It must be set as `commercelayer.io`.
     */
    domain: string
    /**
     * The organization slug that generates the accessToken.
     * When null it means the app is hosted by Commerce Layer.
     */
    selfHostedSlug?: string | null
  }
}
