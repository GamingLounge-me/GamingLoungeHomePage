import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'
import ImgMc from './../assets/images/MC.png?url';
import ImgCoding from './../assets/images/coding.jpg?url';
import { Block, BlockHolder } from '../components/Block';

const Home: FunctionComponent = () => {
    return (
        <BlockHolder>
            <Block
                    section="aboutus"
                    title="About Us" >
                GamingLounge was born from a simple idea: to create a space where passionate gamers can come together to explore their favorite games and discover new ones. We're host a collection of servers. we're a community that values connection, collaboration, and the joy of shared experiences.

                What sets GamingLounge apart is our commitment to fostering a positive and supportive environment. We believe in playing together, helping each other, and building something great as a team. This extends beyond the games we play and into the realm of coding. We recognize the power of technology and encourage our members to explore their coding interests, share their projects, and learn from one another.

                Whether you're a seasoned gamer, a curious newcomer, or someone with a passion for coding, GamingLounge offers a place to connect, learn, and have fun. Join us as we continue to build our community and explore the exciting worlds of gaming and technology!
            </Block>

            <Block
                    section="endless"
                    title="Minecraft: Endless"
                    position="right"
                    image={ImgMc}
                    textColor="light" >
                <h3 className="text-xl">IP: <span className="underline">GamingLounge.me</span></h3>
                <h3 className="text-xl">Version: 1.21.4</h3>
                <div>
                    <h4 className="text-lg">Join Endless</h4>
                    <p>Right click NPC "Endless" in the lobby or issue /server Endless2 to join the server.</p>
                </div>
                <div>
                    <h4 className="text-lg">Usefull Commands</h4>
                    <ul className="list-disc pl-4">
                        <li>/clan</li>
                        <li>/pad</li>
                        <li>/claim</li>
                        <li>/teamclaim</li>
                        <li>/tpa</li>
                        <li>/rtp</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg">Usefull items (Found in Recepie book)</h4>
                    <ul className="list-disc pl-4">
                        <li><a href="https://github.com/GamingLounge-me/PortableInventories" target="_blank" className="link">PortableInventories</a>
                            <ul className="list-[circle] pl-4">
                                <li>Portable- Workbench / Enderchest / Grindstone / Stonecutter / Smithingtable</li>
                                <li>The item is not renamed, just the vanilla item but enchanted</li>
                            </ul>
                        </li>
                        <li><a href="https://github.com/GamingLounge-me/telepads" target="_blank" className="link">Telepad</a></li>
                    </ul>
                </div>
                <div className="card-actions justify-end">
                    <Link to="/minecraft/endless/" className="btn">More information</Link>
                    <a href="https://map.gaminglounge.me/minecraft/endless/" target="_blank" className="btn">Map</a>
                </div>
            </Block>

            <Block
                    title="Coding"
                    section="coding"
                    image={ImgCoding}
                    position="left"
                    textColor="light" >
                {/* TODO: abstaction */}
                <h3 className="text-xl">Java</h3>
                <div>
                    <h4 className="text-lg">API</h4>
                    <ul className="list-disc pl-4">
                        <li><a href="https://github.com/GamingLounge-me/ConfigAPI" target="_blank" className="link">ConfigAPI</a></li>
                        <li><a href="https://github.com/GamingLounge-me/GuiAPI" target="_blank" className="link">GuiAPI</a></li>
                        <li><a href="https://github.com/GamingLounge-me/PlayerInputAPI" target="_blank" className="link">PlayerInputAPI</a></li>
                        <li><a href="https://github.com/GamingLounge-me/ItemBuilder" target="_blank" className="link">ItemBuilder</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg">Plugins</h4>
                    <ul className="list-disc pl-4">
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl">HTML/CSS/JavaScript</h3>
                    <ul className="list-disc pl-4">
                        <li><a href="https://github.com/GamingLounge-me/GamingLoungeHomePage" target="_blank" className="link">This Website</a></li>
                    </ul>
                </div>

            </Block>
        </BlockHolder>
    )
};

export default Home;

