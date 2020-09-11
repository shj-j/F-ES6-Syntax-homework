const inject = (items, sections) => {
  sections.forEach((element, index) => {
    items.splice(element.index+index, 0, element.content) 
  });
  return items;
}
export { inject };
