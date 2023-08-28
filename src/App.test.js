import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

test('renders Personal Form', () => {
  render(<AppWithStore />);
  const PersonalForm = screen.getByText(/Personal Form/i);
  expect(PersonalForm).toBeInTheDocument();
});
