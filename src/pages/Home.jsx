import { useNavigate } from "react-router-dom";
import houses from "../houses";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-blue-700 text-white p-6 shadow">
                <h1 className="text-2xl font-bold">Magdadom</h1>
                <p className="Text-blue-200 text-sm mt-1">Gestione Prenotazioni</p>
            </div>

            <div className="p-4 space-y-4 max-w-lg mx-auto mt-4">
                {houses.map((house) => (
                    <button
                      key={house.id}
                      onClick={() => navigate(`/house/${house.id}`)}
                      className="w-full text bg-white rounded-2xl shadow p-5 flex items-center gap-4 active:scale:95 transition-transform"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold"
                        style={{ backgroundColor: house.color }}
                      >
                        {house.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-lg">{house.name}</p>
                        <p className="text-gray-400 text-sm">Visualizza calendario</p>
                      </div>
                      <div className="ml-auto text-gray-300 text-xl">›</div>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Home;