export enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

// type PhoneNumberDictionary = Record<
//   string,
//   {
//     num: number;
//   }
// >;

export type PhoneNumberDictionary = {
  [phone: string]: {
    num: number;
  };
};
export interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}
