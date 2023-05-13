import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import {
  Container,
  PhoneBook,
  Wrapper,
  TitlePrime,
  TitleSecond,
} from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }, resetForm) => {
    if (this.checkDuplicateName(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

    resetForm();
  };

  checkDuplicateName = nameContact => {
    const { contacts } = this.state;
    return contacts.some(({ name }) => name === nameContact);
  };

  deleteContact = idContact => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== idContact),
    }));
  };

  filterChange = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  filterReset = () => {
    this.setState({
      filter: '',
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Container>
        <PhoneBook>
          <Wrapper>
            <TitlePrime>Phonebook</TitlePrime>
            <ContactForm onAddContact={this.addContact} />
          </Wrapper>

          <Wrapper>
            <TitleSecond>Contacts</TitleSecond>
            <Filter
              onFilterChange={this.filterChange}
              onFilterReset={this.filterReset}
              value={filter}
            />
          </Wrapper>
          {contacts.length !== 0 && (
            <ContactList
              contacts={this.filterContacts()}
              onDeleteContact={this.deleteContact}
            />
          )}
        </PhoneBook>
      </Container>
    );
  }
}

export default App;
