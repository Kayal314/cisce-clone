import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import LinkBar from './LinkBar';
import AboutSection from './AboutSection';
import ImgSlideshow from './ImgSlideshow';
import Highlights from './Highlights';
import NoticeBoard from './NoticeBoard';
import News from './News';
import Alumni from './Alumni';
import Publications from './Publications';
import Instructions from './Instructions';

function App() {
  
  return (
    <div className="app">
      <Header/>
      <div className='app_body'>
       <NavBar/>
       <LinkBar/>
       <AboutSection/>
       <div className='banner_highlights'>
          <ImgSlideshow/>
          <Highlights/>
        </div>
       <div className='notice_news_alumni'>
          <Alumni/>
          <NoticeBoard/>
          <News/>
       </div>
       <div className='note_publication_place'>
         <div className='places'>
          <p className='places_title'>CISCE GOING PLACES</p>
         <img className = 'places_map' src='https://www.cisce.org/images/locate-map-img.png' alt='CISCE going places'/>
          <Instructions/>
         </div>
          <div className='concession'>
            <p className='concession_heading'>CONCESSIONS TO CHILDREN WITH SPECIAL NEEDS</p>
            <p className='concession_text'>The Council is prepared to give special consideration and make necessary arrangements in respect of candidates who are handicapped in any way, which might affect their performance in the ICSE (X) / ISC (XII) Examination.</p>
            <p className='concession_text'>When a candidate suffers some injury or bereavement or dire unforeseen circumstance which may adversely affect his or her performance in the examination, the Special Difficulty procedure is used. A form is forwarded to the Council by the Head of the candidates’ school and the candidates’ examination answer script is then given special consideration by a committee before the issue of the results. The Council’s committee does not give a "blanket" concession but treats every case on its merit, for experience has shown that candidates working under similar unusual stress are affected in widely different ways. For this reason the Special Difficulty Form provides for the performance of the affected candidate to be compared with that of his/her other classmates.</p>
            <p className='concession_plus'>+More</p>
          </div>
          <Publications/>
       </div>
      </div>
      <div className='footer'>
          <p>@2022 Council for the Indian School Certificate Examinations.</p>
          <p>Website Clone</p>
      </div>
    </div>
  );
}

export default App;
