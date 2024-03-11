import React, { useState, useEffect } from 'react';
import './statistics.css';

function Statistics() {
    const [statistics, setStatistics] = useState({
        poundsOfFoodRescued: 14738,
        nonProfitPartners: 38,
        moneyDonated: 7549,
        donationPickups: 64
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newStatistics = { ...statistics };

            // 40% chance to keep the same statistics
            if (Math.random() < 0.4) {
                setStatistics(newStatistics);
                return;
            }

            // Otherwise, generate random increments for each statistic
            newStatistics.poundsOfFoodRescued += getRandomIncrement();
            newStatistics.nonProfitPartners += getRandomIncrement();
            newStatistics.moneyDonated += getRandomIncrement();
            newStatistics.donationPickups += getRandomIncrement();

            setStatistics(newStatistics);
        }, 30000); // Refresh every 5 seconds

        return () => clearInterval(intervalId);
    }, [statistics]); // Depend on 'statistics' to avoid memory leaks

    const getRandomIncrement = () => {
        // Generate a random number between 1 and 10 for the increment
        return Math.floor(Math.random() * 10) + 1;
    };

    return (
        <div className='Statistics-background-container'>
            <h1 className='FourthH1'>Statistics</h1>
            <div className='Statistics-box'>
                <p className='P1'>All Statistics are updated every 30 seconds</p>
                <p className='P2'>Thank you every each and one of you for helping us achieve this incredible goal!</p>
                <div className='Stats-flexbox'>
                    <div className='Box'>
                         {statistics.poundsOfFoodRescued}
                    </div>
                    <div className='Box'>
                         {statistics.nonProfitPartners}
                    </div>
                    <div className='Box'>
                         {statistics.moneyDonated}
                    </div>
                    <div className='Box'>
                         {statistics.donationPickups}
                    </div>
                </div>
                <div className='Text-box'>
                    <p className='P3'>Pounds Of Money <br/> Rescued</p>
                    <p className='P3'>Non-Profit <br/> Partners</p>
                    <p className='P3'>Money <br/> Donated</p>
                    <p className='P3'>Donation <br/> Pick-Ups</p>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
