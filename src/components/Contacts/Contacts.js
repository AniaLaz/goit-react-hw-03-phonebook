import css from 'components/Contacts/Contacts.module.css';
const Contacts = ({  onDelete, visibleArr }) => {
  return (
    <ul className={css.list}>
      {visibleArr.map(item => {
        return (
          <li className={css.item} key={item.id} id={item.id}>
            <div className={css.itemContent}>
              {item.name}: {item.number}
            </div>

            <button
              className={css.buttonDelete}
              onClick={() => onDelete(item.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
