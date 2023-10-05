import Container from "../dataDisplay/Container";
import Card from "../dataDisplay/Card";
import GradientBackground from "../dataDisplay/GradientBackground";
import Anchor from "../dataDisplay/Anchor";
import StarRating from "../inputs/StarRating";
import Text from "../dataDisplay/Text";
import Share from "../inputs/Share";
import Divider from "../dataDisplay/Divider";
import Button from "../inputs/Button";

const Ofertas = () => {
  return (
    <>
      <Container>
        <GradientBackground>
          <div className="flex justify-center">
            <Card>
              <div className="flex justify-between">
                <Anchor
                  url="https://www.paris.cl/trek"
                  value="Trek"
                  newTab={true}
                />
              </div>
              <div>
                <Text value="Bicicleta MTB Marlin" type="main-contrast" />
                <div className="flex justify-between">
                  <div>
                    <Text value="Vendido por: Paris" type="sub" />
                  </div>
                </div>
              </div>
              <Divider />
              <div className="grid grid-rows-2 grid-flow-col">
                <div className="flex justify-start items-center">
                  <Text value="$ 410.000" type="main" extra="p-2" />
                  <div className="bg-slate-300 rounded-md flex justify-center">
                    <Text value="50%" type="sub-contrast" extra="p-2" />
                  </div>
                </div>
                <Text value="Antes: $820.000" type="sub" extra="p-2" />
              </div>
            </Card>
            <Card>
              <div className="flex justify-between">
                <Anchor
                  url="https://www.paris.cl/trek"
                  value="Trek"
                  newTab={true}
                />
              </div>
              <div>
                <Text value="Bicicleta MTB Marlin" type="main-contrast" />
                <div className="flex justify-between">
                  <div>
                    <Text value="Vendido por: Paris" type="sub" />
                  </div>
                </div>
              </div>
              <Divider />
              <div className="grid grid-rows-2 grid-flow-col">
                <div className="flex justify-start items-center">
                  <Text value="$ 410.000" type="main" extra="p-2" />
                  <div className="bg-slate-300 rounded-md flex justify-center">
                    <Text value="50%" type="sub-contrast" extra="p-2" />
                  </div>
                </div>
                <Text value="Antes: $820.000" type="sub" extra="p-2" />
              </div>
            </Card>
            <Card>
              <div className="flex justify-between">
                <Anchor
                  url="https://www.paris.cl/trek"
                  value="Trek"
                  newTab={true}
                />
              </div>
              <div>
                <Text value="Bicicleta MTB Marlin" type="main-contrast" />
                <div className="flex justify-between">
                  <div>
                    <Text value="Vendido por: Paris" type="sub" />
                  </div>
                </div>
              </div>
              <Divider />
              <div className="grid grid-rows-2 grid-flow-col">
                <div className="flex justify-start items-center">
                  <Text value="$ 410.000" type="main" extra="p-2" />
                  <div className="bg-slate-300 rounded-md flex justify-center">
                    <Text value="50%" type="sub-contrast" extra="p-2" />
                  </div>
                </div>
                <Text value="Antes: $820.000" type="sub" extra="p-2" />
              </div>
            </Card>
            <Card>
              <div className="flex justify-between">
                <Anchor
                  url="https://www.paris.cl/trek"
                  value="Trek"
                  newTab={true}
                />
              </div>
              <div>
                <Text value="Bicicleta MTB Marlin" type="main-contrast" />
                <div className="flex justify-between">
                  <div>
                    <Text value="Vendido por: Paris" type="sub" />
                  </div>
                </div>
              </div>
              <Divider />
              <div className="grid grid-rows-2 grid-flow-col">
                <div className="flex justify-start items-center">
                  <Text value="$ 410.000" type="main" extra="p-2" />
                  <div className="bg-slate-300 rounded-md flex justify-center">
                    <Text value="50%" type="sub-contrast" extra="p-2" />
                  </div>
                </div>
                <Text value="Antes: $820.000" type="sub" extra="p-2" />
              </div>
            </Card>
          </div>
        </GradientBackground>
      </Container>
    </>
  );
};

export default Ofertas;
