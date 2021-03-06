import React, { useRef, useEffect } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Heading,
  Text,
  Link,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Stack
} from "@chakra-ui/core";
import useAuth, { REFUSED, PENDING } from "./useAuth";

const ResetPasswordLink = props => (
  <Link
    isExternal
    href="https://adminchouettos.lachouettecoop.fr/resetting/request"
    {...props}
  >
    {props.children || "réinitialiser votre mot de passe"}
  </Link>
);

const Login = () => {
  const { login, authState } = useAuth();
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    login({
      email: emailInput.current.value,
      password: passwordInput.current.value
    });
  };

  return (
    <Box w="80%" mx="auto">
      <Heading as="h1" my={10}>
        Connexion requise
      </Heading>

      <Box mb={10}>
        <Text>Cette application permet de consulter le planning du Lab.</Text>
        <Text>
          Elle est réservée aux membres de La Chouette Coop. Veuillez vous
          connecter avec vos identifiants habituels.
        </Text>
      </Box>

      <form onSubmit={handleSubmit}>
        <Stack spacing={8}>
          {authState === REFUSED && (
            <Alert status="error" variant="left-accent">
              <AlertIcon />
              <AlertTitle mr={2}>
                Couple email / mot de passe non reconnu.
              </AlertTitle>
              <AlertDescription>
                Veuillez vérifiez les données transmises ou{" "}
                <ResetPasswordLink />.
              </AlertDescription>
            </Alert>
          )}
          <FormControl isRequired>
            <FormLabel htmlFor="email">Adresse email</FormLabel>
            <Input
              type="email"
              id="email"
              aria-describedby="email-helper-text"
              ref={emailInput}
              tabIndex={1}
            />
            <FormHelperText id="email-helper-text">
              L’adresse email fournie lors de votre inscription.
            </FormHelperText>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="password">Mot de passe</FormLabel>
            <Input
              type="password"
              id="password"
              aria-describedby="password-helper-text"
              ref={passwordInput}
              tabIndex={2}
            />
            <FormHelperText id="password-helper-text">
              Identique à celui utilisé sur les autres outils de La Chouette
              Coop. En cas d’oubli, vous pouvez{" "}
              <ResetPasswordLink tabIndex={4} />.
            </FormHelperText>
          </FormControl>

          <Button
            type="submit"
            variantColor="green"
            size="lg"
            isLoading={authState === PENDING}
            tabIndex={3}
            loadingText="Connexion en cours"
          >
            Se connecter
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
