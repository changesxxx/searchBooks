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

      width: 68%;
      height: 40px;
      margin: 0 190px;

      padding: 0.375rem 0.75rem;

      box-shadow: 1px 1px #7e7e7e;
      border: 1px solid #ced4da;
    }
  }
`

export default searchWrapper