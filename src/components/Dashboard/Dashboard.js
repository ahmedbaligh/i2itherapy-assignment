import { useCallback, useEffect, useState } from 'react';
import { Divider, Card, Header, Input } from 'semantic-ui-react';

import { Header as AppHeader, Client, NewClient } from '../';
import { useAuth } from '../../contexts/AuthContext';
import { ClientsSegment, NewClientSegment } from './Dashboard.styles';

const Dashboard = () => {
  const [shownClients, setShownClients] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const { clients } = useAuth();

  const hasMatch = useCallback(
    client =>
      client.first_name.includes(searchTerm) ||
      client.last_name.includes(searchTerm) ||
      client.email.includes(searchTerm),
    [searchTerm]
  );

  useEffect(() => {
    setShownClients(clients ?? []);
    setSearchTerm('');
  }, [clients]);

  useEffect(() => {
    if (clients) setShownClients(clients.filter(hasMatch));
  }, [searchTerm, clients, hasMatch]);

  return (
    <>
      <AppHeader />
      <Divider fitted />

      <ClientsSegment padded="very">
        <Header as="h2">Your Clients</Header>

        <div className="clients-control">
          <div className="search-wrapper">
            <Input
              fluid
              icon="search"
              placeholder="Lookup a client"
              onChange={e => setSearchTerm(e.target.value.trim())}
              value={searchTerm}
            />
          </div>

          <Card.Group className="clients">
            {shownClients.map(client => (
              <Client key={client.id} client={client} />
            ))}
          </Card.Group>
        </div>
      </ClientsSegment>

      <NewClientSegment padded="very">
        <Header>Want to help a new soul, today? </Header>

        <span className="add-client" onClick={() => setIsOpen(true)}>
          Add New Client
        </span>
      </NewClientSegment>

      <NewClient isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Dashboard;
