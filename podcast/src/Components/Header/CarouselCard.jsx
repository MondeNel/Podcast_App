import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './CarouselCard.module.css';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent, Typography, Select, MenuItem } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';

const showsData = [
  
    {
      id: "9705",
      title: "Becoming Mother Nature",
      description: "Becoming Mother Nature introduced us to troubled 13-year-old Chloe Lovejoy, who prematurely inherited the mantle and awesome power of Mother Nature from her Grandmother Ivy. In season one, Chloe struggled mightily to balance the trials and tribulations of middle school with...you know, saving the world. With Cupid and the Reaper, Volume II of “The Natureverse,” Chloe will soon learn she’s not the only super-powered teenager in the world. Meet thirteen-year-old Mondo Ramirez, a hopeless romantic in Savannah, Georgia, who rarely thinks of consequences. When his elaborate 8th grade promposal goes awry, Mondo accidentally kills the Grim Reaper, inheriting the Reaper’s cloak and scythe in the process. Marcus Aronson never accepted or understood his parents’ divorce. Logical and socially challenged, Marcus went on a mission to find Cupid himself, and finally convinced the winged archer him to hand over his arrows and his title. Armed with research, algorithms and a huge pair of wings, Marcus is determined to change the way people fall in love. Cupid and The Reaper, Volume II of the “Natureverse,” tells the buddy-adventure story of these two mismatched and unlikely heroes. Can Marcus and Mondo learn to work together and harness the powers of life, death and love to fight off a mysterious supernatural force in their school? And will Chloe see them as friends...or foes? For more great Gen-Z Media podcasts visit: http://gzmshows.com",
      seasons: 2,
      image: "https://content.production.cdn.art19.com/images/82/13/f6/9a/8213f69a-882f-49ae-b25b-aa0d91c27fe3/f2c8dcc41fe54ea9d738b6a73942a1ab3be4d2c6e528e7b24121cf89275a7944aab19b3f1ae44e5c65039510a17903e42577e0fb977ab8af2e388d0b3273c476.jpeg",
      genres: [9],
      updated: "2021-10-14T09:00:00.000Z"
    },
    {
      id: "10934",
      title: "WeWow",
      description: "Hosted by Mindy Thomas and Guy Raz of  Wow in the World, WeWow  is a project-based learning podcast with activities curious kids and grownups can bring to life in their world! Built around themes like Earth Day, Back-to-school, Black History Month and Summer Camp,  WeWow  invites kids to tinker like real scientists by trying experiments or activities at home and sharing their findings through photos, videos, or audio recordings.",
      seasons: 2,
      image: "https://content.production.cdn.art19.com/images/e0/ba/41/4d/e0ba414d-7805-4435-bcdb-87ef5ccab9a1/25d3351125c43b70beff87de28397fbcf5ea1a7d86d8d2b14ebd0226c8c6ffdb7a723df7a86475d6165c391f4b838fbcc4b6da05f380dc94af40f2b168e99945.jpeg",
      genres: [9],
      updated: "2022-10-27T07:01:00.000Z"
    },
    {
      id: "9694",
      title: "Young Ben Franklin",
      description: "Before he was Benjamin Franklin, inventor and statesman, he was just Ben, a boy in Colonial Boston with an adventurous spirit, a curious mind...and a penchant for getting into trouble. Meet our most endearing founding father at fourteen; a charming rebel years away from discovering the ageless sayings and brilliant inventions that made him famous. When Ben and his friends stumble upon a mysterious letter leading to a legendary treasure, he'll have to use his wits and bravery to outsmart the cruel British governor of Massachusetts. For more great Gen-Z podcasts visit http://gzmshows.com",
      seasons: 2,
      image: "https://content.production.cdn.art19.com/images/27/5c/b2/90/275cb290-4a0c-40e1-9015-a944ef3cdaa0/d8a37376115fa95a213434d69a98558cd0eb8c9bc2b24ae75157f6058464ed42c0c5b2ea099e6acbe89e28e20482a9789bff6333d338a8dd1b70cadc7e378e2d.jpeg",
      genres: [9],
      updated: "2022-04-13T07:01:00.000Z"
    },
    {
      id: "9263",
      title: "True Love",
      description: "Love is that first breathless glance. That person you lust after. That person you fall too hard for.   But “happily ever after” ain’t ever in the cards. In fact, it’s more like, “ Hurry up before my husband gets home!”  And that is True Love. From Wondery, True Love is a weekly fictional series of scandalous love stories that are sexy, funny and filled to the brim with heartache. It’s the marriage of your favorite nighttime soap opera with your favorite juicy beach read. True Love explores the obstacles and challenges of walking the path to happily ever after...or happy for the moment. Co-hosted by Amber Reauchean Williams and Malcolm Barrett.",
      seasons: 6,
      image: "https://content.production.cdn.art19.com/images/d4/c3/24/af/d4c324af-61b8-4905-816e-d33bd7cb3eba/2a63f7fa4a654c8582a18e490838cfb10facccf8464bd2b588bdb13079e82b38542f12e9a6f579cb545f5c7418de411f90f918a4b956b63e9ec0a620e2e37891.png",
      genres: [7],
      updated: "2022-06-29T07:30:00.000Z"
    },
    {
      id: "8760",
      title: "Secret Sauce",
      description: "How do certain companies succeed where others have failed? What’s their “secret sauce”...and how can we get our hands on their recipes? From Wondery, the makers of the hit podcasts Business Wars and WeCrashed, comes SECRET SAUCE. Co-hosts Samuel Donner and John Frye take you behind the scenes of the most innovative leaders, trailblazing companies, and thriving cultures to learn what they have done to become a success. From how design guru Jony Ive worked with Steve Jobs to create some of Apple’s most iconic products, to how Warren Buffett invests better than just about anyone else. These are the unique recipes for what it takes to get to the top and stay there. Available ad-free on Wondery+ or on Amazon Music with a Prime membership or Amazon Music Unlimited subscription.",
      seasons: 4,
      image: "https://content.production.cdn.art19.com/images/db/ea/78/3d/dbea783d-82ee-430f-8db9-cb8409e3ae22/e58264bc3e60343216283d8ce23c35b4c077ac8e486b2fec393f121b24104d1b862b7084b11e2fa3ffea6404b668d5b03ddf4254552cb8d79af0ab5dff3e8e5b.png",
      genres: [6, 3],
      updated: "2021-07-13T09:00:00.000Z"
    },
    {
      id: "9693",
      title: "Treasure Island 2020",
      description: "James Hawkins helps his mom run a motel in modern day Montauk, Long Island. But when a mysterious man washes up on the beach with a treasure map tattooed on his chest, James discovers that Billy Bones is, in fact, a time traveling pirate from the 18th century. James and his new friends, Morgan and Max, follow the map right into a magical portal that leads them back nearly three hundred years and back into a swashbuckling adventure. For more great Gen-Z podcasts visit http://gzmshows.com Become a Gen-Z Superfan by visiting our Patreon page for early access to shows, scripts, and other exclusive content. http://patreon.com/gzmshows",
      seasons: 1,
      image: "https://content.production.cdn.art19.com/images/2f/59/1c/9d/2f591c9d-76f3-44de-9e18-e08357760a1b/7981ea59f91389ae43cd403bca43acfebf923edd4b8be32f1b668a6bc587297a9524c48d5f9a924490dd6558c90bf07ee9f790e6811ad77dd112482e0d19d347.jpeg",
      genres: [9],
      updated: "2020-06-15T09:00:00.000Z"
    },
]


const CarouselCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '80px',
        },
      },
    ],
  };

  
  
  const genreMapping = {
    1: "Personal Growth",
    2: "True Crime and Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family"
};

  const [selectedShow, setSelectedShow] = useState(null);
  const [iconColor, setIconColor] = useState('grey');

  const handleIconClick = () => {
    setIconColor(iconColor === 'grey' ? 'red' : 'grey');
  };

  const handleViewShow = (show) => {
    setSelectedShow(show);
  };

  const handleCloseDialog = () => {
    setSelectedShow(null);
  };

  const ShowDialog = ({ showId, onClose }) => {
    const [show, setShow] = useState(null);
    const [selectedSeason, setSelectedSeason] = useState(null);
  
    useEffect(() => {
      fetch(`https://podcast-api.netlify.app/id/${showId}`)
        .then(response => response.json())
        .then(data => {
          setShow(data);
          setSelectedSeason(data.seasons[0]);
        })
        .catch(error => console.error('Error fetching show data:', error));
    }, [showId]);
  
    const handleSeasonChange = (event) => {
      setSelectedSeason(event.target.value);
    };

    
    return (
      <Dialog open={true} onClose={onClose}>
        {show && (
          <>
            <div className={styles.dialogTitle}>{show.title}</div>
            <img src={show.image} alt={show.title} className={styles.showImage} />
            <DialogContent className={styles.dialogContent}>
              <div className={styles.description}>{show.description}</div>
              <div className={styles.seasons_title}>Seasons:</div>
              <Select value={selectedSeason} onChange={handleSeasonChange} className={styles.customSelect}>
                {show.seasons.map((season, index) => (
                  <MenuItem key={index} value={season}>
                    Season {index + 1}: {season.episodes.length} episodes
                  </MenuItem>
                ))}
              </Select>
              {selectedSeason && (
                <div className={styles.episodeList}>
                  <ol>
                    {selectedSeason.episodes.map((episode, index) => (
                      <li key={index} className={styles.episodeItem}>
                        <PlayCircleOutline style={{ color: 'red' }} />
                        <span className={styles.episodeTitle}>{episode.title}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </DialogContent>
          </>
        )}
      </Dialog>
    );
  };


  return (
    <>
      <h2 className={styles.heading}>Trending Shows...</h2>
      <div className={styles.carousel_container}>
        <Slider {...settings}>
          {showsData.map((show) => (
            <div className={styles.card} key={show.id}>
              <h3>{show.title}</h3>
              <img src={show.image} alt={show.title} className={styles.card_image} />
              <p>Seasons: {show.seasons}</p>
              <p>Last Updated: {new Date(show.updated).toLocaleDateString()}</p>
              <p className={styles.genres}>
                {show.genres.map((genreId) => {
                  const genreName = genreMapping[genreId];
                  return genreName.length > 12 ? genreName.slice(0, 12) + '...' : genreName;
                })}
              </p>
              <div className={styles.bottom}>
                <button className={styles.button} onClick={() => handleViewShow(show)}>View show</button>
              </div>
            </div>
          ))}
        </Slider>
        {selectedShow && (
          <ShowDialog showId={selectedShow.id} onClose={handleCloseDialog} />
        )}
      </div>
    </>
  );
};

export default CarouselCard;