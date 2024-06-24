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
    padding: 48px 16px;
    text-align: center;

    .search-input {
      display: block;
      width: 100%;
      margin: 0 190px;
    }
  }
`

export default searchWrapper
