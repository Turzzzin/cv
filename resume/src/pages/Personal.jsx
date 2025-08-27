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
        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
      </section>
      <section className="personal-contact">
        <h2>Contact Info</h2>
        <ContactGrid />
      </section>
    </div>
  );
}

export default Personal;