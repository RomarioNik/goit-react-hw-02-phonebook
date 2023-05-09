import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  AvatarWrapper,
  TrashButton,
  Avatar,
  Contact,
  Name,
  Phone,
  Icon,
} from './ContactList.styled';
import defaultAvatar from '../../images/avatar-def.svg';
import trash from '../../images/trash.svg';

class ContactList extends Component {
  static propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ),
  };

  handleClickButton = id => {
    const { onDeleteContact } = this.props;
    onDeleteContact(id);
  };

  render() {
    const { contacts } = this.props;

    return (
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <AvatarWrapper>
              <Avatar src={defaultAvatar} width="40" height="40" />
            </AvatarWrapper>

            <Contact>
              <Name>{name}</Name>
              <Phone>{number}</Phone>
            </Contact>

            <TrashButton onClick={() => this.handleClickButton(id)}>
              <Icon src={trash} />
            </TrashButton>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default ContactList;
