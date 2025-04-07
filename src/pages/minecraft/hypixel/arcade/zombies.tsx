import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'
import { Block, BlockHolder } from '../../../../components/block';
import ImgDeadEnd from '../../../../assets/images/hypixel-zombies-dead_end.png?url';
import ImgBadBlood from '../../../../assets/images/hypixel-zombies-bad_blood.png?url';
import ImgAlienArcadium from '../../../../assets/images/hypixel-zombies-alien_arcadium.png?url';
import ImgPrison from '../../../../assets/images/hypixel-zombies-prison.png?url';

const Zombies: FunctionComponent = () => {
    return (
        <BlockHolder>
            <Block
                    section="dead_end"
                    title="Deadend"
                    image={ImgDeadEnd}
                    textColor="light" >
                <div className="py-25" />
            </Block>
            <Block
                    section="bad_blood"
                    title="Bad Blood"
                    image={ImgBadBlood}
                    textColor="light" >
                <div className="py-25" />
            </Block>
            <Block
                    section="alien_arcadium"
                    title="Alien Arcadium"
                    image={ImgAlienArcadium}
                    textColor="light" >
                <div className="py-20" />
                <div className="card-actions justify-end">
                    <Link to="/minecraft/hypixel/arcade/zombies/alien_arcadium/" className="btn">More information</Link>
                </div>
            </Block>
            <Block
                    section="prison"
                    title="Prison"
                    image={ImgPrison}
                    textColor="light" >
                <div className="py-25" />
            </Block>
        </BlockHolder>
    );
};

export default Zombies;

