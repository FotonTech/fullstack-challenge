import React from 'react'
import { HeaderBackIcon, HeaderContainer, HeaderImage } from './styles'

export const Header = ({ onGoBack }) => {
  return (
    <HeaderContainer>
      <HeaderImage
        source={require('../../../../../assets/imgs/oval.png')}
        alt="oval"
        alignSelf="flex-end"
        width="100"
        height="100"
      />
      <HeaderBackIcon name="arrow-left" onPress={onGoBack} />

      <HeaderImage
        source={require('../../../../../assets/imgs/oval-outlined.png')}
        alt="oval"
        alignSelf="flex-end"
        marginRight="120"
        width="24"
        height="24"
      />

      <HeaderImage
        source={require('../../../../../assets/imgs/oval-pink.png')}
        alt="oval"
        marginLeft="84"
        width="15"
        height="15"
      />

      <HeaderImage
        source={require('../../../../../assets/imgs/oval-blue.png')}
        alt="oval"
        marginLeft="94"
        width="63"
        height="63"
      />

      <HeaderImage
        source={require('../../../../../assets/imgs/oval.png')}
        alt="oval"
        transform="rotate(200deg)"
        alignSelf="flex-end"
        marginRight="104"
        width="40"
        height="40"
      />
    </HeaderContainer>
  )
}
