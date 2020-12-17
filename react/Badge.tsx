import React, { useEffect } from 'react'

import { addScript } from './modules/addScript'

// @ts-expect-error it will be called onload of the script
window.renderGoogleInlineBadge = function() {
  var ratingBadgeContainer = document.getElementById(
    'google-customer-reviews-badge'
  ) as HTMLDivElement

  window.gapi.load('ratingbadge', function() {
    const merchantId = window.__google_customer_reviews
      ? window.__google_customer_reviews.merchantId
      : ''

    if (!ratingBadgeContainer) return

    window.gapi.ratingbadge.render(ratingBadgeContainer, {
      // eslint-disable-next-line @typescript-eslint/camelcase
      merchant_id: merchantId,
      position: 'INLINE',
    })
  })
}

function Badge() {
  useEffect(() => {
    addScript('renderGoogleInlineBadge')
  }, [])

  return <div id="google-customer-reviews-badge"></div>
}

export default Badge
