'use client';

import Image from 'next/image';
import tile from '@/assets/images/tiles/tile.png';

type TileType = {
  x: number;
  y: number;
  rowLength: number;
}

const Tile = ({ x, y, rowLength }: TileType) => {
  return (
    <>
      <a onClick={() => {
        console.log(x,y);}} style={{
        position: 'absolute',
        left: 640 - (rowLength * 64) + (x * 128) + 32,
        top: y * 32 + 16,
        width: 64,
        height: 32,
      }}>
        <Image
          src={tile}
          alt={'tileId'}
          width={128}
          style={{
            position: 'absolute',
            top: -16,
            left: -32,
            maxWidth: 128,
            // height: 128,
            pointerEvents: 'none',
          }}
        />
      </a>
    </>
  )
}

export default Tile;
