import VideoCard from './VideoCard'

export default function VideoGrid({ videos }) {
  return (
    <div class="grid grid-cols-1 gap-1 md:grid-cols-3">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  )
}
