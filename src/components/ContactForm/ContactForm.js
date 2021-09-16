// import React, { Component } from 'react';
import React, { useState } from 'react';
import shortid from 'shortid';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);

    reset();
  };

  const reset = () => {
    setName(name => (name = ''));
    setNumber(number => (number = ''));
  };

  return (
    <div className={s.container_form}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label htmlFor={nameInputId} className={s.label_text}>
          Name
          <input
            className={s.input_form}
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            id={nameInputId}
          />
        </label>
        <label htmlFor={numberInputId} className={s.label_text}>
          Number
          <input
            className={s.input_form}
            type="tel"
            value={number}
            onChange={handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            id={numberInputId}
          />
        </label>

        <button type="submit" className={s.button_form}>
          Add contact
        </button>
      </form>
    </div>
  );
}

// export default ContactForm;

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = shortid.generate();
//   numberInputId = shortid.generate();

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.name, this.state.number);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     const { handleChange, handleSubmit } = this;
//     return (
//       <div className={s.container_form}>
//         <form onSubmit={handleSubmit} className={s.form}>
//           <label htmlFor={this.nameInputId} className={s.label_text}>
//             Name
//             <input
//               className={s.input_form}
//               type="text"
//               value={name}
//               onChange={handleChange}
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               required
//               id={this.nameInputId}
//             />
//           </label>
//           <label htmlFor={this.numberInputId} className={s.label_text}>
//             Number
//             <input
//               className={s.input_form}
//               type="tel"
//               value={number}
//               onChange={handleChange}
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//               required
//               id={this.numberInputId}
//             />
//           </label>

//           <button type="submit" className={s.button_form}>
//             Add contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default ContactForm;

// const handleChange = event => {
//   const { name, value } = event.currentTarget;

//   switch (name) {
//     case 'name':
//       setName(value);
//       break;

//     case 'number':
//       setNumber(value);
//       break;

//     default:
//       return;
//   }
// };
