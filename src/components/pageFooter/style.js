import { styled } from 'styled-components'

const FooterWrapper = styled.div`
  min-height: 84px;
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

    .text {
      font-size: 14px;
      color: #fff;
    }
  }
`

export default FooterWrapper
