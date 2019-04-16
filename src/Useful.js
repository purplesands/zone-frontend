import React from 'react'
import { connect } from 'react-redux';

class Useful extends React.Component {

  static letterSpacing(num){
    return Math.floor(Math.random() * num)
  }

  static lineSpacing(num){
    return Math.random() * num
  }
}

const birds=['http://orientalbirdimages.org/images/data/mongolia_2015085.jpg',
'http://orientalbirdimages.org/images/data/bloodphaesantselapass1.jpg',
'http://orientalbirdimages.org/images/data/crimsonheadedpartridge08f.jpg',
'http://orientalbirdimages.org/images/data/blyths_tragopanmale2.jpg',
'http://orientalbirdimages.org/images/data/21288938403_cef67392c3_o.jpg',
'http://orientalbirdimages.org/images/data/backgrounderaser_a.jpg',
'http://orientalbirdimages.org/images/data/bepheas04.jpg',
'http://orientalbirdimages.org/images/data/chestnutheadpartridge_je_copy1.jpg',
'https://pbs.twimg.com/media/D4MpapOW0AIxGZg.jpg',
'https://pbs.twimg.com/media/D4LyeTOW4AABRCI.jpg',
'https://pbs.twimg.com/media/D4JJEHrWkAIzOJJ.jpg',
'https://pbs.twimg.com/media/D4HWljNW0AApbb_.jpg',
'https://pbs.twimg.com/media/D4GdVI2WAAAzx2-.jpg',
'https://pbs.twimg.com/media/D4D2WdgWsAECu6f.jpg',
'https://pbs.twimg.com/media/D4AV7IjWsAEA-Ch.jpg',
'https://pbs.twimg.com/media/D3_dNnCXsAA49hA.jpg',
'https://pbs.twimg.com/media/D39qP0uWsAAZODT.jpg',
'https://pbs.twimg.com/media/D37A6CYWsAATt0b.jpg',
'https://pbs.twimg.com/media/D34Z0RtW4AICQsW.jpg',
'https://pbs.twimg.com/media/D3zkyGzWwAUh_jK.jpg',
'https://pbs.twimg.com/media/D3v2zI4WsAAni8A.jpg',
'https://pbs.twimg.com/media/D3s9YG_WwAAWMVD.jpg',
'https://pbs.twimg.com/media/D3lxTJ3W0AAbFpE.jpg',
'https://pbs.twimg.com/media/D3k4H_SXkAIGl5T.jpg',
'https://pbs.twimg.com/media/D3gceTdWkAEhqUQ.jpg',
'https://pbs.twimg.com/media/D3bS0nfXoAUil7B.jpg',
'https://pbs.twimg.com/media/D3XkqLZXoAA3S14.jpg']

function mapStateToProps(state) {
  return {
    today: state.today
  }
}


const HOC = connect(mapStateToProps)
export default HOC(Useful);
