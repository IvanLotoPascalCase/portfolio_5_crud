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
    case "PantalonesW":
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
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
        {option}
      </button>
    </div>
  );
}

export default BackgroundCard;
