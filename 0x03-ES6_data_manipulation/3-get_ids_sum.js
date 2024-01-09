export default function getStudentIdsSum(arr) {
  const arrId = arr.map((obj) => obj.id);
  const initialValue = 0;
  const sumWithInitial = arrId.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  return sumWithInitial;
}
