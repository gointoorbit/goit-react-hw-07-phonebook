import { AddContactForm } from './AddContactForm/AddContactForm.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { SearchFilter } from './SearchFilter/SearchFilter.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { selectIsLoading, selectError } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <AddContactForm />
      <h2>Contacts</h2>
      <SearchFilter />
      {isLoading && !error && <div>Loading in progres...</div>}
      {error && <div>We cannot download your data. Please try again.</div>}
      <ContactList />
    </>
  );
};
