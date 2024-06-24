import { styled } from 'styled-components'

import searchIcon from '@/assets/img/search-icon.svg'

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
    justify-content: center;

    .search-input {
      width: 68%;
      height: 40px;

      box-shadow: 1px 1px #7e7e7e;
      border: 1px solid #ced4da;
    }

    .search-btn {
      width: 40px;
      height: 100%;

      background: ${searchIcon};
    }
  }
`

export default searchWrapper
