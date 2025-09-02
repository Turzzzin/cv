import "./Personal.css"
import ContactGrid from "../components/ContactGrid";
import ProfilePhoto from "../components/ProfilePhoto";
import pfp from '../assets/foto-artur.jpeg'

function Personal() {
  return (
    <div className="personal">
      <div className="personal-header">
        <ProfilePhoto src={pfp} />
        <div className="personal-info">
          <h1>Hi, I'm Artur 👋</h1>
          <p>Welcome to my website. Here you'll find a little bit about me.</p>
        </div>
      </div>
      <section className="hobbies">
        <h2>About me</h2>
          <p>
            I'm passionate about programming, music, and gaming — three things that shape a big part of my life.  
          </p>

          <p>
            In my free time, I enjoy building programming projects (like this one you're reading right now!) or creating little tools to make my life easier.  
          </p>

          <p>
            Music is also a huge part of my daily routine. Whether I’m working, working out, gaming, or just chatting with friends, I love having a good playlist in the background.  
          </p>

          <p>
            Gaming has been a big hobby for me as well. I was once among the top 500 VALORANT players on the Brazil server and even did some streaming before starting college. These days, I’m more of a casual player, but I still enjoy the game whenever I can.  
          </p>

          <p>
            And of course, nothing beats spending quality time with my friends and family.  
          </p>
      </section>
      <section className="personal-contact">
        <h2>Contact Info</h2>
        <ContactGrid />
      </section>
    </div>
  );
}

export default Personal;