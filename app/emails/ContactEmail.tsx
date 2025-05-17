import * as React from 'react';
import { Html, Section, Heading, Text } from "@react-email/components";

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

const ContactEmail = ({
  name,
  email,
  message,
}: ContactEmailProps) => {
  return (
    <Html lang="en">
      <Section style={{ padding: "20px", fontFamily: "Arial" }}>
        <Heading>New Contact Form Submission</Heading>
        <Text>
          <strong>Name:</strong> {name}
        </Text>
        <Text>
          <strong>Email:</strong> {email}
        </Text>
        <Text>
          <strong>Message:</strong>
        </Text>
        <Text>{message}</Text>
      </Section>
    </Html>
  );
}

export default ContactEmail;