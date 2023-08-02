// function fetchItems(): string[] {
//   let items = ['a', 'b', 'c', 'd', 'e'];
//   return items;
// }
// fetchItems();
// let result = fetchItems();
// console.log(result);

function fetchItems(): Promise<string[]> {
  let items = ['a', 'b', 'c'];
  return new Promise((resolve, reject) => {
    resolve(items);
  });
}
let result = fetchItems();
