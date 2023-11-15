import React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
//-----------------------imports---------------------------------------



type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
}

export default function ContactFormEmail({
    message,
    senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
        <Head />
        <Preview>You have a new message from your portfolio website!</Preview>
        <Tailwind>
            <Body className="bg-black text-white">
                <Container>
                    <Section className="bg-black text-white border border-sky-400 my-10 px-10 py-4 rounded-md">
                        <Heading className="leading-tight text-white">
                            You have received the following message from the contact form:
                        </Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>The sender's email is: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
