import Albums from "../../assets/pexels-pixabay-268533.jpg"

const Gallery = () => {
    const randomImages = [];
    for(let i = 0; i < 20; i++) {
        randomImages.push(
            <img 
                key={i} 
                src={`https://source.unsplash.com/random/300x200?sig=${Math.random()}`} 
                alt="" 
                className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-auto rounded-md"
            />
        );
    }
    return (
        <div className="py-20 px-10 bg-slate-300">
            <header className="w-full text-center">
                <h1 className="font-bold text-4xl">Gallery</h1>
            </header>
            <div className="w-full flex justify-evenly mt-10 flex-wrap gap-10">
                {
                  randomImages  
                }
            </div>
        </div>
    )
} 
export default Gallery