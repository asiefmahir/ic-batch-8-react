import "./App.css";
import BioData from "./components/BioData";
import InterestSection from "./components/InterestSection";
import PersonalInfo from "./components/PersonalInfo";
import SkillSection from "./components/SkillSection";

import {persons} from './data/persons'

function App() {
	return (
		<div className="App">
      {persons.map(person => (
        <BioData>
          <PersonalInfo
            name={person.name}
            age={person.age}
            gender={person.gender}
            email={person.email}
            phone={person.phone}
            address={person.address}
            country={person.country}
          />
          <SkillSection
            skills={person.skills}
          />
          <InterestSection 
            interests={person.interests}
          />
      </BioData>
      ))}
		</div>
	);
}


// App()
/**
 * 3 rules to be a component
 * 1) Component must be a Function
 * 2) It should return 'something'
 * 3) This 'something' should be some html-ish code -> JSX
 */
export default App;
