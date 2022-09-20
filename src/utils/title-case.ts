const capsWords = ['JSON', 'HTML', 'AJAX'];

export default function titleCase(str: string) {
  return str
    .replace(
      /(^|\b)([a-z])([a-z]+)/g,
      (_match, space, first, rest) => `${space}${first.toUpperCase()}${rest}`
    )
    .replace(new RegExp(`(${capsWords.join('|')})`, 'ig'), (_match, word) =>
      word.toUpperCase()
    );
}
