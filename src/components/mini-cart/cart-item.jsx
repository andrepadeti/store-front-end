import * as React from 'react'
import styled from 'styled-components'
import Context from '../../context/context'

import Attributes from './attributes'
import Quantity from './quantity'

const Container = styled.div`
  display: flex;
  margin-block: 3rem;
  gap: 1rem;
`

const Details = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.h3`
  font-weight: 300;
`

const Brand = styled(Name)``

const Price = styled.p`
  font-weight: 500;
`

const PictureContainer = styled.div`
  flex: 1 1 40%;
  display: grid;
  place-content: center;
`

class CartItem extends React.Component {
  static contextType = Context

  priceInSelectedCurrency(prices) {
    const { currency } = this.context
    const { amount } = prices.find(price => price.currency === currency)
    return `${currency} ${amount}`
  }

  render() {
    const { product } = this.props
    return (
      <Container>
        <Details>
          <Title>
            <Brand>{product.brand}</Brand>
            <Name>{product.name}</Name>
          </Title>
          <Price>{this.priceInSelectedCurrency(product.prices)}</Price>
          <Attributes
            attributes={product.attributes}
            chosenAttributes={product.chosenAttributes}
          />
        </Details>
        <Quantity product={product} />
        <PictureContainer>
          <img src={product.gallery[0]} alt="dummy" />
        </PictureContainer>
      </Container>
    )
  }
}

export default CartItem
