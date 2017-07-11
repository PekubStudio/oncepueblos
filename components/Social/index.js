import FaFacebook from 'react-icons/lib/fa/facebook'
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaTwitter from 'react-icons/lib/fa/twitter'

export default () => (
  <div>
    <ul className='content'>
      <a href='#'><li><FaFacebook /></li></a>
      <a href='#'><li><FaYoutubePlay /></li></a>
      <a href='#'><li><FaInstagram /></li></a>
      <a href='#'><li><FaTwitter /></li></a>
    </ul>
    <style jsx>{`
        .content {
          margin-top: 20px;
          text-align: center;
          padding-bottom: 60px;
          -webkit-padding-start: 0px;
        }

        .content ul {
          display: block;
        }

        .content li {
          color: black;
          list-style: none;
          font-size: larger;
          display: inline-block;
          padding-right: 20px;
          padding-left: 20px;
        }
        .content li:hover {
          color: #5e5e5e;
        }`}</style>
  </div>
)
