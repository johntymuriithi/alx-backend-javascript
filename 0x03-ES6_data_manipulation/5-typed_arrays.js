export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);
  // Create a DataView for the ArrayBuffer
  const dataView = new DataView(buffer);

  // Check if the position is valid
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);

  // Return the ArrayBuffer
  return buffer;
}
