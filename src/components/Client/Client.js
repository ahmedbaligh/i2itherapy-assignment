import { useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

import ClientCard from './Client.styles';
import { deleteClient } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import { NewClient } from '../';

const Client = ({ client }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { onDeleteClient } = useAuth();

  const onDelete = async () => {
    await deleteClient(client.id);
    onDeleteClient(client.id);
  };

  return (
    <>
      <ClientCard>
        <Card.Content>
          {client.avatar && (
            <Image avatar size="huge" floated="right" src={client.avatar} />
          )}

          <Card.Header>
            {client.first_name} {client.last_name}
          </Card.Header>

          <Card.Meta>{client.email}</Card.Meta>
        </Card.Content>

        <Card.Content extra>
          <div className="card-actions">
            <Button fluid basic primary onClick={() => setIsOpen(true)}>
              Update
            </Button>

            <Button fluid negative basic onClick={onDelete}>
              Delete
            </Button>
          </div>
        </Card.Content>
      </ClientCard>

      <NewClient isOpen={isOpen} setIsOpen={setIsOpen} client={client} />
    </>
  );
};

export default Client;
