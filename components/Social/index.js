import FaFacebook from 'react-icons/lib/fa/facebook'
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaTwitter from 'react-icons/lib/fa/twitter'

export default () => (
  <div>
    <ul className='content'>
      <li><FaFacebook /></li>
      <li><FaYoutubePlay /></li>
      <li><FaInstagram /></li>
      <li><FaTwitter /></li>
    </ul>
    <style jsx>{`
        .content {
          margin-top: 45px;
          text-align: center;
          padding-bottom: 60px;
        }

        .content ul {
          display: block;
        }

        .content li {
          list-style: none;
          display: inline-block;
          padding-right: 20px;
          padding-left: 20px;
        }`}</style>
  </div>
)
