import { useRef, useState } from 'react';
import { Modal, Button, Form, Input } from 'semantic-ui-react';

import { useAuth } from '../../contexts/AuthContext';
import { addClient, updateClient } from '../../utils/api';

const NewClient = ({ isOpen, setIsOpen, client }) => {
  const [loading, setLoading] = useState(false);

  const { onUpdateClient, onNewClient } = useAuth();

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();

  const onSubmit = async () => {
    setLoading(true);

    const first_name = firstnameRef.current.inputRef.current.value;
    const last_name = lastnameRef.current.inputRef.current.value;
    const email = emailRef.current.inputRef.current.value;
    const avatar = avatarRef.current.inputRef.current.value;

    if (!first_name || !last_name) return setLoading(false);

    const data = {
      first_name,
      last_name,
      email,
      avatar
    };

    if (client) {
      await updateClient(client.id, data);
      onUpdateClient(client.id, data);
    } else {
      const { id } = await addClient(data);
      onNewClient({ id, ...data });
    }

    setLoading(false);
    setIsOpen(false);
  };

  return (
    <Modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
    >
      <Modal.Header>
        {client ? 'Update Client' : 'Add a New Client'}
      </Modal.Header>

      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <Input
                label="First Name"
                defaultValue={client?.first_name ?? ''}
                ref={firstnameRef}
              />
            </Form.Field>

            <Form.Field>
              <Input
                label="Last Name"
                defaultValue={client?.last_name ?? ''}
                ref={lastnameRef}
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <Input
                label="Email"
                defaultValue={client?.email ?? ''}
                ref={emailRef}
              />
            </Form.Field>

            <Form.Field>
              <Input
                label="Avatar URL"
                defaultValue={client?.avatar ?? ''}
                ref={avatarRef}
              />
            </Form.Field>
          </Form.Group>
        </Form>
      </Modal.Content>

      <Modal.Actions>
        <Button
          disabled={loading}
          content={client ? 'Update' : 'Add'}
          labelPosition="right"
          icon="checkmark"
          onClick={onSubmit}
          color="teal"
        />
      </Modal.Actions>
    </Modal>
  );
};

export default NewClient;
