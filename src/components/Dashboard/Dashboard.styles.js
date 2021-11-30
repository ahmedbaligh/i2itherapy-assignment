import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

export const ClientsSegment = styled(Segment)`
  .header {
    margin-bottom: 40px;
  }

  .clients-control {
    display: flex;
    flex-direction: column;
    gap: 25px;

    .search-wrapper {
      width: clamp(200px, 45vw, 100%);
    }
  }
`;

export const NewClientSegment = styled(Segment)`
  display: flex;
  gap: 5px;

  .add-client {
    padding: 0 5px;
    cursor: pointer;
    font-size: 1.3rem;
    color: teal;
    font-weight: 600;
    transition: color 0.3s;

    &:hover {
      color: skyblue;
    }
  }
`;
