import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Form,
  Segment,
  Input,
  Header,
  Divider,
  Message
} from 'semantic-ui-react';

import SignupWrapper from './Signup.styles';
import { useAuth } from '../../contexts/AuthContext';

const Signup = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();

    const email = emailRef.current.inputRef.current.value;
    const password = passwordRef.current.inputRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.inputRef.current.value;

    if (password !== passwordConfirm) {
      setError('Passwords do not match');
      return;
    }

    try {
      setError('');
      setLoading(true);

      await signup(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to create an account');
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <SignupWrapper>
      <Segment padded="very" raised size="large" color="teal">
        <Header color="grey" size="huge" textAlign="center">
          Sign Up
        </Header>

        <Divider section />

        {error && (
          <Message size="small" error>
            {error}
          </Message>
        )}

        <Form size="large" onSubmit={onSubmit}>
          <Form.Input required label="Email">
            <Input
              ref={emailRef}
              placeholder="Your email address"
              type="email"
            />
          </Form.Input>

          <Form.Group widths="equal">
            <Form.Input required label="Password">
              <Input
                ref={passwordRef}
                placeholder="6+ characters"
                type="password"
              />
            </Form.Input>

            <Form.Input required label="Confirm Password">
              <Input
                ref={passwordConfirmRef}
                placeholder="6+ characters"
                type="password"
              />
            </Form.Input>
          </Form.Group>

          <Button
            size="large"
            disabled={loading}
            fluid
            color="teal"
            type="submit"
          >
            Sign Up
          </Button>
        </Form>

        <Divider section />

        <div className="sign-switch">
          Already have an account? {''}
          <Link to="/login" className="action">
            Log in
          </Link>
        </div>
      </Segment>
    </SignupWrapper>
  );
};

export default Signup;
