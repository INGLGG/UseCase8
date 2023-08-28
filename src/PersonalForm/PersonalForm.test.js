import { fireEvent, render, screen } from '@testing-library/react';
import PersonalForm from './PersonalForm';
import { Provider } from 'react-redux';
import store from '../store';

const TabelDataWithStore = ({children}) => (
  <Provider store={store}>
    {children}
  </Provider>
);



test('renders Table Header', () => {
  render(<TabelDataWithStore><PersonalForm textInputs={['First Input', 'Third Input', 'Test Input']}/></TabelDataWithStore>);
  const FirstNameHeader = screen.getByText(/First Input/i);
  expect(FirstNameHeader).toBeInTheDocument();
  const LastNameHeader = screen.getByText(/Third Input/i);
  expect(LastNameHeader).toBeInTheDocument();
  const EmailHeader = screen.getByText(/Test Input/i);
  expect(EmailHeader).toBeInTheDocument();
  const SubmitButton = screen.getByText(/Submit/i);
  expect(SubmitButton).toBeDisabled();
});


test('renders valid form', () => {
    const mockSubmit = jest.fn();
    render(<TabelDataWithStore><PersonalForm textInputs={['First Input', 'Third Input', 'Test Input']} handleSubmit={mockSubmit}/></TabelDataWithStore>);
    const FirstNameHeader = screen.getByTestId("firstInput");
    const LastNameHeader = screen.getByTestId("thirdInput");
    const EmailHeader = screen.getByTestId("testInput");
    fireEvent.change(FirstNameHeader, {target: {value: 'fillinput'}});
    fireEvent.change(LastNameHeader, {target: {value: 'fillinput'}});
    fireEvent.change(EmailHeader, {target: {value: 'fillinput'}});
    const SubmitButton = screen.getByText(/Submit/i);
    expect(SubmitButton).toBeEnabled();
    fireEvent.click(SubmitButton);
    expect(mockSubmit).toHaveBeenCalled();
  });
