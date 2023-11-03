import { useState } from 'react';
import ModalVideo from 'react-modal-video';


export default function VPlayer({ url }) {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <>
      <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={showPlayer}
				videoId="L61p2uyiMSo"
				onClose={() => setShowPlayer(false)} 
			/>
      <button className="btn-primary" onClick={() => setShowPlayer(true)}>
        VIEW DEMO
      </button>
    </>
  )
}
