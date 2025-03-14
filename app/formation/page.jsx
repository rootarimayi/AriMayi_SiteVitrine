import FormationContainer from "../containers/FormationContainer";
import FloatingButton from "../components/Buttons/FloatingButton";

export default function FormationPage() {
    return (
        <>
            <FormationContainer />
            <FloatingButton
                buttonText="Envoyer mon CV"
            />
        </>
    );
}