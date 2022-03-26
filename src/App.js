import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import ProductSelectionDeclaration from "./Components/ProductSelectionDeclaration/ProductSelectionDeclaration";

function App() {
    return (
        <div>
            <Header></Header>
            <ProductSelectionDeclaration></ProductSelectionDeclaration>
            <Shop></Shop>
        </div>
    );
}

export default App;
