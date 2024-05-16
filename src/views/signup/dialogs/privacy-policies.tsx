import {
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Paragraph } from "./paragraph";
import { Title } from "./title";
import ListItem from "./ListItem";
import List from "./List";

const PrivacyPolicies = () => {
  return (
    <DialogContent className="h-4/5">
      <DialogHeader>
        <DialogTitle>Privacy Policy</DialogTitle>
        <DialogDescription asChild>
          <span className="font-medium">Last Updated: May 16,2024</span>
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col space-y-2 overflow-auto px-2">
        <Paragraph>
          This Privacy Policy describes how Qualist ("we," "our," or "the
          Company") collects, uses, and shares your personal information when
          you use our website [www.qualist.com.br] (the "Service").
        </Paragraph>

        <Title>Information We Collect</Title>
        <Paragraph>
          When you use our Service, we may collect the following categories of
          personal information:
        </Paragraph>
        <List>
          <ListItem>
            <strong>Personal Identification Information:</strong> This may
            include your name, email address, phone number, and other contact
            information you voluntarily provide to us when registering or
            interacting with the Service.
          </ListItem>
          <ListItem>
            <strong>Browsing Information:</strong> We may collect information
            about how you access and use our Service, including your IP address,
            browser type, visited pages, and access times.
          </ListItem>
          <ListItem>
            <strong>Location Information:</strong> If you provide us with
            permission, we may collect information about your geographic
            location using technologies such as GPS or Wi-Fi.
          </ListItem>
        </List>
        <Title>How We Use Your Information</Title>
        <Paragraph>
          We use the information collected for the following purposes:
        </Paragraph>
        <List>
          <ListItem>To provide, operate, and maintain our Service.</ListItem>
          <ListItem>
            To personalize your experience and provide relevant content and
            features.
          </ListItem>
          <ListItem>
            To respond to your inquiries, requests, and provide customer
            support.
          </ListItem>
          <ListItem>
            To send marketing communications, when permitted by law and when you
            opt to receive such communications.
          </ListItem>
          <ListItem>To comply with legal and regulatory obligations.</ListItem>
        </List>
        <Title>Sharing of Information</Title>
        <Paragraph>
          We do not sell, rent, or share your personal information with third
          parties except in the following circumstances:
        </Paragraph>
        <List>
          <ListItem>With your explicit permission.</ListItem>
          <ListItem>
            To comply with legal obligations or respond to valid legal requests.
          </ListItem>
          <ListItem>
            To protect the rights, property, or safety of [Name of Platform],
            our users, or the general public.
          </ListItem>
        </List>
        <Title>Cookies and Similar Technologies</Title>
        <Paragraph>Our Service may use cookies and other tracking technologies to collect and store information. You can control the use of cookies through your browser settings.</Paragraph>

        <Title>Links to Third-Party Sites</Title>
        <Paragraph>Our Service may contain links to third-party websites that are not operated by us. We are not responsible for the privacy practices of these sites and recommend you review their privacy policies.</Paragraph>

        <Title>Security of Information</Title>
        <Paragraph>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</Paragraph>

        <Title>Your Privacy Rights</Title>
        <Paragraph>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the details provided below.</Paragraph>

        <Title>Changes to this Privacy Policy</Title>
        <Paragraph>We may update our Privacy Policy from time to time. The most recent version will always be available on our website, indicating the date of its last update.</Paragraph>
      
        <Title>Contact</Title>
        <Paragraph>If you have any questions or concerns about our Privacy Policy, please contact us at [qualist.contact@gmail.com].</Paragraph>
      </div>
      <DialogFooter>
        <DialogClose>Close</DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default PrivacyPolicies;
