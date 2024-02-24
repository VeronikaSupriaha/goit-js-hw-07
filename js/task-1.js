const allItems = document.querySelectorAll('ul > .item');
console.log(`Number of categories: ${allItems.length}`);
const categoryNames = document.querySelectorAll('.item > h2');
categoryNames.forEach(function (categoryName) {
  const title = categoryName.textContent;
  console.log(`Category: ${title}`);
  const titleNames = categoryName.parentElement.querySelectorAll('ul > li');
  console.log(`Elements: ${titleNames.length}`);
});
