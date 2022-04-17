import { useEffect } from 'react';
import * as APIService from 'service/api-service';

export const App = () => {
  useEffect(() => {
    // APIService.getContacts().then(contacts => console.log(contacts));
    // APIService.createContact({
    //   name: 'Mari',
    //   email: 'mari@gmail.com',
    //   number: '099-999-6666',
    // });
    // APIService.deleteContact(24);
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
