import React from 'react'
import faqsData from '../fixtures/faqs.json';
import { Accordian, OptForm } from '../components';

function FaqsContainer() {
    return (
        <Accordian>
            <Accordian.Title>Frequently Asked Questions</Accordian.Title>
            {faqsData.map((item) => (
                <Accordian.Item key={item.id}>
                    <Accordian.Header>{item.header}</Accordian.Header>
                    <Accordian.Body>{item.body}</Accordian.Body>
                </Accordian.Item>
            ))}
            <OptForm>
                <OptForm.Input placeholder="Email Address"></OptForm.Input>
                <OptForm.Button>Try it Out</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your membership
                </OptForm.Text>
            </OptForm>
        </Accordian>
    )
}

export default FaqsContainer;
