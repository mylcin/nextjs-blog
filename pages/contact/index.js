import Head from "next/head";
import ContactForm from "../../components/contact/contact-form";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact me here & send me messages." />
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
