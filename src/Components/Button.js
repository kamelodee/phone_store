import Styled from 'styled-components';

export const ButtonContainer=Styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--lightblue);
border-color:${props => props.cart? "var(--mainyellow)":"var(--lightblue)"};
color:${props => props.cart ? "var(--mainyellow)":"var(--lightblue)"};
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
  background:${props => props.cart ? "var(--mainyellow)":"var(--lightblue)"};
  color:var(--mainwhite);
}
&:focus{
  outline:none;
}
`;
