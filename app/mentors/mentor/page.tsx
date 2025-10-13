import MentorDetails from "@/components/MentorDetails";
import MentorHeader from "@/components/MentorHeader";

export default function Mentor() {
  const mentor = {
    Certification: {
      title: "Certification",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.`,
    },
    About: {
      title: "About",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.`,
    },
    Name: "Kritsin Watson",
    Position: "Founder & Mentor",
    TotalCourse: 30,
    Rating: 3,
    TotalVotes: 153,
    Experiences: 10,
    Grauduated: true,
    Language: "English, French",
    Social: {
      Facebook: "Facebook.com",
      Instagram: "Instagram.com",
      X: "X.com",
      Linkedin: "Linkedin.com",
    },
  };
  return (
    <>
      <MentorHeader />
      <MentorDetails />
    </>
  );
}
