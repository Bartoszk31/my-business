'use client';

import Tile from "@/components/Map/Tile/Tile";
import {useDragScroll} from "@/hooks/useDragScroll";
import {MapToRenderType} from "@/types";

type MapType = {
    mapToRender: MapToRenderType;
}

const Map = ({ mapToRender }: MapType) => {
    const [ref] = useDragScroll();

    return (
        <div ref={ref} className={'relative'} style={{height: '100vh', width: '50vw', overflow: 'hidden'}}>
            {mapToRender.map((row, y) => {
                return row.map((tileId, x) => (
                    <Tile key={`${x},${y}`} x={x} y={y} rowLength={row.length}/>
                ))
            })}
        </div>
    )
}

export default Map;
