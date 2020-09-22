// TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
const inject = (items, sections) => {
  sections.forEach((element, index) => {
    items.splice(element.index+index, 0, element.content) 
  });
  return items;
}
export { inject };
