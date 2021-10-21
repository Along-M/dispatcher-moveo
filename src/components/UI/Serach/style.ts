import styled from "styled-components";


export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 73.44%;
  z-index:2;
  `
export const SearchInputContainer = styled.div`
  display: flex;
  width: 40%;
  background: white;
  border-radius: 10px;
  /* margin-left:3.4rem; */
`

export const SearchInput = styled.input`
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  width: 61%;
  border: none;
  outline: none;
`

export const Icon = styled.img`
    `
export const LogoIcon = styled(Icon)`
    background: white;
    border-radius: 10px 0px 0px 10px;
    padding-right: 5px;
    padding-left: 5px;
    `

export const Divider = styled.div`
    border: 1px solid #d9dbe9;
    margin-top: 5px;
    margin-bottom: 5px;
`
  


