import PageHeader from "../components/pageHeader/PageHeader"
import Questions from "../components/questions/Questions";
import Member from "../components/member/Member";

const Faq = () => {
    return (
      <section>
        <PageHeader
          variant="faq"
          titleOne="SPØRG OM SUNDHED"
          text="Herunder har vi samlet spørgsmål og svar om sundhed. Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion"
        />

        <Questions />

        <Member />
      </section>
    );
}

export default Faq