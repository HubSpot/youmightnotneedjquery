export const engineOrder = ['jquery', 'ie8', 'ie9', 'ie10', 'ie11', 'modern'];

export default function getNewestEngine(
  engines: string[],
  targetEngine?: string
): string {
  engines = [...engines];

  engines.sort((a, b) => engineOrder.indexOf(b) - engineOrder.indexOf(a));
  engines = engines.filter((engine) => engine !== 'jquery');

  if (!targetEngine) {
    return engines[0];
  }

  return engines.find(
    (engine) => engineOrder.indexOf(engine) <= engineOrder.indexOf(targetEngine)
  )!;
}
