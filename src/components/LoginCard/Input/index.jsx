import * as S from "./styles";

export default function Input(props) {
  return (
    <S.Container>
      <S.Label for={props.id}>{props.label}</S.Label>
      <S.InputContent
        placeholder={props.placeholder}
        type={props.type}
        id={props.id}
      />
    </S.Container>
  );
}
