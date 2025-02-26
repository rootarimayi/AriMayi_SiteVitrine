import HomeContainer from "./containers/HomeContainer";
import FloatingButton from "./components/Buttons/FloatingButton";

export default function HomePage() {
  return(
    <>
      <HomeContainer />
      <FloatingButton
          buttonText="Envoyer mon CV"
          formTitle="Formulaire de contact"
      />
    </>
  );
}
