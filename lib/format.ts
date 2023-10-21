export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("IDR", {
      style: "currency",
      currency: "IDR"
    }).format(price)
  }