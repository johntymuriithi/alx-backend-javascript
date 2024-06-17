export default function guardrail(mathFunction) {
  const queue = [];
  const text = 'Guardrail was processed';

  try {
    const value = mathFunction();
    queue.push(text);
    queue.unshift(value);
  } catch (error) {
    queue.push(text);
    queue.unshift(error.message);
  }

  return queue;
}
