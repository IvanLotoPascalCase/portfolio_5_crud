import c1 from "../../assets/cards/c1.jpg";
import c2 from "../../assets/cards/c2.jpg";
import c3 from "../../assets/cards/c3.jpg";
import c4 from "../../assets/cards/c4.jpg";

function BackgroundCard({value: option}) {
  let switchUrl = "";

  switch (option) {
    case "Camisas":
      switchUrl = c1;
      console.log(switchUrl, "Prueba")
      break;
    case "Chaquetas":
      switchUrl = c2;
      break;
    case "Pantalones":
      switchUrl = c3;
      break;
    case "Zapatillas":
      switchUrl = c4;
      break;
    default:
      console.log("Error")
      break;
  }

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${switchUrl})` }}
    >
      <button className="bg-orange-200 text-slate-800 text-xl py-2 px-4 hover:bg-blue-300 min-w-[15vh] min-h-[6vh]">
        {option}
      </button>
    </div>
  );
}

export default BackgroundCard;
