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
    padding: 45px 15px;

    .container {
      display: flex;
      width: 60%;
      height: 40px;

      margin: 0 auto;
      margin-top: 24px;

      .search-input {
        flex: 1;
        box-shadow: 1px 1px #7e7e7e;

        padding: 0.375rem 0.75rem;
        border-width: 1px;
        border-style: solid;

        border-radius: 0.25rem;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-color: #fff;
      }

      .search-btn {
        width: 48px;
        height: 100%;

        box-shadow: 1px 1px #7e7e7e;

        background-color: rgb(255, 255, 255);
        border-width: 0.05rem;
        border-style: solid;
        border-color: rgb(255, 255, 255);
        border-radius: 0.25rem;

        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;

        cursor: pointer;

        &:active {
          background-color: #545b62 !important;
          /* #c0c4c8 */
          border-width: 3px !important;
          border-style: solid !important;
          border-color: #c0c4c8 !important;
        }

        img {
          width: 20px;
          height: auto;
        }
      }
    }
  }

  .book-icon {
    padding: 45px 15px 0;

    text-align: center;
  }

  .books-container {
    display: flex;
    flex-wrap: wrap;

    .book-item {
      flex: 1;
    }

    padding-bottom: 20px;
  }
`

export default searchWrapper
