import BasicTable from '../BasicTable';
import UsersList from '../UsersList';

import { Section, Container } from './App.styled';

export const App = () => {
  return (
    <>
      <Section>
        <Container>
          <BasicTable />
        </Container>
      </Section>

      <Section>
        <Container>
          <UsersList />
        </Container>
      </Section>
    </>
  );
};
