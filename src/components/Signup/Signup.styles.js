import styled from 'styled-components';

export default styled.div`
  min-width: min(800px, 50%);
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .segment {
    min-width: min(500px, 50%);
  }

  label {
    font-size: 1rem !important;
  }

  .sign-switch {
    text-align: center;
    font-size: 1rem;

    .action {
      margin-inline-start: 3px;
      transition: color 0.3s;
      color: teal;
      cursor: pointer;

      &:hover {
        color: skyblue;
      }
    }
  }
`;
