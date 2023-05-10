import {
  ListItem,
  AvatarWrapper,
  TrashButton,
  Avatar,
  Contact,
  Name,
  Phone,
  Icon,
} from './ContactItem.styled';
import defaultAvatar from '../../images/avatar-def.svg';
import trash from '../../images/trash.svg';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListItem key={id}>
      <AvatarWrapper>
        <Avatar src={defaultAvatar} width="40" height="40" />
      </AvatarWrapper>

      <Contact>
        <Name>{name}</Name>
        <Phone>{number}</Phone>
      </Contact>

      <TrashButton onClick={() => onDeleteContact(id)}>
        <Icon src={trash} />
      </TrashButton>
    </ListItem>
  );
};

export default ContactItem;
