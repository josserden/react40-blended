import React from 'react';
import { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListIcon,
  Spinner,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react';
import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import * as APIService from 'service/api-service';

import { useToast } from '@chakra-ui/react';

function ToastExample({ title, description, status }) {
  const toast = useToast();

  return toast({
    title,
    description,
    status,
    duration: 3000,
    isClosable: true,
  });
}

const Loader = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
};

function Home(props) {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    APIService.getContacts()
      .then(contacts => {
        setContacts(contacts);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onDeleteContact = id => {
    APIService.deleteContact(id).catch(error => {
      alert('Error', error.message, 'error');
    });

    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      {error && (
        <ToastExample
          title="Error"
          description={error.message}
          status="error"
        />
      )}

      {/* {isLoading && <Loader />} */}

      {contacts && (
        <List spacing={3}>
          {contacts.map(({ id, name, email, number }) => (
            <ListItem key={name} id={id}>
              <Flex alignItems={'start'} gap="3">
                <Flex flexDirection={'column'} gap="1">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <p>{name}</p>
                  <p>{email}</p>
                  <p>{number}</p>
                </Flex>

                <IconButton
                  onClick={() => onDeleteContact(id)}
                  size={'xs'}
                  variant="outline"
                  colorScheme="teal"
                  aria-label="Call Sage"
                  fontSize="10px"
                  icon={<CloseIcon />}
                />
              </Flex>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

Home.propTypes = {};

export default Home;
