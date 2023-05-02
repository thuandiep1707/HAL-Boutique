import {Routes, Route} from 'react-router-dom';
import HomePageContent from "./HomePageContent/HomePageContent";
import './MainContent.scss';


const MainContent = () => {
    return(
        <div className="main_content">
            <Routes>
                <Route path='/' element={<HomePageContent />} />
            </Routes>
        </div>
    )
}
export default MainContent;
