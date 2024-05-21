import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Input,
  Button,
  InputWrapper,
  Form,
  InputWrapperBlock,
} from './input-device-name.styled';
import { useState } from 'react';

const val = 'ssdsds';

export const SearchInput = ({ submitSearch, query }) => {
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const disableButton = () => {
    setButtonDisabled(true);
  };

  const enableButton = () => {
    setButtonDisabled(false);
  };
  const formik = useFormik({
    initialValues: {
      query: query,
    },
    onSubmit: values => {
      submitSearch(values);
    },
    validationSchema: Yup.object().shape({
      query: Yup.string().required('Please enter query'),
    }),
  });
  return (
    <Form onSubmit={formik.handleSubmit} position="relative">
      <InputWrapperBlock>
        <InputWrapper>
          <label htmlFor="query" aria-label="search">
            <Input
              id="query"
              name="device"
              type="text"
              defaultValue={val}
              required
              onChange={enableButton}
            />
          </label>
          <Button
            type="submit"
            onClick={disableButton}
            disabled={isButtonDisabled}
          >
            Зберегти
          </Button>
        </InputWrapper>
      </InputWrapperBlock>
    </Form>
  );
};
