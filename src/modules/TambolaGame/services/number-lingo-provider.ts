export class NumberLingoProvider{
    private static lingoMessage: Array<string> = [
        "Lone ranger",
        "Kaala dhan",
        "Happy family",
        "Murgi chor",
        "Hum paanch",
        "Bottom heavy",
        "Lucky no. Seven",
        "Big fat lady number 8",
        "You are mine",
        "Dus numbari",
        "ek or ek 11",
        "Mid night",
        "Lucky for some",
        "Valentine’s Day",
        "Yet to be kissed",
        "Sweet sixteen",
        "Dancing Queen",
        "Voting age",
        "Last of the teens",
        "One score",
        "President’s salute",
        "Two little ducks",
        "You and me",
        "Two dozen",
        "Silver Jublee",
        "Republic Day",
        "Gateway to heaven",
        "Duck and its mate",
        "In your prime",
        "Women get flirty at 30",
        "Time for fun",
        "Mouth Full",
        "All the 3s",
        "Dil mange more",
        "Flirty wife",
        "Chatis ka Aankda",
        "Mixed luck",
        "Oversize",
        "Watch your waistline",
        "Naughty 40",
        "Kiss and run",
        "Quit India Movement",
        "Pain in the knee",
        "All the fours",
        "Halfway there",
        "Up to tricks",
        "Year of Independence",
        "Four dozen",
        "Rise and shine",
        "Half a century",
        "Charity begins at 51",
        "Pack of cards",
        "Stuck in a tree",
        "Clean the floor",
        "All the fives",
        "Pick up sticks",
        "Mutiny Year",
        "Time to retire",
        "Just retired",
        "Five dozen",
        "Bakers bun",
        "Click the two",
        "Kisses come free",
        "Hard core",
        "Old age pension",
        "Chakke pe chakka",
        "Made in heaven",
        "Check your weight",
        "Your place or mine",
        "Lucky blind",
        "Bang the drum",
        "Lucky 2",
        "Under the tree",
        "Still want more",
        "Lucky Five",
        "Lucky six",
        "Two hockey sticks",
        "Heaven’s gate",
        "One more time",
        "Gandhi’s breakfast",
        "Corner shot",
        "Last of the two",
        "India wins Cricket World Cup",
        "Last of the chors",
        "Staying alive",
        "Between the sticks",
        "Grandpa",
        "Two fat ladies",
        "All but one",
        "Top of the house blind 90"
    ];
    
    
    static getMessage(num:number):string{
        return NumberLingoProvider.lingoMessage[num-1];
    }
}