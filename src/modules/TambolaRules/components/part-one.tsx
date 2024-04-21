import styles from '@/modules/TambolaRules/components/part.module.css'

export function PartOne() {
    return (

        <div >
            <div className={styles.steps}>
                <div className={styles.section_text}>
                    <div className={styles.step_num} aria-hidden="true">1</div>
                    <div className={styles.step_desc}>
                        <b aria-hidden="true">Decide on the winning point for the game.</b> The winning point of the game is the rule that determines how a player can win. The caller will let everyone know before playing the game what the winning point is. 
                        It is vital to understand the winning combinations on Tambola tickets. Let’s get started:
                    </div>
                </div>
                <ul className={`${styles.step_ul}`}>
                    <li><b>Full house</b>: The ticket that is the first to have all the 15 numbers strike off wins the full house.</li>
                    <li><b>Early Five</b>: The ticket that has the first 5 numbers strike off wins this claim.</li>
                    <li><b>Four Corners</b>: The four corners are 1st and last numbers of top and bottom rows. The ticket that becomes the first one to have all the four corners strike off wins this claim.</li>
                    <li><b>Top Line</b>: The ticket that has all the 5 numbers of the top horizontal line strike off wins this claim.</li>
                    <li><b>Middle Line</b>: The ticket that has all the 5 numbers of the middle horizontal line strike off wins this claim.</li>
                    <li><b>Bottom Line</b>: The ticket that has all the 5 numbers of the bottom horizontal line strike off wins this claim.</li>
                    <li><b>Laddu</b>: The ticket that has third number of middle horizontal line strike off wins this claim.</li>
                    <li><b>Unlucky One</b>: The ticket that is the last in striking his or her first number wins this claim.</li>
                </ul>
            </div>

            <div className={styles.steps}>
                <div className={styles.section_text}>
                    <div className={styles.step_num} aria-hidden="true">2</div>
                    <div className={styles.step_desc}>
                        <b aria-hidden="true">Designate a tambola caller.</b> Choose a person who is confident and can speak loudly and clearly. They will be responsible for drawing out the numbers and calling them to the audience.
                    </div>
                </div>
                <ul className={`${styles.step_ul}`}>
                    <li>This person will also be responsible for verifying any potential winning tickets to make sure that the numbers are correct.</li>
                    <li>The caller doesn’t have to be the caller for all of the rounds. If you are playing multiple rounds of tambola, pick a different caller for each round so that everyone have have a turn to play.</li>
                </ul>
            </div>

            <div className={styles.steps}>
                <div className={styles.section_text}>
                    <div className={styles.step_num} aria-hidden="true">3</div>
                    <div className={styles.step_desc}>
                        <b aria-hidden="true">Give each player a tambola ticket, and a pen or a pencil.</b> Each player will need a new ticket for each round. If you are playing informally with family or friends, hand a ticket out to each person. If you are playing a commercial game, each player will purchase their own ticket before the game begins.
                    </div>
                </div>
                <ul className={`${styles.step_ul}`}>
                    <li>Tambola tickets have 3 horizontal rows and 9 vertical columns, which makes 27 boxes in total. There are 5 numbers in each horizontal row, with the remaining 4 boxes randomly blocked out. The first column has numbers from 1-9, the second from 10-19, and so on, up to the number 90.
                    </li>
                    <li>You can purchase tambola tickets online, or you can make your own using a random number generator.</li>
                    <li>Make sure that each person has a pen or pencil before the game begins so that they can cross off the numbers as they are called.
                    </li>
                </ul>
            </div>

            <div className={styles.steps}>
                <div className={styles.section_text}>
                    <div className={styles.step_num} aria-hidden="true">4</div>
                    <div className={styles.step_desc}>
                        <b aria-hidden="true">Set up the box or container that holds the numbers.</b> Place all of the numbers from 1-90 into the container. Make sure that the sides of the box aren’t transparent so that the caller can’t see what number they are drawing. Fit the lid to the box so that the caller can shake the box before calling each number.
                    </div>
                </div>
                <ul className={`${styles.step_ul}`}>
                    <li>If you are playing at a big, commercial game, there will usually be a machine that will draw the numbers for the caller.
                    </li></ul>
            </div>

        </div>

    );
}