import TelepadCrafting from "../../assets/images/telepad-crafting.png";
import TelepadGui1 from "../../assets/images/telepad-gui1.png";

const Endless = () => {
    return (
        <>
            <div className="full-block right telepad1">
                <h1><a href="#telepad" id="telepad">Telepad</a></h1>
                <p>With the telepad you can teleport to different other telepads aacross the worlds of the server.</p>
                <p>The Telepad is an multi block structure of 3x3 with an beacon in the middel.</p><br />
                <h3>Cosmetic</h3>
                <p>You can change the name with minimessage support and you can also change the block appering in the /pad and destination interface.</p><br />
                <h3>Permissions</h3>
                <ul>
                    <li>Give player permissions to the telepad.</li>
                    <li>Manage those permissions in an interface found inside the telepad.</li>
                </ul><br />
                <h3>Teleport</h3>
                <ul>
                    <li>Inside the Telepads interface you can manage the destination where to get teleported if you walk over the beacon.</li>
                    <li>If the Telepad is on Level two or higher you can teleport there via /pad</li>
                </ul><br />
                <h3>Level</h3><br />
                <h5>Level: 2</h5>
                <ul>
                    <li>Telepad can be set public</li>
                    <li>Telepad is visible in /pad</li>
                </ul><br />
                <h3>Obtaining</h3>
                <p>The telepad can be obtained via a crafting recepie whioch need:</p>
                <ul>
                    <li>1x Diamond block</li>
                    <li>1x Ender eye</li>
                    <li>3x Obsidian</li>
                    <li>4x Glass</li>
                    <li style={{ listStyleType: "none" }}><img src={TelepadCrafting} alt="Telepad crafting" /></li>
                </ul>
                <br />

                <div className="gallery">
                    <img src={TelepadGui1} alt="Telepad gui1" />
                </div>

            </div>
        </>
    )
};

export default Endless