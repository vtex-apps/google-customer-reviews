import React, { useRef } from 'react'
import { useRuntime } from 'vtex.render-runtime'

function Badge() {
  const {
    culture: { language },
  } = useRuntime()

  const languageSet = useRef<boolean>(false)

  const merchantId = window.__google_customer_reviews
    ? window.__google_customer_reviews.merchantId
    : ''

  if (!languageSet || languageSet.current === false) {
    // @ts-expect-error as expected by their docs https://support.google.com/merchants/answer/7105655?hl=en&ref_topic=7105160
    window.___gcfg = { lang: language }
    languageSet.current = true
  }

  if (!merchantId) {
    return null
  }

  return (
    <>
      <script src="https://apis.google.com/js/platform.js" async defer></script>

      <div
        dangerouslySetInnerHTML={{
          __html: `<g:ratingbadge merchant_id=${merchantId}></g:ratingbadge>​`,
        }}
      ></div>
    </>
  )
}

export default Badge
