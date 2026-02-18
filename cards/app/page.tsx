import { Plane, Tag } from "lucide-react";

export default function LayoutPractica() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-row gap-8 w-full justify-center items-center">
        
        {/* CARD 1*/}
        <div className="relative w-[30%] aspect-[10/16] rounded-[40px] overflow-hidden shadow-md group border-[7px] border-white">
          <img 
            src="https://picsum.photos/seed/img1/600/800" 
            alt="Fondo" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-[40%] backdrop-blur-[2px] bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="relative h-full flex flex-col justify-end p-8 text-white">
            <h3 className="text-2xl font-black">NEW YORK</h3>
            <p className="text-xs font-semibold opacity-50 mt-0 uppercase tracking-widest">Economy</p>
            <p className="text-xs font-semibold mt-3 uppercase tracking-widest flex items-center gap-1">
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4 opacity-50" />
                from
              </span>
              <span>$120</span>
              <span className="opacity-50 flex items-center gap-1">
                <Plane className="w-4 h-4 ml-4" />
              </span>
              <span>JFK</span>
            </p>
            <p className="text-xs text-black text-center font-bold mt-4 bg-white py-3 rounded-full flex items-center justify-center">Search flight</p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="relative w-[30%] aspect-[10/16] rounded-[40px] overflow-hidden shadow-md group border-[7px] border-white bg-white">
          <img 
            src="https://picsum.photos/seed/img2/600/800" 
            alt="Fondo" 
            className="absolute top-0 left-0 w-full aspect-square object-cover rounded-[40px]"
          />
          <div className="relative h-full flex flex-col justify-end p-8 text-black">
            <h3 className="text-xl font-black">SAN FRANCISCO</h3>
            <p className="text-xs font-semibold opacity-50 mt-0 uppercase tracking-widest">Premium economy</p>
            <p className="text-xs font-semibold mt-3 uppercase tracking-widest flex items-center gap-1">
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4 opacity-50" />
                from
              </span>
              <span>$240</span>
              <span className="opacity-50 flex items-center gap-1">
                <Plane className="w-4 h-4 ml-4" />
              </span>
              <span>SFO</span>
            </p>
            <p className="text-xs text-white text-center font-bold mt-4 bg-black py-3 rounded-full flex items-center justify-center">Search flight</p>
          </div>
        </div>
      </div>
    </div>
  );
}
