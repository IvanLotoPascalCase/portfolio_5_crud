import "../../styles/css/GradientBackground.css"; // Asegúrate de importar tu archivo CSS

const GradientBackground = ({ children }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-gradient-to-b from-slate-500 to-orange-100 w-full h-50">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;
