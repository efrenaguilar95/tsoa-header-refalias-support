/**
 * Checks for a supported header type
 * key types can be `number` to support string indexed access types
 */
export type IsValidHeader<Header> = keyof Header extends string | number
  ? Header[keyof Header] extends string | string[] | number | undefined
    ? object
    : 'Header values must be string, string[] or number'
  : 'Header names must be of type string';
