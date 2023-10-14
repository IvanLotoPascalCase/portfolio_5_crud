import c1 from "../../assets/cards/c1.jpg";
import c2 from "../../assets/cards/c2.jpg";
import c3 from "../../assets/cards/c3.jpg";
import c4 from "../../assets/cards/c4.jpg";

function BackgroundCard({ value: option }) {
  let switchUrl = "";

  switch (option) {
    case "Hombre":
      switchUrl = c1;
      break;
    case "Mujer":
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
    <a href="#">
      <div className="bg-transparent hover:bg-orange-200/50 transitions-colors duration-300 ease-in-out ">
        <div
          className="bg-cover bg-center h-screen flex items-start justify-start max-h-[70vh] md:max-h-[100vh]"
          style={{ backgroundImage: `url(${switchUrl})` }}
        >
          <button className="bg-orange-600 transitions-colors duration-300 ease-in-out text-stone-100 text-start text-xl py-1 px-6 hover:bg-orange-500 min-w-[20vh] min-h-[5vh] mt-10">
            {option}
          </button>
        </div>
      </div>
    </a>
  );
}

export default BackgroundCard;
