import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const arr = [];
  for (const size of sizes) {
    const croom = new ClassRoom(size);
    arr.push(croom);
  }
  return arr;
}
