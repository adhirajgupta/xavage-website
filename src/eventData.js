import dealNoDealImage from './screens/EventPage/Deal.png';
import moreTheMoneyImage from './screens/EventPage/MoreMoney.png';
import readySetSellImage from './screens/EventPage/Ready.png';
import trojansTankImage from './screens/EventPage/Trojan.png';
import theCourtingImage from './screens/EventPage/Courting.png';
import conquerTheCrisisImage from './screens/EventPage/Conquer.png';
import stakeholdersShowdownImage from './screens/EventPage/Stakeholder.png';

const eventData = [
  {
    id: 1,
    title: "Deal or No Deal",
    tagline: "Outbid, Outplay and Outshine",
    description: "Teamwork makes the dream work! Get ready for TISB's Champions League auction, where you’ll draft top players within your budget. With high stakes, strategy is key. Build the ultimate team, outsmart rivals, and aim for victory. Play smart, lead your squad, and rise to the top. The championship is yours for the taking!",
    maximum_teams: "24",
    participants_per_team: "3-4 participants per team",
    rules: "Round 1 - 24 teams act as club scouts, using only fbref.com and Transfermarket to analyse stats and find the best player within 20 minutes, with the top team from each pool advancing to the next round. For round 1 each team has to bring 1-2 laptops. Round 2 - 8 teams use a fixed budget to build an 11-player squad in an auction, focusing on player chemistry and adhering to their manager's fixed style, with surprises along the way, as points carry over to the final round and the top 5 teams' advance. Round 3 - 5 teams face a high-stakes, surprise challenge, with the details kept secret until the round begins, ensuring an exciting and unpredictable finale for the top contenders.",
    judging_criteria: "",
    bgimage: dealNoDealImage,
  },
  {
    id: 2,
    title: "The More the Money",
    tagline: "High stakes, high rewards",
    description: "Get ready for an exciting and challenging quiz event where knowledge from four diverse categories—current affairs, economics, finance, and history—will be put to the test. Teams will compete through multiple rounds, each with a unique format, designed to push their knowledge, quick thinking, and strategy to the limit. With high stakes and a competitive edge, the best teams will rise through the ranks to claim victory!",
    maximum_teams: "24",
    participants_per_team: "3-4 participants per team",
    rules: "Round 1– Buzzer Showdown: A fast-paced, round targetting the 4 categories. Teams must be quick to buzz in and answer. Correct answers score points, while wrong answers result in penalties or give opponents a chance to steal. Round 2– Jeopardy Strategy: Teams tackle a Jeopardy-style game, picking questions from a grid. Each question has a different difficulty level and point value, challenging teams to balance risk and reward over 90 minutes. Round 3– Battleship Duel: Teams answer questions to fire shots at their opponents' virtual battleship grids. Correct answers bring them closer to sinking the opponent's fleet, adding an exciting twist of strategy and skill. With a mix of speed, strategy, and teamwork, this event promises an intense and engaging competition.",
    judging_criteria: "",
    bgimage: moreTheMoneyImage,
  },
  {
    id: 3,
    title: "Ready? Set? Sell!",
    tagline: "From Mind to Media, Lead the Idea!",
    description: "Get ready to ignite your creativity and showcase your team’s marketing prowess at Ready? Set? Sell! This is the ultimate arena where strategy meets innovation. Compete in thrilling rounds that challenge your team’s advertising skills, push boundaries, and let your team’s ideas shine. The spotlight is yours - is your team ready to sell?",
    maximum_teams: "12",
    participants_per_team: "3-4 participants per team",
    rules: "Round 1- Select an object from mystery boxes and craft a compelling ad within an hour, showcasing your unique marketing flair. Present your masterpiece and impress the judges with your innovative approach. Round 2- The top 6 teams face a thrilling twist as they pair unlikely brand ambassadors with brands. Create a standout pitch that redefines the narrative and turns controversy into opportunity.",
    judging_criteria: "Teams will be judged in Round 1 on creativity, production value, concept, and clarity of their video advertising campaign, with each aspect contributing to a total of 20 marks. In Round 2, the focus shifts to how well teams reframe a crisis, present their brand ambassador, design media campaigns, and defend their pitch during the Q&A, also scored out of 20 marks",
    bgimage: readySetSellImage,
  },
  {
    id: 4,
    title: "Trojan's Tank",
    tagline: "Sink or Swim",
    description: "Get ready for Trojan’s Tank, an intense and high-stakes entrepreneurial challenge inspired by Shark Tank. Dive into the world of startups as you pitch your innovative ideas to a panel of expert investors. You’ll have to convince them of your concept’s viability, market potential, and your team's ability to execute.",
    maximum_teams: "Unlimited",
    participants_per_team: "2-4 participants per team",
    rules: "Round 1: Prepare and submit your creative startup ideas beforehand. In this preliminary phase, teams answer key questions covering the why, how, where, and competition details of their business plan. The top 15 teams will be selected for the main event. Round 2: The final 15 teams present their pitches to the panel in a 7-10 minute presentation. Only the most compelling and convincing pitches will rise to the top.",
    judging_criteria: "These teams will be evaluated on their innovation, business strategy, and presentation skills. Get your suits ready, think outside the box, and prepare for a thrilling competition full of surprises. Only the best will impress the panel and claim victory in Trojans Tank!",
    bgimage: trojansTankImage,
  },
  {
    id: 5,
    title: "The Courting",
    tagline: "The ball is in your court",
    description: "In three rounds of fierce debate, you’ll be handed a legal case brief and be tasked to plead a side. The competition is intense, but there are remarkably greater rewards at stake. So, do you think you have what it takes? Well, if you’ve got the analytical thinking skills and the persuasive ability, the ball is in your court and the victors of The Courting are on your team.",
    maximum_teams: "8",
    participants_per_team: "3-4 participants per team",
    rules: "Round 1: All 8 teams receive a legal case brief 24 hours before the event and are assigned to argue either for or against the case. Round 2: The 4 advancing teams face off in the semi-finals with cases presented on the spot. Round 3: The final 2 teams compete in the ultimate showdown to claim victory, while the 3rd and 4th place teams battle for the bronze.",
    judging_criteria: "The teams will be judged based on their debating skills, team unity, knowledge, and presentation skills.",
    bgimage: theCourtingImage,
  },
  {
    id: 6,
    title: "Conquer the Crisis",
    tagline: "Real crises. Real consequences.",
    description: "Conquer The Crisis is an event designed for participants interested in diplomacy and economic policy. It challenges participants to handle crises as finance ministers of assigned countries, requiring them to devise solutions. This event will test presentation and negotiation skills along with theoretical economic knowledge.",
    maximum_teams: "20",
    participants_per_team: "This is an individual event",
    rules: "Round 1 – Individual Crisis Management: Each participant, acting as a finance minister, receives a country portfolio with financial details like funds, spending history, and technical specifics. You’ll have 1 hour to devise and present an economic solution, effectively allocating your budget. Top performers from each pool advance. Round 2 – Negotiations with the IMF: The best performers move on to negotiate with the IMF. Representing countries facing crises like high debt or unemployment, participants must argue for financial aid, justify their requests, and negotiate loan terms while balancing their country’s needs with IMF interests.",
    judging_criteria: "Round 1 scores (40% of final score) will focus on efficacy, feasibility, and presentation skills, while Round 2 (60% of final score) will evaluate negotiation skills. The overall winners will be determined by their cumulative scores.",
    bgimage: conquerTheCrisisImage,
  },
  {
    id: 7,
    title: "Stakeholders' Showdown",
    tagline: "Compete for your rights",
    description: "Join the Stakeholder’s Showdown, where you represent a key faction in a collapsing economy. With limited resources and mounting pressure, you must negotiate, strategize, and advocate to guide your group through financial turmoil. Build alliances, make tough decisions, and fight for stability amidst uncertainty. Your goal? Secure success and survival for your faction in a volatile landscape where every choice impacts the future. Can you lead through the crisis?",
    maximum_teams: "5",
    participants_per_team: "3-4 participants per team",
    rules: "Battle it out and fight for your side with the Stakeholders' Showdown. It kicks off with the Initial Crisis, where teams must tackle a complex crisis, presenting their bold strategies and perspectives. In a battle of ideas, they face sharp rebuttals and showcase their understanding of the situation. As tensions rise, the Crisis Update throws new developments at the teams, forcing them to adapt quickly and rethink their approaches on the fly. The final round, The Showdown, introduces high-stakes strategy and negotiation. Teams have a chance to form alliances, forge deals, and prepare their final stand, battling for dominance in an unpredictable and thrilling SHOWDOWN.",
    judging_criteria: "All the teams will be judged based on their organization and clarity, use of concepts and theories, rebuttal, teamwork and presentation skills.",
    bgimage: stakeholdersShowdownImage,
  },
  // Add other events here
];

export default eventData;
