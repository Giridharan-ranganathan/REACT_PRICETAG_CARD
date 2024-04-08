import "../style/App.css";
import Square from "./CardUI";

function App() {
  const data = [{
    title: "FREE",
    price: "$0/month",
      color: "white",
      features: [
        { name: "Single user", isAvailable: true },
        { name: "50Gb Storage", isAvailable: true },
        { name: "Unlimited Public Poject", isAvailable: true },
        { name: "Community Acess",isAvailable: true},
        { name: "Unlimited Pravite Project",isAvailable: false},
        { name: "Dedicated Phone Support",isAvailable:false},
        { name: "Free Subdomain",isAvailable:false},
        { name: "Monthly Status Reports",isAvailable:false},
       ],
  },{
    title: "PLUS",
      color: "white",
      price:"$9/month",
      features: [
        { name: "Single user", isAvailable: true },
        { name: "50Gb Storage", isAvailable: true },
        { name: "Unlimited Public Poject", isAvailable: true },
        { name: "Community Acess",isAvailable: true},
        { name: "Unlimited Pravite Project",isAvailable: true},
        { name: "Dedicated Phone Support",isAvailable:true},
        { name: "Free Subdomain",isAvailable:true},
        { name: "Monthly Status Reports",isAvailable:false},
       ],
  },{
    title: "PRO",
      color: "white",
      price:"$45/month",
      features: [
        { name: "Single user", isAvailable: true },
        { name: "50Gb Storage", isAvailable: true },
        { name: "Unlimited Public Poject", isAvailable: true },
        { name: "Community Acess",isAvailable: true},
        { name: "Unlimited Pravite Project",isAvailable: true},
        { name: "Dedicated Phone Support",isAvailable:true},
        { name: "Free Subdomain",isAvailable:true},
        { name: "Monthly Status Reports",isAvailable:true},
       ],
  }
]
  return (
   <>
     <div className="container">
      <div className="header">
        <h2>React Price Card Task</h2>
      </div>
      <div className="subHeader"><p>Reproduce this user interface using a React.js application with JSX. Write the code in a dynamic manner.</p></div>
      <div className="demo">
      {data.map((element, index) => (
        <Square
          key={index}
          price={element.price}
          background={element.color}
          message={element.title}
          items={element.features}
        />
      ))}
      </div>
     </div>
   </>
  );
}

export default App

