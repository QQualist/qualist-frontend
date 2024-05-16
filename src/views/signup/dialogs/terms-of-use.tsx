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
import List from "./List";
import ListItem from "./ListItem";

const TermsOfUse = () => {
  return (
    <DialogContent className="h-4/5">
      <DialogHeader>
        <DialogTitle>Qualist terms of use </DialogTitle>
        <DialogDescription asChild>
          <span className="font-medium">Last Updated: May 16,2024</span>
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col space-y-2 overflow-auto px-2">
        <Paragraph>
          These Terms of Use ("Terms") govern the use of the website Qualist
          ("we," "our," or "the Company") located at [www.qualist.com.br] (the
          "Service").
        </Paragraph>
        <Title>Acceptance of Terms</Title>
        <Paragraph>
          By accessing or using the Service, you agree to abide by these Terms.
          If you do not agree to any part of these Terms, you may not access or
          use the Service.
        </Paragraph>
        <Title>Use of the Service</Title>
        <Paragraph>
          You agree to use the Service only for lawful purposes and in
          accordance with these Terms. You agree not to:
        </Paragraph>
        <List>
          <ListItem>
            Violate any local, state, national, or international laws.
          </ListItem>
          <ListItem>
            Interfere with or damage the proper functioning of the Service.
          </ListItem>
          <ListItem>
            Attempt to access confidential information or areas of the Service
            for which you are not authorized.
          </ListItem>
          <ListItem>
            Send spam, unsolicited advertisements, or offensive content.
          </ListItem>
        </List>
        <Title>Intellectual Property</Title>
        <Paragraph>
          All content of the Service, including text, graphics, logos, icons,
          and images, is owned by Qualist or its licensors and is protected by
          intellectual property laws.
        </Paragraph>
        <Title>Disclaimer</Title>
        <Paragraph>
          The Service is provided "as is," without warranties of any kind,
          either express or implied. We do not warrant that the Service will be
          uninterrupted, secure, or error-free.
        </Paragraph>
        <Title>Limitation of Liability</Title>
        <Paragraph>
          In no event shall Qualist be liable for any direct, indirect,
          incidental, special, consequential, or punitive damages arising out of
          or in any way connected with the use or inability to use the Service.
        </Paragraph>
        <Title>Changes to the Terms</Title>
        <Paragraph>
          We reserve the right to modify these Terms at any time. The updated
          version of the Terms will be posted on the Service, indicating the
          date of the last update. Continuing to use the Service after such
          changes constitutes your acceptance of the new Terms.
        </Paragraph>
        <Title>Termination</Title>
        <Paragraph>
          We may terminate or suspend your access to the Service immediately,
          without prior notice or liability, for any reason, including a breach
          of these Terms.
        </Paragraph>
        <Title>General Provisions</Title>
        <Paragraph>
          These Terms constitute the entire agreement between you and Qualist
          regarding the use of the Service and supersede all prior agreements.
        </Paragraph>
        <Title>Governing Law</Title>
        <Paragraph>
          These Terms shall be governed and construed in accordance with the
          laws of Brazil, without regard to its conflict of law provisions.
        </Paragraph>
        <Title>Contact</Title>
        <Paragraph>
          If you have any questions about these Terms, please contact us at
          [qualist.contact@gmail.com].
        </Paragraph>
      </div>
      <DialogFooter>
        <DialogClose>Close</DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default TermsOfUse;
