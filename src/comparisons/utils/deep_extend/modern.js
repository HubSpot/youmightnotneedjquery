function deepExtend(out, ...arguments_) {
  if (!out) {
    return {};
  }

  for (const obj of arguments_) {
    if (!obj) {
      continue;
    }

    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object' && value !== null) {
        out[key] = Array.isArray(value)
          ? [...value]
          : deepExtend(out[key], value);
      } else {
        out[key] = value;
      }
    }
  }

  return out;
}

deepExtend({}, objA, objB);
