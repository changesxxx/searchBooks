import { styled } from 'styled-components'

const searchWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .describe {
    display: flex;

    div {
      flex: 1;
    }
  }

  .input {
    display: flex;
    padding: 48px 16px;

    .search-input {
      width: 68%;
      height: 40px;
      margin: 0 auto;

      box-shadow: 1px 1px #7e7e7e;
      border: 1px solid #ced4da;
    }

    .search-btn {
      width: 20px;
      height: 100px;
    }
  }
`

export default searchWrapper