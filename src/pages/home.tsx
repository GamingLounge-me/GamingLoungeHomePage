import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="aboutus" style={{ marginBottom: 350 }} >
                <h1><a id="aboutus" href="#aboutus">About Us</a></h1>
            </div >

            <div className="full-block right minecraft">
                <h1><a id="endless" href="#endless" style={{ textDecoration: "none" }}>Minecraft: Endless</a></h1><br />
                <h3>IP: GamingLounge.me</h3><br />
                <h3>Version: 1.21.4</h3><br />
                <h4>Join Endless</h4>
                <p>Right click NPC "Endless" in the lobby or issue /server Endless2 to join the server.</p><br />
                <h4>Usefull Commands</h4>
                <ul>
                    <li>/clan</li>
                    <li>/pad</li>
                    <li>/claim</li>
                    <li>/teamclaim</li>
                    <li>/tpa</li>
                    <li>/rtp</li>
                </ul><br />
                <h4>Usefull items (Found in Recepie book)</h4>
                <ul>
                    <li><a href="https://github.com/GamingLounge-me/PortableInventories" target="_blank">PortableInventories</a>
                        <ul>
                            <li>Portable- Workbench / Enderchest / Grindstone / Stonecutter / Smithingtable</li>
                            <li>The item is not renamed, just the vanilla item but enchanted</li>
                        </ul>
                    </li>
                    <li><a href="https://github.com/GamingLounge-me/telepads" target="_blank">Telepad</a></li>
                </ul>
                <button><Link to="/minecraft/endless/">more information</Link></button>
                <button><a href="https://map.gaminglounge.me/minecraft/endless/" target="_blank">Map</a></button>
            </div >

            <div className="full-block left coding">
                <h1><a id="coding" href="#coding" style={{ textDecoration: "none" }}>Coding</a></h1><br />
                <h3>Java</h3><br />
                <h5>API</h5>
                <ul>
                    <li><a href="https://github.com/GamingLounge-me/ConfigAPI" target="_blank">ConfigAPI</a></li>
                    <li><a href="https://github.com/GamingLounge-me/GuiAPI" target="_blank">GuiAPI</a></li>
                    <li><a href="https://github.com/GamingLounge-me/PlayerInputAPI" target="_blank">PlayerInputAPI</a></li>
                    <li><a href="https://github.com/GamingLounge-me/ItemBuilder" target="_blank">ItemBuilder</a></li>
                </ul><br />
                <h5>Plugins</h5>
                <ul>

                </ul><br />
                <h3>HTML/CSS/JavaScript</h3>
                <ul>
                    <li><a href="https://github.com/GamingLounge-me/GamingLoungeHomePage" target="_blank">This Website</a></li>
                </ul>
            </ div>
        </>
    )
};

export default Home