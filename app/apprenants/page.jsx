import ApprenantsContainer from "../containers/ApprenantsContainer";
import FloatingButton from "../components/Buttons/FloatingButton";

export default function ApprenantsPage() {
    return (
        <>
            <ApprenantsContainer />
            <FloatingButton
                buttonText="Envoyer mon CV"
                formTitle="J'envoie mon CV 🚀"
                formTitleClass="gradient-title text-[28px]"
            />
        </>
    )
}
