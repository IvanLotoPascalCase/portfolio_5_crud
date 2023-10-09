import c1 from "../../assets/cards/c1.jpg";
import c2 from "../../assets/cards/c2.jpg";
import c3 from "../../assets/cards/c3.jpg";
import c4 from "../../assets/cards/c4.jpg";

function BackgroundCard(value) {
  let switchUrl = "";

  switch (value) {
    case 1:
      switchUrl = c1;

      break;

    case 2:
      switchUrl = c2;
      break;
    case 3:
      switchUrl = c3;
      break;
    case 4:
      switchUrl = c4;
      break;

  }

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${switchUrl})` }}
    >
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
        Mi Botón
      </button>
    </div>
  );
}

export default BackgroundCard;
