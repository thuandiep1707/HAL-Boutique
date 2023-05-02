import MainPoster from './sectionPoster/MainPoster.jsx'
import MainTitle from './sectionTitle/sectionTitle.jsx'
import MainContent from './SectionContent/MainContent.jsx'

const MainSection = () => {
    return (
        <div className="main_section">
            <MainPoster />
            <MainTitle />
            <MainContent />
        </div>
    )
}

export default MainSection