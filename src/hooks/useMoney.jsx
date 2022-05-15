import React from 'react'

const useMoney = (num) => {
  // return "$" + num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  })
  console.log(format.format(num))
  return format.format(num)
}

export default useMoney