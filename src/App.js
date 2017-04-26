import React from 'react';
import styled from 'styled-components'

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

const TitleSection = styled.div`
  height: 72px
`;

const ImageSection = styled.div`
  height: 256px
`;

const ButtonsSection = styled.div`
`;
// const cardWidth = 450;
        // const cardHeight = 300;
        // return {
        //     backgroundColor: AppColor.cardBackground,
        //     position: 'fixed',
        //     width: cardWidth,
        //     maxWidth: '95%',
        //     height: cardHeight,
        //     top: (window.innerHeight - APP_BAR_HEIGHT - cardHeight) < 20 ? 4 : ((window.innerHeight - APP_BAR_HEIGHT - cardHeight) / 2) - 20,
        //     margin: '0 auto',
        //     boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)',
        //     zIndex: UPLOAD_BUTTON_INDEX + 1,
        //     left: (window.innerWidth - cardWidth) / 2 > 0 ? (window.innerWidth - cardWidth) / 2 : 8
        // };

const App = () => (
  <PageContainer>
    <Card>
      <TitleSection>
        marche tu ca
      </TitleSection>
      <ImageSection>
        ImageSection
      </ImageSection>
      <ButtonsSection>
        ButtonsSection
      </ButtonsSection>
    </Card>
  </PageContainer>
);

export default App;
