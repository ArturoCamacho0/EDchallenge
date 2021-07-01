import "../assets/css/App.css";
import data from '../services/data.json';

import ProfilePicture from '../components/ProfilePicture';
import LinkBox from '../components/LinkBox';
import Details from '../components/Details';
import SocialMedia from '../components/SocialMedia';

function App() {
  let links = data.links;

  return (
    <div className="App">
      <ProfilePicture/>

      <Details name={data.name} subtitle={data.subtitle}/>

      {links.map(link => {
        return(
          <LinkBox key={link.id} link={link}/>
        );})
      }

      <SocialMedia />
    </div>
  );
}

export default App;
