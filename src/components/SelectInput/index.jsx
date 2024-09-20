import { SelectContainer } from "./styles";

export default function SelectInput(props){
  return (
    <SelectContainer name={props.name}>
      {props.options}
    </SelectContainer>
  )
}