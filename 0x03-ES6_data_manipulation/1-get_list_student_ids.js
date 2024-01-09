export default function getListStudentIds(arr) {
  const ids = [];

  if (Array.isArray(arr)) {
    for (const obj of arr) {
      ids.push(obj.id);
    }
  }
  return ids;
}
