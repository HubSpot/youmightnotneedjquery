function isNumeric(val) {    
  if (typeof val === 'number') {
    return val - val === 0;
  }

  if (typeof val === 'string' && val.trim() !== '') {
    return Number.isFinite(+val);
  }

  return false;
}

isNumeric(val);
