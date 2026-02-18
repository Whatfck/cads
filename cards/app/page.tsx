export default function LayoutPractica() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-row gap-8 w-full justify-center items-center">
        
        {/* CARD 1: Imagen de fondo con BLUR DEGRADADO */}
        <div className="relative w-[30%] aspect-[9/16] rounded-[40px] overflow-hidden shadow-md group border-[7px] border-white">
          <img 
            src="https://picsum.photos/seed/img1/600/800" 
            alt="Fondo" 
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* CAPA DE BLUR CON DEGRADADO (MÁSCARA) */}
          {/* h-[60%] define hasta donde sube el efecto */}
          {/* [mask-image:...] hace que el blur se desvanezca de abajo hacia arriba */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] backdrop-blur-md bg-gradient-to-t from-black/50 to-transparent [mask-image:linear-gradient(to_top,black_20%,transparent_100%)]">
          </div>

          {/* Contenedor de texto */}
          <div className="relative h-full flex flex-col justify-end p-8 text-white">
            <h3 className="text-2xl font-black tracking-tighter">NEW YORK</h3>
            <p className="text-sm font-semibold opacity-90 mt-1 uppercase tracking-widest">Economy</p>
            <p className="text-sm font-semibold opacity-90 mt-1 uppercase tracking-widest">From 120</p>
            <p className="text-sm font-medium opacity-100 mt-2 bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-sm">search flight
            </p>
          </div>
        </div>

        {/* CARD 2: Sin blur (Original) */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-md rounded-[30px] w-[30%] aspect-[9/16] overflow-hidden">
          <div className="h-[70%] bg-gray-300 flex items-center justify-center w-full">
            <span className="text-gray-500 font-medium">Imagen 2</span>
          </div>
          <div className="p-6 flex flex-col justify-center flex-1">
            <h3 className="text-xl font-bold text-gray-800">Card Normal</h3>
            <p className="text-sm text-gray-600 mt-2">Descripción estándar.</p>
          </div>
        </div>

      </div>
    </div>
  );
}