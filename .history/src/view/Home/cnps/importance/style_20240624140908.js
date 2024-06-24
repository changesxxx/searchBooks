import { styled } from 'styled-components'
const importanceWrapper = styled.div`
  margin-top: 50px;

  .title {
    display: flex;
    height: 90px;
    justify-content: center;
    align-items: center;

    margin-bottom: 8px;

    font-size: 1.75rem;
    text-transform: uppercase !important;
  }

  .item {
    display: flex;
  }

  .text,
  .img {
    flex: 1;
  }
`

export default importanceWrapper
