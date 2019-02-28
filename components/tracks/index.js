import React , {Component} from 'react'

const trackList = [
  {name: "Jake Houlsby - Howl", otherMedia: true, link: 'https://vimeo.com/236573074',  description: "Ford Fiesta Advert", image: "/static/media/jakead.jpg"},
  {name: "James Bay", otherMedia: false, link: 'https://open.spotify.com/album/0SyS8K9Rl3FX8Y647aCW5P', description: "mixed, produced & mastered", image: "/static/media/james-bay-cover.jpeg"},
  {name: "James Bay", otherMedia: false, link: 'https://open.spotify.com/album/16TAT5NWZLNf0mUuENl8M0', description: "Mixed & mix engineer", image: "/static/media/letsgo.jpg"},
  {name: "Jake Houlsby", otherMedia: false, link: 'https://open.spotify.com/album/6PG7hke3fqJzAgToj9CIsF', description: "Produced", image: "/static/media/carousel.jpg"},
  {name: "Jake Houlsby", otherMedia: false, link: 'https://open.spotify.com/album/6bBo3e7f3RhA74BliaCEeA', description: "Produced", image: "/static/media/howel.jpg"},
  {name: "High Tide 15:47", otherMedia: false, link: '', description: "Produced", image: "/static/media/withyou.jpg"},
  {name: "Matt Hunsley", otherMedia: false, link: 'https://open.spotify.com/album/6IptHpyfI4BmY8X4hXcEbR', description: "Produced", image: "/static/media/nearme.jpg"},
  {name: "Creatures", otherMedia: false, link: 'https://open.spotify.com/album/0jcVUdedc9Bx5x8tKeQD2t', description: "Enola", image: "/static/media/creatures.jpg"},
]

const Tracks = () => {
    return (
      <article id="work" className="tracks-container">
        <section>
          <h2>Work</h2>

        </section>
        <div className="tracks">
          <ul className="tracks-slider">
            {trackList.map(item => (
              <li>
                <a href={item.link}>
                  <div className="thumb">
                    <img src={item.image}/>  
                  </div>       
                  <h3>{item.name}</h3>
                  <span>{item.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className="spotify" href="https://open.spotify.com/user/0qt3fblazmt3iggap4f2h7z7u/playlist/1ZZJL88HTWEVhNwfNKubmB">Listen to more on Spotify</a>
      </article>
    )
}

export default Tracks
