import { styled } from 'styled-components'
const technologiesWrapper = styled.div`
  padding: 48px 15px 24px;

  .container {
    display: flex;

    .item {
      flex: 1;
      height: 378px;
      padding: 0 15px;

      text-align: center;

      font-family: Comfoorta-Light;
      font-size: 1rem;
      color: #403e3e;
      font-weight: 300;
    }
  }

  .used {
    height: 284px;

    .title {
      text-align: center;
      font-size: 1.75rem;
    }
  }
`

export default technologiesWrapper
