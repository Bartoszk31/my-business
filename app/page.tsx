import Link from "next/link";
import Map from "@/components/Map/Map";

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
        <div className="w-full h-20 bg-emerald-800 sticky top-0 z-10">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              <ul className="hidden md:flex gap-x-6 text-white">
                <li>
                  <Link href="/about">
                    <p>About Us</p>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <p>Services</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contacts">
                    <p>Contacts</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Map mapToRender={mapToRender}></Map>
      </>
  );
}
