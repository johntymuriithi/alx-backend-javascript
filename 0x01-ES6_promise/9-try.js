export default function guardrail(mathFunction) {
  const queue = [];
  const text = 'Guardrail was processed';

  try {
    const value = mathFunction();
    queue.push(value);
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push(text);
  }

  return queue;
}
