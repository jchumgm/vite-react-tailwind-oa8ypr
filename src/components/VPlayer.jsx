import ReactPlayer from 'react-player'

export default function VPlayer({ url }) {
  return (
    <>
      <ReactPlayer url={url} />
    </>
  )
}
