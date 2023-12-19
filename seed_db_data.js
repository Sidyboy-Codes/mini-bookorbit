// this is our seeding data (initial data for our dynamodb table)
const books = [
    {
      
        "isbn": "9781982181284",
        "title": "Elon Musk",
        "author": "Walter Isaacson",
        "desc_header": "#1 New York Times bestseller From the author of Steve Jobs and other bestselling biographies, this is the astonishingly intimate story of the most fascinating and controversial innovator of our era--a rule-breaking visionary who helped to lead the world into the era of electric vehicles, private space exploration, and artificial intelligence. Oh, and took over Twitter.",
        "description": "When Elon Musk was a kid in South Africa, he was regularly beaten by bullies. One day a group pushed him down some concrete steps and kicked him until his face was a swollen ball of flesh. He was in the hospital for a week. But the physical scars were minor compared to the emotional ones inflicted by his father, an engineer, rogue, and charismatic fantasist. His father's impact on his psyche would linger. He developed into a tough yet vulnerable man-child, prone to abrupt Jekyll-and-Hyde mood swings, with an exceedingly high tolerance for risk, a craving for drama, an epic sense of mission, and a maniacal intensity that was callous and at times destructive. At the beginning of 2022--after a year marked by SpaceX launching thirty-one rockets into orbit, Tesla selling a million cars, and him becoming the richest man on earth--Musk spoke ruefully about his compulsion to stir up dramas. \"I need to shift my mindset away from being in crisis mode, which it has been for about fourteen years now, or arguably most of my life,\" he said. It was a wistful comment, not a New Year's resolution. Even as he said it, he was secretly buying up shares of Twitter, the world's ultimate playground. Over the years, whenever he was in a dark place, his mind went back to being bullied on the playground. Now he had the chance to own the playground. For two years, Isaacson shadowed Musk, attended his meetings, walked his factories with him, and spent hours interviewing him, his family, friends, coworkers, and adversaries. The result is the revealing inside story, filled with amazing tales of triumphs and turmoil, that addresses the question: are the demons that drive Musk also what it takes to drive innovation and progress?",
        "published": "September 2023",
        "publisher": "Simon & Schuster",
        "pages": "688",
        "price": 2599
      },
      {
      
        "isbn": "9781646221950",
        "title": "The Berry Pickers: A Novel",
        "author": "Amanda Peters",
        "desc_header": "A four-year-old girl goes missing from the blueberry fields of Maine, sparking a tragic mystery that remains unsolved for nearly fifty years.",
        "description": "July 1962. A Mi'kmaq family from Nova Scotia arrives in Maine to pick blueberries for the summer. Weeks later, four-year-old Ruthie, the family's youngest child, vanishes. She is last seen by her six-year-old brother, Joe, sitting on a favorite rock at the edge of a berry field. Joe will remain distraught by his sister's disappearance for years to come. In Maine, a young girl named Norma grows up as the only child of an affluent family. Her father is emotionally distant, her mother frustratingly overprotective. Norma is often troubled by recurring dreams and visions that seem more like memories than imagination. As she grows older, Norma slowly comes to realize there is something her parents aren't telling her. Unwilling to abandon her intuition, she will spend decades trying to uncover this family secret. For readers of The Vanishing Half and Woman of Light, this showstopping debut by a vibrant new voice in fiction is a riveting novel about the search for truth, the shadow of trauma, and the persistence of love across time.",
        "published": "October 2023",
        "publisher": "Catapult",
        "pages": "320",
        "price": 2198
      },
      {
        
        "isbn": "9780385548953",
        "title": "The Exchange: After the Firm",
        "author": "John Grisham",
        "desc_header": "#1 NEW YORK TIMES BESTSELLER - John Grisham delivers high-flying international suspense in a stunning new legal thriller that marks the return of Mitch McDeere, the brilliant hero of The Firm.",
        "description": "What became of Mitch and Abby McDeere after they exposed the crimes of Memphis law firm Bendini, Lambert & Locke and fled the country? The answer is in The Exchange, the riveting sequel to The Firm, the blockbuster thriller that launched the career of America's favorite storyteller. It is now fifteen years later, and Mitch and Abby are living in Manhattan, where Mitch is a partner at the largest law firm in the world. When a mentor in Rome asks him for a favor that will take him far from home, Mitch finds himself at the center of a sinister plot that has worldwide implications--and once again endangers his colleagues, friends, and family. Mitch has become a master at staying one step ahead of his adversaries, but this time there's nowhere to hide.",
        "published": "October 2023",
        "publisher": "Doubleday Books",
        "pages": "352",
        "price": 2389
      },
      {
      
        "isbn": "9780063228252",
        "title": "The Subtle Art of Not Giving a F*ck Journal",
        "author": "Mark Manson",
        "desc_header": "From New York Times bestseller author Mark Manson, comes an irreverent, interactive journal based on the internationally bestselling phenomenon The Subtle Art of Not Giving A F*ck and the New York Times bestseller Everything is F*cked, providing questions and sharp insights in his inimitable voice. In classic Mark Manson style, this journal isn't a \"once a day\" or \"once a week\" thing. You can use it any time. Or not. Leave it and come back. Or not.",
        "description": "The Subtle Art of Not Giving a F*ck Journal is divided into five sections that mirror the themes of The Subtle Art of Not Giving A F*ck and include guided prompts that help you consider the deepest questions around emotions, values and purpose. Manson's wisdom is complimented with exercises to make you laugh, think, and grow, and his in-your-face attitude is only matched by his sincerity in wanting you to really wrestle with yourself and the things that matter. When it comes to the big topics--things like happiness, values, and responsibility--life is punctuated by seemingly endless questions. Manson addresses these issues with his unique irreverence, offering insights and observations to help you find your own answers. The Subtle Art of Not Giving a F*ck Journal provides ample space for contemplating life's ups and downs and guides you to see how key moments in your life--both the tragic and the comic--are opportunities for growth (and sometimes just a good laugh). The Subtle Art of Not Giving a F*ck Journal is illustrated with color images throughout.",
        "published": "May 2022",
        "publisher": "Harper Paperbacks",
        "pages": "192",
        "price": 1483
      },
      {
      
        "isbn": "9780446677455",
        "title": "Rich Dad, Poor Dad",
        "author": "Robert T. Kiyosaki",
        "desc_header": "Robert Kiyosaki reveals how he developed his unique economic perspective from his two fathers.",
        "description": "His real father, who was highly educated but fiscally poor; and the father of his best friend - an eighth-grade drop-out who became a self-made multi-millionaire. The lifelong monetary problems experienced by his poor dad pounded home the counterpoint communicated by his rich dad. Taking that message to heart, Kiyosaki was able to retire at the age of 47. This book lays out his philosophy and aims to open readers eyes by: exploding the myth that you need to earn a high income to be rich; challenging the belief that your house is an asset; showing parents why they can't rely on schools to teach their children about money; defining once and for all an asset versus a liability; and explaining what to teach your children about money for their future financial success.",
        "published": "April 2000",
        "publisher": "Warner Books (NY)",
        "pages": "272",
        "price": 579
      },
      {
      
        "isbn": "9780735211292",
        "title": "Atomic Habits",
        "author": "James Clear",
        "desc_header": "The #1 New York Times bestseller. Over 10 million copies sold! Tiny Changes, Remarkable Results.",
        "description": "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights. Clear is known for his ability to distill complex topics into simple behaviors that can be easily applied to daily life and work. Here, he draws on the most proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible. Along the way, readers will be inspired and entertained with true stories from Olympic gold medalists, award-winning artists, business leaders, life-saving physicians, and star comedians who have used the science of small habits to master their craft and vault to the top of their field.",
        "published": "October 2018",
        "publisher": "Avery Publishing Group",
        "pages": "320",
        "price": 1799
      },
      {
        
        "isbn": "9780140280197",
        "title": "The 48 Laws of Power",
        "author": "Robert Greene",
        "desc_header": "Amoral, cunning, ruthless, and instructive, this multi-million-copy New York Times bestseller is the definitive manual for anyone interested in gaining, observing, or defending against ultimate control - from the author of The Laws of Human Nature.",
        "description": "In the book that People magazine proclaimed \"beguiling\" and \"fascinating,\" Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential laws by drawing from the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz and also from the lives of figures ranging from Henry Kissinger to P.T. Barnum. Some laws teach the need for prudence (\"Law 1: Never Outshine the Master\"), others teach the value of confidence (\"Law 28: Enter Action with Boldness\"), and many recommend absolute self-preservation (\"Law 15: Crush Your Enemy Totally\"). Every law, though, has one thing in common: an interest in total domination. In a bold and arresting two-color package, The 48 Laws of Power is ideal whether your aim is conquest, self-defense, or simply to understand the rules of the game.",
        "published": "September 2000",
        "publisher": "Penguin Books",
        "pages": "496",
        "price": 1359
      },
      {
      
        "isbn": "9781683646686",
        "title": "No Bad Parts",
        "author": "Richard Schwartz, Ph.D. and Richard Schwartz",
        "desc_header": "Discover an empowering new way of understanding your multifaceted mind--and healing the many parts that make you who you are.",
        "description": "Is there just one \"you\"? We've been taught to believe we have a single identity, and to feel fear or shame when we can't control the inner voices that don't match the ideal of who we think we should be. Yet Dr. Richard Schwartz's research now challenges this \"mono-mind\" theory. \"All of us are born with many sub-minds--or parts,\" says Dr. Schwartz. \"These parts are not imaginary or symbolic. They are individuals who exist as an internal family within us--and the key to health and happiness is to honor, understand, and love every part.\" Dr. Schwartz's Internal Family Systems (IFS) model has been transforming psychology for decades. With No Bad Parts, you'll learn why IFS has been so effective in areas such as trauma recovery, addiction therapy, and depression treatment--and how this new understanding of consciousness has the potential to radically change our lives.",
        "published": "July 2021",
        "publisher": "Sounds True",
        "pages": "216",
        "price": 1712
      },
  
      {
      
        "isbn": "9780451524935",
        "title": "1984",
        "author": "George Orwell",
        "desc_header": "Written more than 70 years ago, 1984 was George Orwell's chilling prophecy about the future. And while 1984 has come and gone, his dystopian vision of a government that will do anything to control the narrative is timelier than ever... - Nominated as one of America's best-loved novels by PBS's The Great American Read ",
        "description": "\"The Party told you to reject the evidence of your eyes and ears. It was their final, most essential command.\" Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can't escape the fact that Big Brother is always watching... A startling and haunting novel, 1984 creates an imaginary world that is completely convincing from start to finish. No one can deny the novel's hold on the imaginations of whole generations, or the power of its admonitions--a power that seems to grow, not lessen, with the passage of time.",
        "published": "June 1949",
        "publisher": "Secker & Warburg",
        "pages": "328",
        "price": 1899
      },
      {
        
        "isbn": "9780590353427",
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "desc_header": "The enchanting start to the beloved series about a young wizard's journey.",
        "description": "Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility.All he knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley - a great big swollen spoiled bully. Harry's room is a tiny closet at the foot of the stairs, and he hasn't had a birthday party in eleven years.But all that is about to change when a mysterious letter arrives by owl messenger: a letter with an invitation to an incredible place that Harry - and anyone who reads about him - will find unforgettable.For it's there that he finds not only friends, aerial sports, and magic in everything from classes to meals, but a great destiny that's been waiting for him... if Harry can survive the encounter.",
        "published": "September 1998",
        "publisher": "Scholastic",
        "pages": "309",
        "price": 2499
      },
      {
        
        "isbn": "9780735223134",
        "title": "You Are a Badass at Making Money: Master the Mindset of Wealth",
        "author": "Jen Sincero",
        "desc_header": "\"A cheerful manifesto on removing obstacles between yourself and the income of your dreams.\" --New York Magazine From the #1 New York Times bestselling author of You Are a Badass(R), a life-changing guide to making the kind of money you've only ever dreamed of--an excellent holiday gift",
        "description": "You Are a Badass at Making Money will launch you past the fears and stumbling blocks that have kept financial success beyond your reach. Drawing on her own transformation--over just a few years--from a woman living in a converted garage with tumbleweeds blowing through her bank account to a woman who travels the world in style, Jen Sincero channels the inimitable sass and practicality that made You Are a Badass an indomitable bestseller. She combines hilarious personal essays with bite-size, aha concepts that unlock earning potential and get real results. Learn to: - Uncover what's holding you back from making money.",
        "published": "April 2018",
        "publisher": "Penguin Life",
        "pages": "288",
        "price": 629
      },
      {
        
        "isbn": "9781668016138",
        "title": "Holly",
        "author": "Stephen King",
        "desc_header": "A New York Times Notable Book Holly Gibney, one of Stephen King's most compelling and ingeniously resourceful characters, returns in this thrilling novel to solve the gruesome truth behind multiple disappearances in a midwestern town. ",
        "description": "\"Sometimes the universe throws you a rope.\" --BILL HODGES Stephen King's Holly marks the triumphant return of beloved King character Holly Gibney. Readers have witnessed Holly's gradual transformation from a shy (but also brave and ethical) recluse in Mr. Mercedes to Bill Hodges's partner in Finders Keepers to a full-fledged, smart, and occasionally tough private detective in The Outsider. In King's new novel, Holly is on her own, and up against a pair of unimaginably depraved and brilliantly disguised adversaries. When Penny Dahl calls the Finders Keepers detective agency hoping for help locating her missing daughter, Holly is reluctant to accept the case. Her partner, Pete, has Covid. Her (very complicated) mother has just died. And Holly is meant to be on leave. But something in Penny Dahl's desperate voice makes it impossible for Holly to turn her down. Mere blocks from where Bonnie Dahl disappeared live Professors Rodney and Emily Harris. They are the picture of bourgeois respectability: married octogenarians, devoted to each other, and semi-retired lifelong academics. But they are harboring an unholy secret in the basement of their well-kept, book-lined home, one that may be related to Bonnie's disappearance. And it will prove nearly impossible to discover what they are up to: they are savvy, they are patient, and they are ruthless. Holly must summon all her formidable talents to outthink and outmaneuver the shockingly twisted professors in this chilling new masterwork from Stephen King. \"I could never let Holly Gibney go. She was supposed to be a walk-on character in Mr. Mercedes and she just kind of stole the book and stole my heart. Holly is all her.\" --STEPHEN KING",
        "published": "September 2023",
        "publisher": "Scribner Book Company",
        "pages": "464",
        "price": 2392
      }
]

export default books;