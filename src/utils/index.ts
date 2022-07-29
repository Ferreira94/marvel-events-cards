export const randomPoints = [0];

for (var i = 0; i < 8; i++) {
  const point = Math.floor(Math.random() * 11);

  randomPoints.push(point);
}
