import React, { FC } from 'react'

const Badge: FC = () => {
  const merchantId = window.__google_customer_reviews
    ? window.__google_customer_reviews.merchantId
    : ''

  if (!merchantId) {
    return null
  }

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<g:ratingbadge merchant_id=${merchantId}></g:ratingbadge>​`,
      }}
    ></div>
  )
}

export default Badge
