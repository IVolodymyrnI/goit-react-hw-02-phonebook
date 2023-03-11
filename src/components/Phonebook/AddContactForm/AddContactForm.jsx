import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  Input,
  ContactForm,
  Label,
  Button,
  Error,
  InputWrapper,
} from './AddContactFormStyle';
import { schema } from './contactValidation';

export const AddContactForm = ({ onAddContactBtn }) => {
  const phoneNumberId = nanoid();
  const nameId = nanoid();

  const onSubmit = (value, { resetForm }) => {
    const objectId = nanoid();
    onAddContactBtn(Object.assign(value, { id: objectId }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phoneNumber: '' }}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <ContactForm>
        <Label htmlFor={nameId}>Name</Label>
        <InputWrapper>
          <Error name="name" component="p" />
          <Input type="text" id={nameId} name="name"></Input>
        </InputWrapper>
        <Label htmlFor={phoneNumberId}>Phone number</Label>
        <InputWrapper>
          <Error name="phoneNumber" component="p" />
          <Input type="tel" id={phoneNumberId} name="phoneNumber"></Input>
        </InputWrapper>
        <Button type="submit">Add contact</Button>
      </ContactForm>
    </Formik>
  );
};

AddContactForm.propTypes = {
  onAddContactBtn: PropTypes.func.isRequired,
};
