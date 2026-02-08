import profileImg from "../../data/images/myimage.jpg";

export default function ProfileImage({ size = "w-48 h-48" }) {
    // This defines the 6 points of the hexagon
    const hexPath = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

    return (
        <div className={`relative ${size} group`}>
            <div
                className="absolute inset-0 bg-purple-500/30 blur-2xl group-hover:bg-purple-500/50 transition-all duration-500"
                style={{ clipPath: hexPath }}
            />
            <div
                className="relative h-full w-full bg-zinc-800 p-[2px] transition-transform duration-500 group-hover:scale-105"
                style={{ clipPath: hexPath }}
            >
                <div
                    className="h-full w-full bg-zinc-950 overflow-hidden"
                    style={{ clipPath: hexPath }}
                >
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>
        </div>
    );
}