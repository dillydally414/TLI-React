import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  align-items: center;
  border-style: solid;
  border-radius: 1rem;
  border-weight: 0px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition-duration: 0.4s;
  width: 10rem;
  height: 10rem;
  font-size: 10pt;
  margin: 5px;
`;

function Button({
  title = "",
  description = "",
  effect = "",
  onClick = () => {},
  className = "",
  color = "black",
  cost = -1,
  count = 0,
  style = {},
}: {
  title?: string,
  description?: string,
  effect?: string,
  onClick?: Function,
  className?: string,
  color?: string,
  cost?: number,
  count?: number,
  style?: React.CSSProperties,
}) {
  return (
    <StyledButton className={className} style={style} onClick={() => onClick()}>
      {title !== "" && <h2>{title}</h2>}
      {description !== "" && <p>{description}</p>}
      {effect !== "" && <p>Effect: {effect}</p>}
      {count !== 0 && <p>Count: {count}</p>}
      {cost !== -1 && <p>Cost: {cost}</p>}
    </StyledButton>
  );
}

export default Button;