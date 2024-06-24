import { styled } from 'styled-components'
const synopsisWrapper = styled.div`
  display: flex;
  height: 527px;

  margin-top: 50px;

  .content {
    font-family: Comfoorta-Bold;
    color: #403e3e;

    padding: 82px 0;

    .btn {
      padding: 0.7rem 4rem 0.7rem 3rem;
      background-color: #62add7;
      border-color: #62add7;
      font-size: 0.8rem;

      cursor: pointer;
    }
  }

  .item {
    height: 100%;
    flex: 1;
  }

  .img {
    width: 100%;
    height: 100%;
  }
`

export default synopsisWrapper
