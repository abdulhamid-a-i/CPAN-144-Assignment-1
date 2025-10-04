import { pages } from 'next/dist/build/templates/app-page';
import { useState } from 'react';
import Header from "../components/Header"
import MainContent from "../components/MainContent";
import GameCard from "../components/GameCard";
import { Game } from "@/types";
import { List } from './list';
import { RenderGallery } from './gallery';

// Sets MainContent props values
const HomeTitle="Welcome to my Website!";
const HomeContent="Check out the different pages like my catalog of games I enjoyed!";
const GamesTitle="Games Catalog";
const GamesContent="Here's a collection of video game I like";

// Sets values for GameCards
  const games: Game[] = [
{
      id: 1,
      title: "Red Dead Redemption 2",
    synopsis: "Experience the ending of the Wild West ero through the eyes of a hardened bandit named Arthur Morgan.",
    poster_path: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1720558643",
    release_date:"2019-12-05",
    vote_average: 9.7
    },
    {
      id: 2,
      title: "Horizon Zero Dawn",
    synopsis: "Follow the story of Aloy, a young hunter in a world overrun by machines, who sets out to uncover her past.",
    poster_path: "https://image.api.playstation.com/vulcan/ap/rnd/202409/2716/16b33fa9a5c7285ba86a035b4a1c5f8eb430b407eae35ffd.png",
    release_date:"2017-03-28",
    vote_average: 9.3
    },
    {
      id: 3,
      title: "Uncharted 4: A Thief's End",
    synopsis: "The final chapter in the UNCHARTED series, Nathan Drake left the world of fortune hunting behind. However, it doesn’t take long for fate to come calling when Drake’s brother, Sam, resurfaces seeking his help to save his own life and offering an adventure Drake can’t resist. ",
    poster_path: "https://i0.wp.com/ragglefragglereviews.com/wp-content/uploads/2021/10/eio6ka26jchno8kafi7won4l.webp?fit=1200%2C675&ssl=1",
    release_date:"2016-05-10",
    vote_average: 9.4
    },
    {
      id: 4,
      title: "Dragon Age 2",
    synopsis: "Take on the role of Hawke, a refugee seeking to escape the darkspawn-plagued land of Ferelden and become the Champion of Kirkwall. Rise to power and fight epic battles while making decisions that determine the course of civilization.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMWM4YWJhZGEtMjlmMC00OWE5LWI4MGEtZDNkOTcwNTFkZmJhXkEyXkFqcGc@._V1_.jpg",
    release_date:"2011-03-08",
    vote_average: 9.0
    },
    {
      id: 5,
      title: "Fallout: New Vegas",
    synopsis: "Welcome to Vegas. New Vegas.\nIt’s the kind of town where you dig your own grave prior to being shot in the head and left for dead…and that’s before things really get ugly. It’s a town of dreamers and desperados being torn apart by warring factions vying for complete control of this desert oasis. It’s a place where the right kind of person with the right kind of weaponry can really make a name for themselves, and make more than an enemy or two along the way.\nAs you battle your way across the heat-blasted Mojave Wasteland, the colossal Hoover Dam, and the neon drenched Vegas Strip, you’ll be introduced to a colorful cast of characters, power-hungry factions, special weapons, mutated creatures and much more. Choose sides in the upcoming war or declare “winner takes all” and crown yourself the King of New Vegas in this follow-up to the 2008 videogame of the year, Fallout 3.\nEnjoy your stay.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMjZlYzAxYTEtYWUxNy00MTkyLWExZjktY2ZmZjA0MTAwODU1XkEyXkFqcGc@._V1_.jpg",
    release_date:"2010-10-19",
    vote_average: 8.9
    },
    {
      id: 6,
      title: "Baldur's Gate 3",
    synopsis: "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.\nMysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.\nFrom the creators of Divinity: Original Sin 2 comes a next-generation RPG, set in the world of Dungeons & Dragons.",
    poster_path: "https://bg3.wiki/w/images/8/89/Baldur%27s_Gate_3_Cover_Art.webp",
    release_date:"2023-08-03",
    vote_average: 10
    }

  ]
// Layout of homepage
const HomeSection = () => {
        return (

            <div style={{
              marginTop:'20px'
            }}>
            <MainContent title={HomeTitle} content={HomeContent}/>
            </div>
        );
    };

    // Layout of Game Library page
const GamesSection = () => 
    {
         const [filteredGames, setFilteredGames] = useState(games);
        
           function searchGames(searchValue: string){
            //filter
            //Setting user input into lowercase to prevent not finding game due to capitalization
            searchValue=searchValue.toLowerCase();
            const gamesToKeep = games.filter((game) =>
              //Setting game title includes to lowercase to revent not finding game due to capitalization
              game.title.toLowerCase().includes(searchValue));
        
              setFilteredGames(gamesToKeep);
           }
        return (

            <div style={{
              marginTop:'20px'
            }}>
            <MainContent title={GamesTitle} content={GamesContent}/>
            <div style={{
        display:'flex',
        justifyContent:'center'
      }}>
            <input id='searchBar'
                    style={{
                      backgroundColor: "white",
                      marginTop: 16,
                      marginBottom:60,
                      color:'black'
                    }}
                    onChange={(event) => {
                      searchGames(event.target.value);
                    }}
                    placeholder="Search Games"
                  />
              </div>
                  <section id='games' style={{
                    display:'flex',
                    columnGap:'10px',
                    flexWrap:'wrap',
                    justifyContent:'center',
                    rowGap:'5px'
                  }}>
                  {filteredGames.length > 0 ? (
                    filteredGames.map((game) => {
                      return <GameCard game={game}/>;
                    })
                  ) : (
                    <p>No games found</p>
                  )}
                  </section>
                  <section style={{
                    display:'flex',
                    justifyContent:'center',
                    marginTop:'10px'
                  }}>
                    <List/>
                  </section>
            </div>

        );
    };


const PhotoSection = () => {
        return (

            <div style={{
              marginTop:'20px'
            }}>
            <RenderGallery/>
            </div>
        );
    };

export default function PageSwitch() {
  const [page, setPage] = useState('home'); 

  const renderContent = () => {
    switch (page) {
      case 'home':
        return <HomeSection />;
      case 'game':
        return <GamesSection />;
      case 'photo':
        return <PhotoSection />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header/>
      <div style={{
        display:'flex',
        justifyContent:'center'
      }}>
      <nav>
        <button style={{
          background:'cornflowerblue',
          margin:'0px 10px'

        }} 
        onClick={() => setPage('home')}>Homepage</button>
        <button style={{
          background:'cornflowerblue',
          margin:'0px 10px'

        }}  onClick={() => setPage('game')}>Games Library</button>
        <button style={{
          background:'cornflowerblue',
          margin:'0px 10px'

        }}  onClick={() => setPage('photo')}>Gallery</button>
      </nav>
      </div>

      <div className="content-container">
        {renderContent()}
      </div>
    </div>
  );
}

