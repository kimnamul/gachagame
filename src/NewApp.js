import './NewApp.css';
import { useState } from 'react';
import Gacha from './gacha.js';

function NewApp() {
    // 보유 재화
    const [gold, setGold] = useState(0);
    const [maxgold, setMaxGold] = useState(1000);
    
    const [gem, setGem] = useState(0);
    const [maxgem, setMaxGem] = useState(99999);
    
    // 재화 변동
    const EarnGold = (amount) => {
        setGold(Math.min(gold + amount, maxgold));
    }
    const PayGold = (amount) => {
        if(gold < amount) {
            
        }
        else {
            setGold(gold - amount);
        }
    }
    const UpgradeMaxGold = (amount) => {
        setMaxGold(maxgold + amount);
    }
    // 특정 수집품을 보유한다는 사실이 maxgold를 증가시켜줘야 자연스러움.
    // 현재는 특정 시점에 증가하는데, 수집품을 얻거나 레벨업 하는 시점에 증가하는건 뭔가뭔가임...

    const debug_clicker_rate = 100; //디버그용 클리커 배율
    const [goldclicker, setGoldClicker] = useState(1);
    

    return (
        <div>
            <header>
                this is header
            </header>

            <main>
                this is main
                <div className="clicker">
                    Here to be Clicker!
                    <br></br>
                    <button className="gold_earn_button" onClick={() => EarnGold(goldclicker * debug_clicker_rate)}>
                        I Earn Gold
                    </button>
                    <br></br>
                    <button className="gold_burn_button" onClick={() => PayGold(1)}>
                        I Burn Gold
                    </button>
                    <br></br>
                    I have {gold} gold.
                </div>
            </main>

            <section>
                this is section
            </section>

            <aside>
                this is sidebar
            </aside>

            <footer>
                this is footer
            </footer>
        </div>
    )
}

export default NewApp;