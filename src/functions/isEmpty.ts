/**
 * Check if an array has any value, can be used to prevent to map on an empty array.
 * @param array
 * @returns Returns a boolean
 */
export default function isEmpty(array: any[] | undefined) {
  return array?.length === 0 || array === undefined ? true : false;
}
