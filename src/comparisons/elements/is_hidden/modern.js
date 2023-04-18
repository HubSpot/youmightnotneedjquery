function isHidden(el) {
  return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}
