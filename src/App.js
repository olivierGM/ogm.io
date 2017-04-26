import React from 'react';
import styled from 'styled-components'
import logo from './ogm.jpg';
import background from './bgCard.jpg';

const PageContainer = styled.div`
  background-color: #FAFAFA
  height: 100%
  width: 100%
  display: flex
  align-items: center
  justify-content: center
  padding: 0
  margin: 0
` 

const Card = styled.div`
  background-color: #FFFFFF
  width: 512px
  boxShadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)
  border-radius: 2px
`

const CardTitleSection = styled.div`
  height: 72px
  padding: 16px
`;

const CardImageSection = styled.img`
  height: 256px
  width:100%
`;

const CardButtonsSection = styled.div`
  height: 144px
`;

const TitleLogo = styled.img`
  border-radius: 100%
  height: 40px
  width: 40px
  boxShadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)
`;

const TitleName = styled.span`
    font-size: 14px
`;

const TitleTitle = styled.span`
    font-size: 14px
`;


const App = () => (
  <PageContainer>
    <Card>
      <CardTitleSection>
        <TitleLogo src={logo}/>
        <TitleName>Olivier Guénette-Mégélas</TitleName>
        <TitleTitle>DéveloppeurWeb</TitleTitle>
      </CardTitleSection>
      <CardImageSection src={background}/>
      <CardButtonsSection>
        CardButtonsSection
      </CardButtonsSection>
    </Card>
  </PageContainer>
);

export default App;
