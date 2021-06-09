import styled from "@emotion/styled";

const StyleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 700;
`;

const Input = styled.input`
  border: 1px solid #d9dadc;
  padding: 6px 12px;
  height: 40px;
  font-size: 16px;
`;

function InputSign ({labelText, placeholder, inputType='text', onChange, value, inputName }) {

return (
  <StyleContent>
    <Label>{labelText}</Label>
    <Input
    placeholder={placeholder}
    type={inputType}
    onChange={onChange}
    value={value}
    name={inputName}
    />
  </StyleContent>
)
};

export default InputSign;
