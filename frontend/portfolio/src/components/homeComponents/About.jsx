import Avatar from "../../assets/avatar.jpg"
import Bg from "../../assets/pexels-matheus-bertelli-573299.jpg"
import Identity from "./Identity"
const About = () => {
    return (
        <div className="w-full flex lg:flex-row flex-col items-end">
                <div className="flex-1 p-8 flex gap-10 text-justify flex-col justify-start">
                    <div className="w-full">
                        <header className="font-bold text-xl font-sans">
                        Reprehenderit consectetur incididunt aliqua consectetur Lorem
                    </header>
                    </div>
                    <div className="flex lg-flex-row flex-col gap-10 lg:items-start items-center indent-10 ">
                        <Identity Avatar={Avatar}/>
                        <p>Voluptate adipisicing voluptate adipisicing enim. Quis Lorem velit aliqua enim. Sunt aute eiusmod excepteur nisi minim. Non sit culpa in non qui do non voluptate labore anim ea. Eiusmod quis culpa laboris nisi ipsum nostrud commodo commodo ut commodo commodo excepteur. Pariatur fugiat ut aute nulla consequat Lorem tempor in labore ullamco dolore. Sit aliqua est do sunt officia.</p>
                    </div>
                </div>
                <div className="flex-1 p-8 box-border">
                    <img src={Bg} alt="" className="blur-sm hover:blur-none transition duration-700 rounded-md"/>
                </div>
        </div>
    )
}

export default About