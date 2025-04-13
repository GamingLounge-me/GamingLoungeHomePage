import { FunctionComponent } from 'react';
import ImgMc from './../assets/images/MC.png?url';
import ImgCoding from './../assets/images/coding.jpg?url';
import { Block, BlockHolder } from '../components/block';
import Link from '../components/link';

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
                        <li><Link to={{ghRepo: "GamingLounge-me/PortableInventories"}} newTab className="link">PortableInventories</Link>
                            <ul className="list-[circle] pl-4">
                                <li>Portable- Workbench / Enderchest / Grindstone / Stonecutter / Smithingtable</li>
                                <li>The item is not renamed, just the vanilla item but enchanted</li>
                            </ul>
                        </li>
                        <li><Link to={{ghRepo: "GamingLounge-me/telepads"}} newTab className="link">Telepad</Link></li>
                    </ul>
                </div>
                <div className="card-actions justify-end">
                    <Link to="/minecraft/endless/" className="btn">More information</Link>
                    <Link to={{map: "minecraft/endless"}} newTab className="btn">Map</Link>
                </div>
            </Block>

            <Block
                title="Coding & API"
                section="CodingAPI"
                    image={ImgCoding}
                    position="left"
                textColor="light"
            >
                <h2 className="text-2xl">Coding</h2>
                {/* content */}
                <div className='mb-4' />
                <h2 className="text-2xl">API</h2>
                {/* content */}
            </Block>
        </BlockHolder>
    )
};

export default Home;

