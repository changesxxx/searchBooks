import { styled } from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-top: 6px;
  padding: 0 15px;

  .title {
    display: flex;
    height: 100%;
    align-items: center;

    font-size: 26px;
    color: #89c6ff;
  }

  .other {
    display: flex;
    height: 100%;

    align-items: center;

    .item {
      margin: 0 5px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`
export default HeaderWrapper
