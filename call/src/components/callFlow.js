const callFlow = {
  start: {
    sound: "/audio/megbiya1.mp3", // greeting sound
    nextMenu: "mainMenu",
  },

  // Main menu after call starts
  mainMenu: {
    1: { sound: "/audio/sound1.mp3", nextMenu:"menu1" },
    2: { sound: "/audio/sound2.mp3",nextMenu:"menu2" },
    3: { sound: "/audio/sound3.mp3" ,nextMenu:"menu3"},
    4: { sound: "/audio/sound4.mp3" ,nextMenu:"menu4"},
  },

  // Submenu after pressing "1" in main menu
  menu1: {
    1: { sound: "/audio/sound1.mp3",nextMenu:"" },
    2: { sound: "/audio/sound1.mp3" ,nextMenu:""},
    3: { sound: "/audio/sound1.mp3" ,nextMenu:""},
  },
   menu2:{
    1: { sound: "/audio/sound1.mp3",nextMenu:"" },
    2: { sound: "/audio/sound1.mp3" ,nextMenu:""},
   },
   menu3:{
   1: { sound: "/audio/sound1.mp3" ,nextMenu:""},
   2: { sound: "/audio/sound1.mp3",nextMenu:"" },
   3: { sound: "/audio/sound1.mp3",nextMenu:"" },
   4: { sound: "/audio/sound1.mp3" ,nextMenu:""},
   },
   menu4:{
    1: { sound: "/audio/sound1.mp3",nextMenu:"" },
    2: { sound: "/audio/sound1.mp3",nextMenu:"" },
   },
   menu11:{

   },
   menu21:{

   },
   menu31:{

   },
   menu41:{

   },
   menu0:{
    0: { sound: "/audio/sound1.mp3" },
   }


};

export default callFlow;
