import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface SuccessEmailProps {
  userName?: string;
  courseName?: string;
  accessLink?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const SuccessEmail = ({
  userName = "Creator",
  courseName = "The Ultimate Faceless Digital Course",
  accessLink = `${baseUrl}/success-0jfkaln2sfs`,
}: SuccessEmailProps) => {
  const previewText = `Welcome to ${courseName}! Your journey begins now.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={badge}>THE ULTIMATE FACELESS DIGITAL COURSE</Text>
          </Section>
          <Section style={{ paddingBottom: "32px" }}>
            <Text style={heading}>
              Welcome to Your Journey of{" "}
              <span style={{ color: "#B08B75" }}>Digital</span> Creation
            </Text>
            <Text style={subheading}>
              Transform your expertise into a thriving online business. Get consistent sales notifications,
              secure financial freedom, and create the lifestyle you have always dreamed of.
            </Text>
            <Text style={paragraph}>
              Dear {userName},
            </Text>
            <Text style={paragraph}>
              Congratulations on taking the first step towards mastering digital creation with Canva! 
              Your account is now set up and ready to go.
            </Text>
            <Text style={instructions}>
              🎯 Next Steps:<br />
              1. Click the button below to access your course materials<br />
              2. Watch the welcome video in Module 1<br />
              3. Join our private community for support
            </Text>
            <Button style={button} href={accessLink}>
              ACCESS YOUR COURSE NOW!
            </Button>
          </Section>
          <Section>
            <Text style={footer}>
              Your success journey begins today. We are excited to see what you wilrq create!
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SuccessEmail;

const main = {
  backgroundColor: "#FFF5F0",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  width: "580px",
  maxWidth: "100%",
};

const badge = {
  backgroundColor: "#B08B75",
  color: "#FFFFFF",
  fontSize: "12px",
  fontWeight: "500",
  padding: "6px 12px",
  borderRadius: "20px",
  textAlign: "center" as const,
  maxWidth: "400px",
  margin: "0 auto 32px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#000000",
  textAlign: "center" as const,
  margin: "0 0 16px",
  padding: "0 24px",
};

const subheading = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#666666",
  textAlign: "center" as const,
  margin: "0 0 32px",
  padding: "0 24px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#333333",
  margin: "0 0 16px",
};

const instructions = {
  fontSize: "16px",
  lineHeight: "1.7",
  color: "#333333",
  backgroundColor: "#FFFFFF",
  padding: "24px",
  borderRadius: "8px",
  margin: "24px 0",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const button = {
  backgroundColor: "#B08B75",
  borderRadius: "28px",
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  padding: "16px 24px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  marginTop: "32px",
};

const footer = {
  fontSize: "14px",
  color: "#666666",
  textAlign: "center" as const,
  margin: "32px 0 0",
};

