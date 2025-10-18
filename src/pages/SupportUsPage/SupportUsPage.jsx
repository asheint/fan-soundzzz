import Page from "../Page";
import "./SupportUsPage.scss";

const SupportUsPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "Support Us",
          quote: "Help us keep the calming sounds flowing for everyone.",
          content: [
            "Fan Soundzzz is a passion project dedicated to bringing you the highest quality fan sounds for relaxation, focus, and peaceful sleep. As an independent platform, we rely on the support of our community to continue growing our collection and improving our services. Your support helps us maintain our servers, acquire new recording equipment, and expand our library with even more diverse fan sounds.",
            "Every contribution, no matter the size, makes a meaningful difference in our ability to provide free, high-quality audio content to users worldwide. We believe that everyone deserves access to calming sounds that can improve their well-being, and your support helps us keep this vision alive. From upgrading our recording studio to traveling to capture unique fan sounds from around the world, your donations fuel our mission.",
            "We're committed to transparency and ensuring that your support directly impacts the quality and variety of content we can offer. Regular supporters gain early access to new sound collections, behind-the-scenes content about our recording process, and input on which types of fan sounds we should prioritize next. Together, we're building more than just a sound library—we're creating a community centered around wellness and relaxation.",
            "Whether through financial support, sharing our platform with friends, or providing feedback on our content, every form of support helps us grow. Join our community of supporters and help us continue our mission of bringing peaceful, high-quality fan sounds to everyone who needs them. Thank you for being part of the Fan Soundzzz journey.",
          ],
        }}
        imageSrc={"/images/support.webp"}
      />
    </>
  );
};

export default SupportUsPage;
