import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading , subtitle) => (
    <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  )  

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>TalentHunterNews</h2>
            <InfoIcon />
        </div>
        {
            newsArticle("DataDog Internship Start","Top 100 Internships in the world")
        }
         {
            newsArticle("Spotify Music","Listen to ur top musicians at spotify")
        }
        {
            newsArticle("Meta Outage","Discover What happened")
        }
        {
            newsArticle("Big Tech Companies are Evil?","Why SE in Big Tech say that")
        }
    </div>
    
  )
}

export default Widgets
