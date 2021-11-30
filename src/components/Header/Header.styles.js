import styled from 'styled-components';

export default styled.header`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;

    .brand-logo {
      img {
        display: block;
      }
    }

    .brand-name {
      font-size: clamp(1.4rem, 2.5vw, 2.5rem);
      font-weight: 500;
    }
  }

  .user-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    .user-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

      @media (max-width: 767px) {
        display: none;
      }

      .logged-text {
        font-size: 1rem;
        .user-name {
          font-style: italic;
          padding-inline-start: 5px;
          color: #0080ff;
        }
      }

      .user-avatar {
        border-radius: 50%;
        max-width: 40px;
      }
    }
  }
`;
