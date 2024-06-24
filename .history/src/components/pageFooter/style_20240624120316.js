import { styled } from 'styled-components'

const FooterWrapper = styled.div`
  height: 90px;
  background-color: #343a40;

  .content {
    display: flex;
    height: 100%;
    justify-content: space-between;

    align-items: center;

    .title {
      font-size: 26px;
      color: #89c6ff;
    }
  }
`

export default FooterWrapper
