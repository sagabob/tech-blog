import styled from "styled-components";

export const TabContainer = styled.div` 
    display: ${props => props.isActive ? "block" : "none"};  
`;