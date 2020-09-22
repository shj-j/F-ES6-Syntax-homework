const getColumnName = (columns) => (columns.map(column => column.name));
const getDataValue = (keys, value) => keys.reduce((acc, key, index) => ({
 ...acc , [key]: value[index]
}), {})
// TODO 使用解构的方式取出data与column
const parseData = (res) => {
  // TODO keys不是很有必要
  const keys = getColumnName(res.column);
  // TODO reduce掌握不错，parseData最终可以简化成一行
  return res.data.map(data => getDataValue(keys,data)) 
}
export { parseData };
