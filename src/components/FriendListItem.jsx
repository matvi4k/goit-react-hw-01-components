export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item-friend">
      <span class={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
