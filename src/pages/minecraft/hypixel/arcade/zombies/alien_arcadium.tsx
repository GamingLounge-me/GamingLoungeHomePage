import { FunctionComponent } from "react";
import { Block, BlockHolder } from "../../../../../components/block";

type tRow = {
    round: number,
    zombies: string,
    boss: string,
    perks: string[],
    corner: string,
    other: string,
};

const genTableData: () => tRow[] = () => {
    let arr = new Array(105 + 1).fill({
        round: 0,
        zombies: "",
        boss: "",
        perks: [],
        corner: "",
        other: "",
    } as tRow) as tRow[];

    arr = arr.map((value, idx) => ({...value, round: idx}));

    [ 18, 23, 26, 29, 31, 33, 34, 39, 43, 47, 52 ].forEach(n => arr[n].zombies = "Slimes");
    arr[60].zombies = "80 Baby Space Shooters";

    arr[10].boss = "UFO is opening, zombies from above";
    arr[15].boss = "Gold Armor Giant";
    arr[20].boss = "Iron Armor Giant";
    arr[25].boss = "Mega Blob";
    arr[30].boss = "Diamond Armor Giant";
    arr[35].boss = "Mega Magma";
    arr[40].boss = "the Old One";
    arr[45].boss = "2";
    arr[46].boss = "1";
    arr[48].boss = "1";
    arr[54].boss = "Rainbow Giant + 2";
    arr[55].boss = "Frozen bullets";
    arr[56].boss = "Mega Blob";
    arr[57].boss = "Mega Magma";
    arr[59].boss = "13";
    arr[60].boss = "10";
    arr[64].boss = "Frozen bullets";
    arr[101].boss = "World Ender";

    arr[20].perks = ["Fast revive", "Quickfire", "Extra Health 3"];

    const lc = "lucky chest";
    const um = "Ultimate maschine";
    const fwc = "Ferris wheel, back corner";
    arr.map(v => v.round).filter(r => r >= 25).forEach(r => arr[r].corner = lc);
    arr.map(v => v.round).filter(r => r >= 50).forEach(r => arr[r].corner = um);
    [ 18, 23, 52 ].forEach(r => arr[r].corner = lc);
    [ 53, 54, 58, 59 ].forEach(r => arr[r].corner = fwc);

    arr[10].other = "You can start, open doors";
    arr[55].other = "2/4 player need, Diamond Chestplate";

    return arr.filter((_, idx) => idx != 0);
};

const table = genTableData();


const AlienArcadiumPage: FunctionComponent = () => {
    return (
        <BlockHolder>
            <Block title="Playstyle">
                <div>
                    <h4 className="text-xl">Lucky Chest</h4>
                    <p>Only open Lucky Chests during Shoping Spree</p>
                    <p>Shping Spree spawn every 10 rounds.</p>
                </div>
                <div>
                    <h4 className="text-xl">Eco-Rounds</h4>
                    <p>Everyone sneek in an corner (lucky chest or upgrade machine for example) and wait for slimes to grow, while waiting block with the sword.</p>
                    <p>This could be also usefull at some otder rounds witd many zombies.</p>
                </div>
                <div>
                    <h4 className="text-xl">Reviving</h4>
                    <p>After being revived you need to press shift again, if you dont you wont revive anyone.</p>
                </div>
                <div>
                    <h4 className="text-xl">Boosts</h4>
                    <p>insta kill -&gt;  Don't take it.</p>
                </div>
            </Block>

            <Block title="Loadout">
                <div>
                    <h4 className="text-xl">Round 1-49</h4>
                    <ul className="list-disc pl-4">
                        <li>Sword</li>
                        <li>Pistol</li>
                        <li>Shotgun</li>
                        <li>
                            One of the following:
                            <ul className="list-disc pl-4">
                                <li>Double Barrel Shotgun</li>
                                <li>Rainbow Rifel</li>
                                <li>Zombie Zapper</li>
                            </ul>
                        </li>
                        <li>Lighting rod skill</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl">Round 50+</h4>
                    <ul className="list-disc pl-4">
                        <li>Sword</li>
                        <li>Rainbow Rifel</li>
                        <li>Zombie Zapper</li>
                        <li>Double Barrel Shotgun</li>
                        <li>Lighting rod skill</li>
                    </ul>
                </div>
            </Block>

            <Block title="Perks">
                <div>
                    <ul className="list-disc pl-4">
                        <li>Fast revive</li>
                        <li>Quickfire</li>
                        <li>Extra health</li>
                    </ul>
                </div>
            </Block>

            <Block title="Explanations for table">
                <div>
                    <ul className="list-disc pl-4">
                        <li>Zombies: Slimes -&gt;  Wait 35 secounds in an corner with all players crouching and blocking with sword so the slimes grow and have more hp to get more money.</li>
                        <li>
                            <p>Perks: Frozen bullets -&gt;  1 Person with Rainbow rifle, replace quickfire with frozen bullets, shoot spread out to freeze zombies.</p>
                            <p>-&gt; After the round Frozen bullets can be replaced again.</p>
                        </li>
                    </ul>
                </div>
            </Block>

            <Block title="Table">
                <table>
                    <thead>
                        <tr className="sticky top-20 bg-base-100">
                            <td>Round</td>
                            <td>Zombies</td>
                            <td>Boss</td>
                            <td>Perks</td>
                            <td>corner</td>
                            <td>Other</td>
                        </tr>
                    </thead>
                    <tbody>
                    { table.map((e, idx) => (<tr key={idx} className={idx % 2 > 0 ? "bg-base-100" : "bg-base-300"}>
                            <td>{e.round}</td>
                            <td>{e.zombies}</td>
                            <td>{e.boss}</td>
                            <td>
                                 {e.perks.length > 0 && (<ul className="pl-4 list-disc">
                                    { e.perks.map((perk, idx) => (<li key={idx}>{perk}</li>)) }
                                </ul>) }
                            </td>
                            <td>{e.corner}</td>
                            <td>{e.other}</td>
                        </tr>)) }
                    </tbody>
                </table>
            </Block>
        </BlockHolder>
    );
};

export default AlienArcadiumPage;

