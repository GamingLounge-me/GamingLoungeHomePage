import { FunctionComponent } from "react";
import ImgTelepadCrafting from "../../assets/images/telepad-crafting.png";
import ImgTelepadGui from "../../assets/images/telepad-gui1.png";
import ImgTelepadBg from "../../assets/images/telepad.png?url"
import { Block, BlockHolder } from "../../components/block";

const Endless: FunctionComponent = () => {
    return (
        <BlockHolder>
            <Block
                    title="Telepad"
                    section="telepad"
                    position="right"
                    textColor="light"
                    image={ImgTelepadBg} >
                <div>
                    <p>With the telepad you can teleport to different other telepads aacross the worlds of the server.</p>
                    <p>The Telepad is an multi block structure of 3x3 with an beacon in the middel.</p>
                </div>
                <div>
                    <h4 className="text-xl">Cosmetic</h4>
                    <p>You can change the name with minimessage support and you can also change the block appering in the /pad and destination interface.</p>
                </div>
                <div>
                    <h3 className="text-xl">Permissions</h3>
                    <ul className="list-disc pl-4">
                        <li>Give player permissions to the telepad.</li>
                        <li>Manage those permissions in an interface found inside the telepad.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl">Teleport</h3>
                    <ul className="list-disc pl-4">
                        <li>Inside the Telepads interface you can manage the destination where to get teleported if you walk over the beacon.</li>
                        <li>If the Telepad is on Level two or higher you can teleport there via /pad</li>
                    </ul>
                </div>

                <h3 className="text-xl">Level</h3>
                <div>
                    <h4 className="text-lg">Level: 2</h4>
                    <ul className="list-disc pl-4">
                        <li>Telepad can be set public</li>
                        <li>Telepad is visible in /pad</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl">Obtaining</h3>
                    <p>The telepad can be obtained via a crafting recepie which needs:</p>
                    <ul className="list-disc pl-4">
                        <li>1x Diamond block</li>
                        <li>1x Ender eye</li>
                        <li>3x Obsidian</li>
                        <li>4x Glass</li>
                    </ul>
                    <img src={ImgTelepadCrafting} alt="Telepad crafting" />
                </div>
                <div>
                    <img src={ImgTelepadGui} alt="Telepad gui1" />
                </div>

            </Block>
        </BlockHolder>
    );
};

export default Endless;

