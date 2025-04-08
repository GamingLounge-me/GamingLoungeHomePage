import { FunctionComponent } from "react";
import { Block, BlockHolder } from "../../../../../components/block";

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
                        <tr>
                            <td>Round</td>
                            <td>Zombies</td>
                            <td>Boss</td>
                            <td>Perks</td>
                            <td>corner</td>
                            <td>Other</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td></td>
                            <td>UFO is opening,<br />zombies from above.</td>
                            <td></td>
                            <td></td>
                            <td>You can start,<br /> open doors</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td></td>
                            <td>Gold Armor Giant</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Slimes</td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td></td>
                            <td>Iron Armor Giant</td>
                            <td>
                                <p>Fast revive</p>
                                <p>Quickfire</p>
                                <p>Extra Healtd 3</p>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>Slimes</td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td></td>
                            <td>Mega Blob</td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>Slimes</td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>Slimes</td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td></td>
                            <td>Diamond Armor Giant</td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td>Slimes</td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td>Slimes</td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>Slimes</td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>35</td>
                            <td></td>
                            <td>Mega Magma</td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>37</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>38</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>39</td>
                            <td>Slimes</td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>40</td>
                            <td></td>
                            <td>tde Old One</td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>41</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>42</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>43</td>
                            <td>Slimes</td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>44</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>45</td>
                            <td></td>
                            <td>2</td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>46</td>
                            <td></td>
                            <td>1</td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>47</td>
                            <td>Slimes</td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>48</td>
                            <td></td>
                            <td>1</td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>49</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>50</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>51</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>52</td>
                            <td>Slimes</td>
                            <td></td>
                            <td></td>
                            <td>lucky chest</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>53</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ferris wheel,<br />back corner</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>54</td>
                            <td></td>
                            <td>Rainbow Giant + 2</td>
                            <td></td>
                            <td>Ferris wheel,<br />back corner</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>55</td>
                            <td></td>
                            <td>Frozen bullets</td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td>2/4 player need,<br />Diamond Chestplate</td>
                        </tr>
                        <tr>
                            <td>56</td>
                            <td></td>
                            <td>Mega Blob</td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>57</td>
                            <td></td>
                            <td>Mega Magma</td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>58</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ferris wheel,<br />back corner</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>59</td>
                            <td></td>
                            <td>13</td>
                            <td></td>
                            <td>Ferris wheel,<br />back corner</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>60</td>
                            <td>80 Baby Space Shooters</td>
                            <td>10</td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>61</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>62</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>63</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>64</td>
                            <td></td>
                            <td>Frozen bullets</td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>65</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>66</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>67</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>68</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>69</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>70</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>71</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>72</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>73</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>74</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>75</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>76</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>77</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>78</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>79</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>80</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>81</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>82</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>83</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>84</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>85</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>86</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>87</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>88</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>89</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>90</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>91</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>92</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>93</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>94</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>95</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>96</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>97</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>98</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>99</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>100</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>101</td>
                            <td></td>
                            <td>World Ender</td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>102</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>103</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>104</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>105</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Ultimate maschine</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </Block>
        </BlockHolder>
    );
};

export default AlienArcadiumPage;

