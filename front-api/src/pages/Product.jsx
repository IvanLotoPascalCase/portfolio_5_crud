import React from 'react'

// INPUTS
import Button from '../components/inputs/Button'
import StarRating from '../components/inputs/StarRating'
import Share from '../components/inputs/Share'

// DATA DISPLAY
import Card from '../components/dataDisplay/Card'
import Anchor from '../components/dataDisplay/Anchor'
import Container from '../components/dataDisplay/Container'
import MainTitle from '../components/dataDisplay/MainTitle'
import SubTitle from '../components/dataDisplay/SubTitle'
import Divider from '../components/dataDisplay/Divider'

const Product = () => {
    return (
        <>
            <Container>
                <Card>
                    <div className='flex justify-between'>
                        <Anchor url='https://www.paris.cl/trek' value='Trek' newTab={true} />
                        <StarRating />
                    </div>
                    <div>
                        <MainTitle value='Bicicleta MTB Marlin Celeste 5 Talla S Aro 27.5"' />
                        <div className='flex justify-between'>
                            <div>
                                <SubTitle value='Vendido por: Paris' />
                                <SubTitle value='SKU 375223999' />
                            </div>
                            <div className='flex align-middle'>
                                <Share size='l' />
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className='flex justify-center'>
                        <Button value='Agregar a mi Carro' buttonType='main' />
                        <Button value='Comprar Ahora' buttonType='secondary' />
                    </div>
                    <div className='flex justify-center'>
                        <Anchor url='https://www.paris.cl/' value='Cambios y Devoluciones'></Anchor>
                    </div>
                    <Divider />
                </Card>
            </Container>
        </>
    )
}

export default Product