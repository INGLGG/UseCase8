import { render, screen } from '@testing-library/react';
import TableData from './TableData';
import { Provider } from 'react-redux';
import store from '../store';

const TabelDataWithStore = ({mockstore}) => (
  <Provider store={mockstore}>
    <TableData />
  </Provider>
);



test('renders Table Header', () => {
  render(<TabelDataWithStore mockstore={store}/>);
  const FirstNameHeader = screen.getByText(/First Name/i);
  expect(FirstNameHeader).toBeInTheDocument();
  const LastNameHeader = screen.getByText(/Last Name/i);
  expect(LastNameHeader).toBeInTheDocument();
  const EmailHeader = screen.getByText(/Email/i);
  expect(EmailHeader).toBeInTheDocument();
  const MessageHeader = screen.getByText(/Message/i);
  expect(MessageHeader).toBeInTheDocument();
});
