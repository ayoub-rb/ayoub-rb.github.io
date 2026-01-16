function orderProduct(productName, sizeId, colorId) {
  const size = document.getElementById(sizeId).value;
  const color = document.getElementById(colorId).value;

  const message = 
    `السلام عليكم، أريد طلب المنتج التالي:\n` +
    `المنتج: ${productName}\n` +
    `المقاس: ${size}\n` +
    `اللون: ${color}`;

  const phone = "212626508323";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
