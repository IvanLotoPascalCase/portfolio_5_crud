import React from 'react'

// INPUTS
import Button from '../components/inputs/Button'
import StarRating from '../components/inputs/StarRating'
import Share from '../components/inputs/Share'

// DATA DISPLAY
import Card from '../components/dataDisplay/Card'
import Anchor from '../components/dataDisplay/Anchor'
import Container from '../components/dataDisplay/Container'
import Text from '../components/dataDisplay/Text'
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
                        <Text value='Bicicleta MTB Marlin Celeste 5 Talla S Aro 27.5"' type='main-contrast' />
                        <div className='flex justify-between'>
                            <div>
                                <Text value='Vendido por: Paris' type='sub' />
                                <Text value='SKU 375223999' type='sub' />
                            </div>
                            <div className='flex align-middle'>
                                <Share size='l' />
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className='flex justify-start'>
                        <Text value='$ 410.000' type='main' extra='p-2' />
                        <div className='bg-slate-300 rounded-md flex justify-center'>
                            <Text value='50%' type='sub-contrast' extra='p-2' />
                        </div>
                        <Text value='Antes: $820.000' type='sub' extra='p-2' />
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