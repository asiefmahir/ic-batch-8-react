import "./App.css";
import BioData from "./components/BioData";

function App() {
	return (
		<div className="App">
			<BioData 
        name="Mahir Asief"
        age="26"
        gender="Male"
        email="asiefmahir1@gmail.com"
        phone="+88 01713121212"
        address="Rajshahi"
        country="BD"
        skills={['React', 'Redux', 'JS']}
        interests={['Sports', 'theme Development']}
      />
			<hr />
			<BioData 
        name="Rashed Vai"
        age="20"
        gender="Male"
        email="rashed@gmail.com"
        phone="+91 9876543210"
        address="Dhaka"
        country="BD"
        skills={['React', 'Redux', 'NodeJs', 'JS', 'WP']}
        interests={['Music', 'Plugin Development']}
      />
			<hr />
			<BioData 
        name="Ethila"
        age="22"
        gender="Female"
        email="ethila@gmail.com"
        address="Khulna"
        country="BD"
        skills={['React', 'Redux', 'NodeJs', 'JS', 'WP', 'Python', 'Django']}
        interests={['Music', 'Plugin Development', 'AI']}
      />
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
