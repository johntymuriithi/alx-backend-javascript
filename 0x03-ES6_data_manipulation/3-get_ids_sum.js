export default function getStudentIdsSum(list) {
  return list.reduce((acc, ini) => acc + ini.id, 0);
}
