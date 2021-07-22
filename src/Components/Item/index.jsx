import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
`

const SpanTitulo = styled.span`
  font-weight: bold;
`
export default ({type, from, value}) => {
  return <Item>
    <SpanTitulo>{type}</SpanTitulo>
    <span>{from}</span>
    <span>{value}</span>
  </Item>
}