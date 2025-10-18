import Page from "../Page";
import "./FanModelsPage.scss";

const FanModelsPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "Fan Models",
          quote:
            "Discover the perfect harmony between airflow engineering and acoustic design.",
          content: [
            "Our extensive collection of fan models represents the pinnacle of acoustic engineering and airflow optimization. Each fan in our curated selection has been meticulously analyzed for its unique sound signature, from the gentle whisper of ceiling fans to the powerful hum of industrial ventilation systems.",
            "We specialize in capturing the authentic audio profiles of premium fan brands, recording each model in controlled acoustic environments to preserve the natural resonance and frequency patterns that make each fan unique. Our collection spans residential ceiling fans, tower fans, desk fans, and specialized cooling systems, each offering distinct auditory experiences.",
            "Using advanced sound engineering techniques and high-fidelity recording equipment, we ensure that every fan sound maintains its original character and therapeutic qualities. From the rhythmic pulsing of blade rotation to the subtle harmonics of motor operation, we capture the full spectrum of frequencies that contribute to the relaxing properties of fan sounds.",
            "Whether you're seeking the nostalgic comfort of a vintage ceiling fan or the modern efficiency of contemporary cooling systems, our fan models provide the perfect foundation for relaxation, focus, and peaceful sleep. Each model is carefully cataloged with detailed specifications, sound characteristics, and optimal usage scenarios to help you find your ideal acoustic companion.",
          ],
        }}
        imageSrc={"/images/fan.webp"}
      />
    </>
  );
};

export default FanModelsPage;
