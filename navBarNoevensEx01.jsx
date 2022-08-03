// Ex 1 - remove all even numbers from the NavBar
// then make a Button for each instead of an <li>
const handleClick = (e) => {
  alert(`You clicked button ${e.target.innerHTML}.`);
};
function NavBar({ menuitems }) {
  const { Button } = ReactBootstrap;
  const updatedList = menuitems.map((listItem, index) => {
    return <Button onClick={handleClick} key={index.toString()}>{listItem}</Button>;
  });
  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
let oddMenuItems = menuItems.filter(
  (num) => {
    let answer = (num % 2 === 1);
      return answer;
    }
);
ReactDOM.render(
  <NavBar menuitems={oddMenuItems} />,
  document.getElementById("root")
);
