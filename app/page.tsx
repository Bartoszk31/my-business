import Image from "next/image";
import tile from '@/assets/images/tiles/tile.png';
import Tile from '@/components/Map/Tile/Tile';

export default function Home() {
  const map = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ];
  const mapToRender = [];
  const size = map[0].length;
  let diagY = 0, diagX = 0;
  let x, y;
  while (diagX < size) {
    x = diagX;
    y = diagY;
    const row = [];

    while (y >= 0 && x < size) {
      console.log(y,x);
      row.push(map[y][x]);
      y--;
      x++;
    }

    mapToRender.push(row);

    if (diagY === size - 1) {
      diagX++;
    } else {
      diagY++;
    }
  }

  return (
    <>
      <div>{'asdasd'}</div>
      <div className={'relative'}>
        {mapToRender.map((row, y) => {
            return row.map((tileId, x) => (
                  <Tile key={`${x},${y}`} x={x} y={y} rowLength={row.length} />
                ))}
            )
        }
      </div>
    </>
  );
}
