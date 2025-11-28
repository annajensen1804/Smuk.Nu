import ContactForm from "../components/contactForm/ContactForm";
import PageHeader from "../components/pageHeader/PageHeader"

const MemberPage = () => {
    return (
      <section>
        <PageHeader
          variant="member"
          titleOne="BLIV"
          titleTwo="MEDLEM"
          text="Herunder har vi samlet spørgsmål og svar om sundhed. Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre gode råd valgt af vores skønhedsredaktion"
        />

        <ContactForm />
      </section>
    );
}

export default MemberPage