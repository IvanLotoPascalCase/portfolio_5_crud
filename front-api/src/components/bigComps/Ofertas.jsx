import Container from "../dataDisplay/Container";
import Card from "../dataDisplay/Card";
import GradientBackground from "../dataDisplay/GradientBackground";
import Anchor from "../dataDisplay/Anchor";
import StarRating from "../inputs/StarRating";
import Text from "../dataDisplay/Text";
import Share from "../inputs/Share";
import Divider from "../dataDisplay/Divider";
import Button from "../inputs/Button";

// IMPORT DE IMAGENES
import coferta1 from '../../assets/cards/cofertas1.jpg'
import coferta2 from '../../assets/cards/cofertas2.jpg'
import coferta3 from '../../assets/cards/cofertas3.jpg'
import coferta4 from '../../assets/cards/cofertas4.jpg'

const Ofertas = () => {
  return (
    <>
      <Container>
        <div className="pt-28">
          <div className="flex justify-center">
            <Card>
              <div className="py-4">
                <Text value="Camisa Verde - Levi's" type="main-contrast" />
              </div>
              <div
                className="bg-cover bg-center h-screen flex items-center justify-center max-h-[30vh] py-2"
                style={{ backgroundImage: `url(${coferta1})` }}
              >
              </div>
              <Divider />
              <div className="grid grid-rows-2 grid-flow-col">
                <div className="flex justify-start items-center">
                  <Text value="$ 410.000" type="main" extra="p-2" />
                  <div className="bg-slate-300 flex justify-center">
                    <Text value="50%" type="sub-contrast" extra="p-2" />
                  </div>
                </div>
                <Text value="Antes: $820.000" type="sub" extra="p-2" />
              </div>
            </Card>
            <Card>
              <div className="py-4">
                <Text value="Camisa Cafe - Levi's" type="main-contrast" />
              </div>
              <div
                className="bg-cover bg-center h-screen flex items-center justify-center max-h-[30vh] py-2"
                style={{ backgroundImage: `url(${coferta2})` }}
              >
              </div>
              <Divider />
              <div className="grid grid-rows-2 grid-flow-col">
                <div className="flex justify-start items-center">
                  <Text value="$ 410.000" type="main" extra="p-2" />
                  <div className="bg-slate-300 flex justify-center">
                    <Text value="50%" type="sub-contrast" extra="p-2" />
                  </div>
                </div>
                <Text value="Antes: $820.000" type="sub" extra="p-2" />
              </div>
            </Card>
            <Card>
              <div className="py-4">
                <Text value="Relaxed Blue-Jeans - Foster" type="main-contrast" />
              </div>
              <div
                className="bg-cover bg-center h-screen flex items-center justify-center max-h-[30vh] py-2"
                style={{ backgroundImage: `url(${coferta3})` }}
              >
              </div>
              <Divider />
              <div className="grid grid-rows-2 grid-flow-col">
                <div className="flex justify-start items-center">
                  <Text value="$ 410.000" type="main" extra="p-2" />
                  <div className="bg-slate-300 flex justify-center">
                    <Text value="50%" type="sub-contrast" extra="p-2" />
                  </div>
                </div>
                <Text value="Antes: $820.000" type="sub" extra="p-2" />
              </div>
            </Card>
            <Card>
              <div className="py-4">
                <Text value="Camiseta Oversized - Nonstop" type="main-contrast" />
              </div>
              <div
                className="bg-cover bg-center h-screen flex items-center justify-center max-h-[30vh] py-2"
                style={{ backgroundImage: `url(${coferta4})` }}
              >
              </div>
              <Divider />
              <div className="grid grid-rows-2 grid-flow-col">
                <div className="flex justify-start items-center">
                  <Text value="$ 410.000" type="main" extra="p-2" />
                  <div className="bg-slate-300 flex justify-center">
                    <Text value="50%" type="sub-contrast" extra="p-2" />
                  </div>
                </div>
                <Text value="Antes: $820.000" type="sub" extra="p-2" />
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Ofertas;
