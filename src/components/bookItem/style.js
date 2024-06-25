import { styled } from 'styled-components'

const bookWrapper = styled.div`
  box-sizing: border-box;
  max-width: 33.333333%;
  min-width: 33.333333%;
  height: 260px;

  margin: 12px 0;
  padding: 0 15px;

  .book {
    display: flex;
    background-color: #fff;
    height: 100%;

    border-radius: 4px;

    .cover {
      flex: 4;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .book-info {
      flex: 4;
      padding: 20px;
      color: #212529;

      .item-title {
        font-size: 0.8rem;
        font-family: Comfoorta-Bold;
      }

      .title {
        margin-bottom: 8px;

        font-size: 0.8rem;
        font-family: Comfoorta-Bold;
      }

      .authors,
      .date,
      .publisher {
        margin: 12px 0;
        font-size: 0.7rem;
        font-family: Comfoorta-Light;
      }
    }
  }
`

export default bookWrapper
