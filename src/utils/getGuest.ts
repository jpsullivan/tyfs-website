import authorsJson from 'guests.json';

/** Return guest info, */
export function getGuest(author: string) {
  const person = authorsJson[author as keyof typeof authorsJson];
  if (!person) {
    console.warn('Invalid author. Did you add it to guests.json?');
    return {
      name: 'React Team',
      url: 'https://twitter.com/reactjs',
    };
  }
  return person;
}
