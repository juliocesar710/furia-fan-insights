import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}

interface FormProps {
  fields: FormField[];
  onSubmit: SubmitHandler<any>;
  submitText: string;
  disabled?: boolean;
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label<{ required?: boolean }>`
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.text};
  
  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.radius.button};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.shadow};
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.75rem;
`;

const SubmitButton = styled.button<{ disabled?: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.radius.button};
  background-color: ${({ theme, disabled }) => disabled ? theme.colors.border : theme.colors.accent};
  color: white;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border: none;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.accentHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.shadow};
  }
`;

export const Form: React.FC<FormProps> = ({ fields, onSubmit, submitText, disabled }) => {
  const { theme } = useTheme();
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <FormFieldContainer key={field.name}>
          <Label htmlFor={field.name} required={field.required}>
            {field.label}
            {field.required && <span> *</span>}
          </Label>
          <Input
            id={field.name}
            type={field.type}
            {...register(field.name, { required: field.required })}
            placeholder={field.placeholder}
            disabled={disabled}
          />
          {errors[field.name] && (
            <ErrorMessage>Este campo é obrigatório</ErrorMessage>
          )}
        </FormFieldContainer>
      ))}
      <SubmitButton type="submit" disabled={disabled}>
        {submitText}
      </SubmitButton>
    </FormContainer>
  );
}; 