(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70173986"],{"497c":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"definitions"},e._l(e.definitions,(function(t,i){return a("li",[a("div",{staticClass:"name"},[e._v(e._s(i))]),a("div",{staticClass:"definition"},[e._v(e._s(t))])])})),0)},o=[],n=a("d4ec"),r=a("262e"),s=a("2caf"),h=a("9ab4"),l=a("60a3"),d=function(e){Object(r["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(n["a"])(this,a),t.apply(this,arguments)}return a}(l["c"]);Object(h["a"])([Object(l["b"])(Object)],d.prototype,"definitions",void 0),d=Object(h["a"])([l["a"]],d);var c=d,f=c,u=(a("e4ab"),a("2877")),g=Object(u["a"])(f,i,o,!1,null,"3fc07278",null);t["a"]=g.exports},a2bb:function(e,t,a){},b580:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Activating")]),a("p",[e._v("Click on the 'Important Check Mode' switch near the bottom of the page")]),a("h3",[e._v("Loading Hints")]),e._m(0),a("h3",[e._v("Marking Checks")]),a("p",[e._v("To mark that you found a check in a world, you can either drag each check directly onto the world icon, or you can select the world first, then click each check that you found there. Marking a check will increment a counter both on the check and the world. Note that the counter on the check is not displayed unless it is above 1. To mark a check from the Garden of Assemblage or a Critical Mode extra, click on the check without selecting a world. It is not displayed as a location as there isn't a good place to show it, but it is still tracked internally.")]),a("p",[e._v("If you mark a report, and hints are loaded, then a popup menu will appear, prompting you to select which report was found. You need to select the correct report for the hint to register. If you select a specific report incorrectly 3 times across any world, the report will be deactivated for the rest of the session. This is the same behaviour as the hint site and other trackers. If hints are not loaded, then getting a report will work the same way as any other check.")]),a("p",[e._v('When a hint gets registered, a number for the total number of important checks will appear next to the corresponding world. E.g. if you have 3 important checks in Hollow Bastion, and you get a hint saying Hollow Bastion has 6 important checks, it will show "3 / 6".')]),a("p",[e._v("Worlds will get lit up when you have found all important checks in that world, if you have the hint for it. If you have pre-selecting worlds disabled (Settings > Important Checks Mode), you can also click on the world yourself to light it up.")]),a("p",[e._v("The tracker won't let you mark more of a certain check than you can get. E.g. you can only mark 3 fires and trying to mark any more than that won't do anything.")]),a("h3",[e._v("Unmarking Checks")]),a("p",[e._v("Clicking on a world while holding the Ctrl key will return the last check found there back to the pool. Conversely, Ctrl+clicking on a check will remove it from the last world you found it in.")]),a("h3",[e._v("Hint Logic")]),a("p",[e._v("If a world is hinted and the world in which the report was found is also hinted, then the world that was hinted by the hinted world will have a report icon in the bottom left to indicate this. This is because worlds with proofs have to be hinted and their report also hinted. Report icons will also be shown but dimmed if a hinted world had its report in a world that hasn't been hinted but had a proof found there, since worlds with proofs have to be hinted.")]),a("p",[e._v("Report icons are also shown next to drive forms if they were found in a hinted world and torn pages will have a report icon with a number showing the number of pages that were found in hinted worlds.")]),e._m(1),a("h3",[e._v("Levelling Drives/Summons")]),a("p",[e._v("You can increase the level of a drive form or summons by clicking on the form. If you are levelling a form you don't have yet (i.e., through the auto ability), then you should Shift+click it instead. Increasing levels of drives and summons won't increase the total number of checks found. Trying to mark levels past level 7 will reset the level back to 1. Unmarking the check from the world won't affect the marked level and will instead just unhighlight it while keeping the level. Ctrl+clicking on the form/summon itself if it is above level 1 will decrease level rather than unmarking it.")]),a("h3",[e._v("Additional Icons")]),a("p",[e._v("Some items have icons that appear next to them upon right-click, cycling through these lists:")]),a("DefinitionsList",{attrs:{definitions:e.definitions}}),a("p",[e._v("Additionally, the following worlds have extra icons that appear separate to these in the top right when upon clicking on them while holding the shift key:")]),a("DefinitionsList",{attrs:{definitions:e.secondaryDefinitions}}),a("h3",[e._v("Middle Click")]),a("p",[e._v("A red cross will be put over the item, for if a world/item is disabled in the seed. If you do this on a location, it will toggle a small popup showing a list of checks found there.")]),a("h3",[e._v("Manually Changing Check Count")]),a("p",[e._v("If for whatever reason the number of checks found displayed by the tracker is wrong, you can click on the number yourself to increase it, or ctrl+click OR right-click it to decrease it. If there's an issue causing this, please report it! As of the time of writing this, all known issues of this potentially happening have already been dealt with.")]),a("h3",[e._v("OBS Browser Source")]),e._m(2)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Clicking on the 'Upload Hints' button near the bottom of the page will open a dialog for you to select your hints file. This file should be saved from Jsmartee's "),a("a",{attrs:{href:"https://jsmartee.github.io/kh2fm-hints-demo/"}},[e._v("hint website")]),e._v(" using the 'Save Hints' button on the right side of the page. If the button turns green, then this means hints have successfully been loaded.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("To read more about the logic, check the "),a("a",{attrs:{href:"https://jsmartee.github.io/kh2fm-hints-demo/info.html#logic"}},[e._v("official page")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Gameaddict has a "),a("a",{attrs:{href:"https://docs.google.com/document/d/1STiVyCUkyx9_ZiEuXBU71gJSisJT4hvagxvqK0VOqU8/edit"}},[e._v("guide")]),e._v(" on using the tracker as a browser source in OBS if you wish to use it this way. This is not the same as capturing your browser window directly - the tracker is opened in OBS itself.")])}],n=a("d4ec"),r=a("262e"),s=a("2caf"),h=a("9ab4"),l=a("60a3"),d=a("497c"),c=function(e){Object(r["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.definitions={"Simulated Twilight Town":"Defeated the Computer Room, Entered the Pod Room, Defeated Data Roxas","Twilight Town":"Cleared the First Visit, Cleared Sandlot Berserkers Fight, Cleared Old Mansion Nobodies Fight, Cleared Betwixt and Between Assassins Fight, Defeated Data Axel","Hollow Bastion":"Cleared Bailey Samurai Fight, Activated Ansem’s Study Computer, Cleared Restoration Site Dancers Fight, Defeated Demyx, Cleared 1000 Heartless Fight, Defeated Sephiroth, Defeated Data Demyx","Land of Dragons":"Opened Starting Chests, Cleared Village Cave Fight, Cleared Timed Summit Fight, Defeated Shan Yu, Cleared Antechamber Snipers Fight, Defeated Storm Rider, Defeated Data Xigbar","Beast’s Castle":"Opened Starting Chests, Defeated Thresholder and Possessor, Defeated The Beast, Defeated Dark Thorn, Cleared Entrance Hall Dragoon Fight, Defeated Xaldin, Defeated Data Xaldin","Olympus Coliseum":"Opened Starting Chests, Defeated Cerberus, Freed Meg at the Lock, Defeated Hydra, Defeated Hades, Defeated Zexion’s Absent Silhouette","Disney Castle/Timeless River":"Opened Starting Chests, Cleared Minnie Escort Fights, Defeated Old Pete, Cleared Windows of Time Fights, Defeated Pete, Defeated Marluxia’s Absent Silhouette, Defeated Lingering Will",Agrabah:"Opened Starting Chests, Cleared Abu Escort Minigame, Cleared Chasm of Challenges Fights, Defeated Volcano and Blizzard Lords, Activated Magic Switches, Defeated Genie Jafar, Defeated Lexaeus’ Absent Silhouette","Port Royal":"Opened Starting Chests, Cleared Town Fight, Cleared Isla de Muerta Pirates Fight, Defeated Barbossa, Cleared Seadrift Keep Gamblers Fight, Defeated Grim Reaper, Defeated Data Luxord","Halloween Town":"Opened Starting Chests, Cleared Candy Cane Lane Fight, Defeated Prison Keeper, Defeated Oogie Boogie, Cleared Presents Minigame, Defeated The Experiment, Defeated Vexen’s Absent Silhouette","Pride Lands":"Opened Starting Chests, Talked to Simba at the Oasis, Defeated Scar, Defeated Groundshaker, Defeated Data Saix","Space Paranoids":"Opened Starting Chests, Cleared Dataspace Fight, Defeated Hostile Program, Cleared Solar Sailer Fight, Defeated MCP, Defeated Larxene’s Absent Silhouette","The World That Never Was":"Opened Starting Chests, Defeated Roxas, Defeated Xigbar, Defeated Luxord, Defeated Saix, Reached the Door to Kingdom Hearts, Defeated Data Xemnas","100 Acre Wood":"Opened Starting Chests, Cleared Blustery Rescue Minigame, Cleared Hunny Slider Minigame, Cleared Balloon Bounce Minigame, Cleared The Expotition Minigame, Cleared Hunny Pot Minigame","Drive Forms":"Growth Ability Counter (High Jump, Quick Run, Dodge Roll, Aerial Dodge, Glide)","The Three Proofs":"Obtained Bronze Crown, Silver Crown, Gold Crown"},e.secondaryDefinitions={"Hollow Bastion (for Cavern of Remembrance)":"Opened Chests Before First Fight, Opened Chests Before Second Fight, Opened Remaining Chests, Cleared Transport to Remembrance Nobodies Fights","Olympus Coliseum":"Cleared Pain and Panic Cup, Cleared Cerberus Cup, Cleared Titan Cup, Cleared Goddess of Fate Cup, Cleared Hades Paradox Cup","Disney Castle":"Lingering Will"},e}return a}(l["c"]);c=Object(h["a"])([Object(l["a"])({components:{DefinitionsList:d["a"]}})],c);var f=c,u=f,g=a("2877"),p=Object(g["a"])(u,i,o,!1,null,null,null);t["default"]=p.exports},e4ab:function(e,t,a){"use strict";var i=a("a2bb"),o=a.n(i);o.a}}]);
//# sourceMappingURL=chunk-70173986.bdba88fe.js.map