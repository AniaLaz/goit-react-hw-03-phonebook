import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../Form/Form';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import css from 'components/App/App.module.css';

const LS_KEY = "contact";
  
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const saveStayt = localStorage.getItem(LS_KEY);
    if (saveStayt){this.setState({ contacts:( JSON.parse(saveStayt)) });}
  }

  addContacts = (name, number) => {
    const { contacts } = this.state;
    const comparisoName = contacts
      .map(contact => contact.name.toLowerCase())
      .some(contact => contact === name.toLowerCase());
    if (!comparisoName) {
      this.setState(prevState => ({
        contacts: [{ id: nanoid(), name, number }, ...prevState.contacts],
      }));
    } else {
      this.addalert();
    }
  };
  n;

  addalert = name => {
    window.alert(`${name} is already in contacts`);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts } = this.state;
    const visibleArr = this.getContact();

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContacts} />
        <h2>Contacts</h2>

        {contacts.length > 0 && (
          <div>
            <Filter onChange={this.onChange} value={this.state.filter} />
            <Contacts onDelete={this.deleteContact} visibleArr={visibleArr} />
          </div>
        )}
      </div>
    );
  }
}
