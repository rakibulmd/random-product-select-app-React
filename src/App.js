import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import ProductSelectionDeclaration from "./Components/ProductSelectionDeclaration/ProductSelectionDeclaration";
import QnAaccordion from "./Components/QnAaccordion/QnAaccordion";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div>
            <Header></Header>
            <ProductSelectionDeclaration></ProductSelectionDeclaration>
            <Shop></Shop>
            <QnAaccordion></QnAaccordion>
            <Footer></Footer>
        </div>
    );
}

export default App;
