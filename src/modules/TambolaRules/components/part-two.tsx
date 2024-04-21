import styles from '@/modules/TambolaRules/components/part.module.css'

export function PartTwo() {
    return (

        <div >
            <div className={styles.steps}>
                <div className={styles.section_text}>
                    <div className={styles.step_num} aria-hidden="true">1</div>
                    <div className={styles.step_desc}>
                        <b aria-hidden="true">Draw a number and call it out to the audience if you are the caller.</b>
                        Shake the box containing the numbers, and choose 1 without looking at it. Read the number loudly and clearly to everyone playing, so that they can strike it off their ticket if necessary.
                    </div>
                </div>
                <ul className={`${styles.step_ul}`}>
                    <li>Some experienced callers like to use nicknames for the numbers that they read out to make the game more fun. However, they will always say the actual name for the number too.</li>
                    <li>Some nicknames for the numbers include “Lone ranger” for the number 1, “Colors of the rainbow” for the number 7, and “Valentine’s Day” for the number 14.</li>
                    <li>If you play tambola regularly with family or friends, come up with your own nickname for each number to make the game more interesting.</li>
                </ul>
            </div>

            <div className={styles.steps}>
                <div className={styles.section_text}>
                    <div className={styles.step_num} aria-hidden="true">2</div>
                    <div className={styles.step_desc}>
                        <b aria-hidden="true">Strike the numbers off as they are called if you are playing the game.</b>
                        As the caller reads out each number, check the appropriate column to see if you can strike a number off. If you don’t have the number that has been called out on your ticket, wait for the next number to be called.
                    </div>
                </div>
            </div>

            <div className={styles.steps}>
                <div className={styles.section_text}>
                    <div className={styles.step_num} aria-hidden="true">3</div>
                    <div className={styles.step_desc}>
                        <b aria-hidden="true">Claim for the winning point if you think you have one.</b>
                        Be ready to stand up and shout if you think that you have won the game! Often you can only win the game if you announce that you have won immediately, rather than waiting until after the next number has been called.
                    </div>
                </div>
                <ul className={`${styles.step_ul}`}>
                    <li>If you miss your chance to announce that you have won, you will usually miss out on your entitlement to the prize.</li>
                    <li>More than 1 person may realize that they have the winning point after a number is called. In this case, the first person to announce it goes to the caller to have their ticket verified.</li>
                </ul>
            </div>

            <div className={styles.steps}>
                <div className={styles.section_text}>
                    <div className={styles.step_num} aria-hidden="true">4</div>
                    <div className={styles.step_desc}>
                        <b aria-hidden="true">Verify the winning point if you are the caller.</b>
                        Check the tambola ticket to see if the winning point has been awarded by the last number called. Announce to the group playing if that particular player has won or not.
                    </div>
                </div>
                <ul className={`${styles.step_ul}`}>
                    <li>If the player has won, this often ends the game. However you can decide to keep playing if you want to draw for second and third prizes.</li>
                    <li>If the player doesn’t have a winning point, keep calling numbers and playing the game until someone wins.</li>
                </ul>
            </div>

            <div className={styles.steps}>
                <div className={styles.section_text}>
                    <div className={styles.step_num} aria-hidden="true">5</div>
                    <div className={styles.step_desc}>
                        <b aria-hidden="true">Award the prize to the winner.</b>
                        If there are prizes for the winning ticket or tickets, give these out to the players. The prizes are usually cash.
                    </div>
                </div>
                <ul className={`${styles.step_ul}`}>
                    <li>For an informal game with family or friends, you can be more creative with the prizes. Try a voucher to a local restaurant, a delicious treat, a flower bouquet, or a certificate with the winners name on it.</li>
                </ul>
            </div>

        </div>

    );
}