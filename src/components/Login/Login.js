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

import LoginWrapper from '../Signup/Signup.styles';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();

    const email = emailRef.current.inputRef.current.value;
    const password = passwordRef.current.inputRef.current.value;

    try {
      setError('');
      setLoading(true);

      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to login. Incorrect email or password.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginWrapper>
      <Segment
        padded="very"
        raised
        size="large"
        color="teal"
        style={{ minWidth: 500 }}
      >
        <Header color="grey" size="huge" textAlign="center">
          Log In
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

          <Form.Input required label="Password">
            <Input
              ref={passwordRef}
              placeholder="6+ characters"
              type="password"
            />
          </Form.Input>

          <Button
            size="large"
            disabled={loading}
            fluid
            color="teal"
            type="submit"
          >
            Login
          </Button>
        </Form>

        <Divider section />

        <div className="sign-switch">
          Don't have an account? {''}
          <Link to="/signup" className="action">
            Sign Up
          </Link>
        </div>
      </Segment>
    </LoginWrapper>
  );
};

export default Login;
