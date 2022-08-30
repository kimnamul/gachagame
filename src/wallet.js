import { useState } from 'react';

function Wallet() {
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

}

export default Wallet;