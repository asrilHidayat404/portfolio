import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import Social from "./Social";

const Contact = () => {
    return (
        <div className="w-full mx-auto mt-10 flex flex-col px-10 py-20">
            <header className="font-bold text-4xl text-center mb-10">
                Contact
            </header>
            <div className="w-full flex gap-10 lg:flex-row flex-col">
                <Social />
                <ContactInformation />
            </div>
            <div className="bg-slate-300 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
