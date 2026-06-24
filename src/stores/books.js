import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { id } from 'vuetify/locale'

export const useBooksStore = defineStore('books',  {
   state: () => {
      const books = {
    0: {
        id: 1,
        image: "/Book_1.jpg",
        title: "A Court of Thorns and Roses",
        price: 1350,
        description: "A mortal huntress is taken to a magical realm after killing a wolf who was far more than he appeared.",
        author: "Sarah J. Maas",
        long_description: "Feyre Archeron struggles to provide for her impoverished family until a hunting trip changes everything. Forced into the faerie lands of Prythian, she discovers that her captor, Tamlin, is not the monster she expected. As an ancient curse threatens the realm, Feyre must confront deadly trials and make impossible sacrifices to save those she loves.",
        genre: "Fantasy",
        rating: 4.15
    },
    1: {
        id: 2,
        image: "/Book_2.jpg",
        title: "A Court of Mist and Fury",
        price: 1800,
        description: "Feyre rebuilds herself after trauma and discovers a destiny far greater than she imagined.",
        author: "Sarah J. Maas",
        long_description: "Following the horrors she endured Under the Mountain, Feyre struggles with guilt, nightmares, and a future that no longer feels right. Drawn into the enigmatic Night Court and its High Lord, Rhysand, she begins a journey of healing and self-discovery. As a powerful enemy rises, Feyre learns the true extent of her abilities and the strength found in choosing her own path.",
        genre: "Fantasy",
        rating: 4.63
    },
    2: {
        id: 3,
        image: "/Book_3.jpg",
        title: "A Court of Wings and Ruin",
        price: 1250,
        description: "War looms over Prythian as Feyre fights to protect her home and those she loves.",
        author: "Sarah J. Maas",
        long_description: "Returning to the Spring Court as a spy, Feyre works to undermine forces preparing for invasion. Alliances are forged among rival courts while ancient enemies gather unprecedented power. The fate of Prythian hangs in the balance as battles, betrayals, and sacrifices reshape the world forever.",
        genre: "Fantasy",
        rating: 3.71
    },
    3: {
        id: 4,
        image: "/Book_4.jpg",
        title: "A Court of Frost and Starlight",
        price: 1700,
        description: "A quieter story that explores healing and rebuilding after the devastation of war.",
        author: "Sarah J. Maas",
        long_description: "As the Winter Solstice approaches, Feyre, Rhysand, and their friends attempt to recover from the losses they endured. The scars of conflict remain visible across both the land and its people. Through celebrations, reflection, and personal struggles, the characters begin laying the foundations for a new future.",
        genre: "Fantasy",
        rating: 4.45
    },
    4: {
        id: 5,
        image: "/Book_5.jpg",
        title: "A Court of Silver Flames",
        price: 1700,
        description: "Nesta Archeron confronts her inner demons while training to become a formidable force in her own right.",
        author: "Sarah J. Maas",
        long_description: "Consumed by anger, grief, and self-destructive habits, Nesta finds herself isolated from those who care about her. Forced into training with Cassian and immersed in a world of warriors and ancient magic, she begins a difficult journey toward healing. As dangerous powers awaken, Nesta discovers strength that could alter the future of Prythian itself.",
        genre: "Fantasy",
        rating: 4.45
    },
    5: {
        id: 6,
        image: "/Book_6.jpg",
        title: "Percy Jackson: The Lightning Thief",
        price: 1100,
        description: "Percy discovers he is a demigod and embarks on a quest to recover Zeus's stolen lightning bolt.",
        author: "Rick Riordan",
        long_description: "Twelve-year-old Percy Jackson has always felt different, but his world changes when he learns that he is the son of Poseidon. Accused of stealing Zeus's master bolt, he must travel across America with his friends Annabeth and Grover to uncover the true thief. Along the way, Percy encounters monsters, gods, and a destiny far larger than he ever imagined.",
        genre: "Fantasy, Adventure, Mythology",
        rating: 4.2
    },
    6: {
        id: 7,
        image: "/Book_7.jpg",
        title: "Percy Jackson: The Sea of Monsters",
        price: 1000,
        description: "Percy and his friends journey to the Sea of Monsters to find the Golden Fleece, save their home, save Camp Half-Blood and rescue a friend.",
        author: "Rick Riordan",
        long_description: "When the magical borders protecting Camp Half-Blood begin to fail, Percy sets out on a quest into the Sea of Monsters, the modern-day Bermuda Triangle. Joined by old and new allies, he faces mythical creatures and deadly challenges at every turn. The journey reveals shocking truths about family, loyalty, and an emerging threat to Olympus.",
        genre: "Fantasy, Adventure, Mythology",
        rating: 4.1
    },
    7: {
        id: 8,
        image: "/Book_8.jpg",
        title: "Percy Jackson: The Titan's Curse",
        price: 1150,
        description: "Percy and his friends face the wrath of the Titans in this thrilling installment of the Percy Jackson series.",
        author: "Rick Riordan",
        long_description: "When the goddess Artemis disappears, a group of young heroes is sent to find her before disaster strikes. Percy joins the quest despite warnings to stay behind and soon uncovers a sinister plot involving the Titan Atlas. As the stakes rise, friendships are tested and sacrifices become necessary to prevent catastrophe.",
        genre: "Fantasy, Adventure, Mythology",
        rating: 4.4
    },
    8: {
        id: 9,
        image: "/Book_9.jpg",
        title: "Percy Jackson: The Battle of the Labyrinth",
        price: 1250,
        description: "Percy and his friends navigate the dangerous Labyrinth to save their friends and prevent a catastrophic war.",
        author: "Rick Riordan",
        long_description: "When the ancient Labyrinth is activated, Percy and his friends must work together to solve its puzzles and avoid its deadly traps. Percy and his friends venture into its twisting passages to stop Luke and the Titan army from exploiting it. As they progress deeper into the maze, they uncover dark secrets about their past and the true nature of the gods.",
        genre: "Fantasy, Adventure, Mythology",
        rating: 4.5
    },
    9: {
        id: 10,
        image: "/Book_10.jpg",
        title: "Percy Jackson: The Last Olympian",
        price: 1300,
        description: "Percy and his friends face the final battle for the fate of Olympus.",
        author: "Rick Riordan",
        long_description: "As the prophesied battle between the Olympian gods and the Titans approaches, Percy must rally his friends and allies to defend Mount Olympus. With the fate of the world hanging in the balance, Percy confronts his greatest challenges yet, including betrayals, sacrifices, and the true meaning of heroism. The final showdown will determine the future of both mortals and immortals alike.",
        genre: "Fantasy, Adventure, Mythology",
        rating: 4.6
    },
    10: {
        id: 11,
        image: "/Book_11.jpg",
        title: "The Dangerous Days of Daniel X",
        price: 1950,
        description: "Daniel begins his mission to hunt the alien who murdered his parents and destroyed his world.",
        author: "James Patterson",
        long_description: "After witnessing the brutal death of his parents, Daniel inherits incredible reality-altering powers and a list of the universe's most wanted criminals. Living alone, he dedicates himself to tracking dangerous aliens hiding on Earth. His first major hunt brings him face-to-face with enemies far more powerful than anything he has encountered before.",
        genre: "Sci-Fi, Action, Superhero",
        rating: 3.96
    },
    11: {
        id: 12,
        image: "/Book_12.jpg",
        title: "Daniel X: Watch the Skies",
        price: 1250,
        description: "Daniel faces a terrifying alien threat capable of unleashing chaos on a global scale.",
        author: "James Patterson",
        long_description: "The next target on Daniel's list is a ruthless alien whose plans could devastate humanity. As he investigates strange disappearances and escalating attacks, he discovers a conspiracy larger than expected. To succeed, Daniel must rely on both his powers and his determination to protect a planet that is not originally his own.",
        genre: "Sci-Fi, Mystery, Thriller",
        rating: 3.78
    },
    12: {
        id: 13,
        image: "/Book_13.jpg",
        title: "Daniel X: Demons and Druids",
        price: 1500,
        description: "Daniel travels to Europe to stop an ancient evil masquerading as myth and legend.",
        author: "James Patterson",
        long_description: "A dangerous alien uses fear, folklore, and supernatural appearances to manipulate people and spread destruction. Daniel follows the trail across castles, forests, and mysterious locations where reality itself seems uncertain. The mission tests his courage as he confronts enemies who thrive on illusion and terror.",
        genre: "Sci-Fi, Action, Fantasy",
        rating: 3.89
    },
    13: {
        id: 14,
        image: "/Book_14.jpg",
        title: "Daniel X: Game Over",
        price: 1800,
        description: "Daniel battles a technologically advanced alien whose obsession with games threatens countless lives.",
        author: "James Patterson",
        long_description: "A powerful extraterrestrial mastermind transforms destruction into a deadly competition. Daniel is forced into a series of dangerous challenges where failure carries enormous consequences. As the stakes rise, he must outthink an enemy who treats life and death as nothing more than entertainment.",
        genre: "Sci-Fi, Action, Adventure",
        rating: 3.94
    },
    14: {
        id: 15,
        image: "/Book_15.jpg",
        title: "Daniel X: Armageddon",
        price: 2000,
        description: "Daniel confronts a looming apocalypse while moving closer to his ultimate enemy.",
        author: "James Patterson",
        long_description: "Earth faces one of its greatest alien threats yet as powerful forces gather for a catastrophic showdown. Daniel's responsibilities as a protector become heavier than ever, pushing him to his limits. Along the way, he uncovers deeper truths about his destiny and the war he has spent years fighting.",
        genre: "Sci-Fi, Dsytopian, Thriller",
        rating: 3.99
    },
    15: {
        id: 16,
        image: "/Book_16.jpg",
        title: "Daniel X: Lights Out",
        price: 2250,
        description: "Daniel races to stop an alien capable of plunging the world into darkness and disorder in the final installment of the series.",
        author: "James Patterson",
        long_description: "In the sixth and final installment of James Patterson’s sci-fi series, teenage alien hunter Daniel X finally confronts his ultimate nemesis, The Prayer. To avenge his parents' murder, Daniel must push his reality-bending powers beyond the brink to defeat this seemingly god-like monster.",
        genre: "Sci-Fi, Action, Superhero",
        rating: 3.97
    }


    }
       const selectedBook = ref(null)

       return{
           books,
           selectedBook
       }
   },
   actions:{
       updateSelectedBook (payload) {
           this.selectedBook = payload
       },
   },
   persist: true,
})
