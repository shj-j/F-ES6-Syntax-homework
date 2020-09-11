const getColumnName = (columns) => (columns.map(column => column.name));
const getDataValue = (keys, value) => keys.reduce((acc, key, index) => ({
 ...acc , [key]: value[index]
}), {})
const parseData = (res) => {
  const keys = getColumnName(res.column);
  return res.data.map(data => getDataValue(keys,data)) 
}
export { parseData };
