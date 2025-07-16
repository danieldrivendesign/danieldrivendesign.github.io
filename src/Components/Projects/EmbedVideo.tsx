export default function EmbedVideo({source}: { source: string }) {
    return (
        <video webkit-playsinline playsInline autoPlay={true} className={""} muted loop>
            <source src={source} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    )
}