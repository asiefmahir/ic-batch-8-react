const BioData = (props) => {
    console.log(props.children, 'props');
    return (
        <div className="bio-data">
            {props.children}
        </div>
    )
}

// function add (a, b) {
//     return a + b
// }

// add(10, 20)
// add(200, 300)
export default BioData