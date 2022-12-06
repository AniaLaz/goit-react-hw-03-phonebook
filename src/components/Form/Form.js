import css from 'components/Form/Form.module.css';

const Form = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    onSubmit(name.value, number.value);
    name.value = '';
    number.value = '';
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.labelName}>
        <span className={css.spanName}>Name</span>
        {/* <FormInput /> */}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.labelNamber}>
        <span className={css.spanNamber}>Namber</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.buttonAdd}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
