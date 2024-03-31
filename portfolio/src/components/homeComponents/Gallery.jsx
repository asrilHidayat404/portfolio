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
        <div className="py-20 px-10 lg:pt-[300px] pt-[150px] bg-slate-300 relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 right-0 -z-[0]">
                <path fill="#fff" fill-opacity="1" d="M0,192L6.2,186.7C12.3,181,25,171,37,192C49.2,213,62,267,74,288C86.2,309,98,299,111,261.3C123.1,224,135,160,148,138.7C160,117,172,139,185,170.7C196.9,203,209,245,222,240C233.8,235,246,181,258,170.7C270.8,160,283,192,295,208C307.7,224,320,224,332,218.7C344.6,213,357,203,369,176C381.5,149,394,107,406,106.7C418.5,107,431,149,443,192C455.4,235,468,277,480,282.7C492.3,288,505,256,517,229.3C529.2,203,542,181,554,192C566.2,203,578,245,591,218.7C603.1,192,615,96,628,85.3C640,75,652,149,665,197.3C676.9,245,689,267,702,234.7C713.8,203,726,117,738,122.7C750.8,128,763,224,775,250.7C787.7,277,800,235,812,186.7C824.6,139,837,85,849,69.3C861.5,53,874,75,886,85.3C898.5,96,911,96,923,122.7C935.4,149,948,203,960,229.3C972.3,256,985,256,997,224C1009.2,192,1022,128,1034,96C1046.2,64,1058,64,1071,80C1083.1,96,1095,128,1108,149.3C1120,171,1132,181,1145,186.7C1156.9,192,1169,192,1182,170.7C1193.8,149,1206,107,1218,85.3C1230.8,64,1243,64,1255,64C1267.7,64,1280,64,1292,64C1304.6,64,1317,64,1329,74.7C1341.5,85,1354,107,1366,112C1378.5,117,1391,107,1403,101.3C1415.4,96,1428,96,1434,96L1440,96L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path>
            </svg>
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