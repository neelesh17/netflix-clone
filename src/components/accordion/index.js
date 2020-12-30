import React, {useState, useContext, createContext} from 'react'
import { Container, Inner, Title, Frame, Item, Body, Header } from './styles/accordion';

const ToggleContext = createContext();

function Accordion({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordianTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordianFrame({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordianItem({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false);
    return(
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordianHeader({children, ...restProps}){
    const { toggleShow, setToggleShow } = useContext(ToggleContext)
    return (
        <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (<img src="/images/icons/close-slim.png" alt="Close" />) : (<img src="/images/icons/add.png" alt="Open"/>)}
        </Header>
    )
}

Accordion.Body = function AccordianBody({children, ...restProps}){
    const { toggleShow } = useContext(ToggleContext)
    return (
        <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
          <span>{children}</span>
        </Body>
      );
}

export default Accordion;