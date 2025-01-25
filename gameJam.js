document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-game');
    const gameSquare = document.getElementById('game-square');
    const nextButtonContainer = document.createElement('div');
    const buttonContainer = document.createElement('div');
    const pictureContainer = document.createElement('div');

    const scenario1 = `Man, it feels so nice to finally be able to relax in the park after a long day at work... 
    Honestly, now would be a wonderful time to use these bubbles that I got. I haven't used one of these since I was a kid.`;
    
    const scenario2 = `I unscrew and pull out the top to reveal the end of the stick covered in the beautiful colors similar to clear oilslick.
     I take a deep breath and do my best to control it so that the bubbles are created nice and uniform.`;
    
    const scenario3 = `Hm? I hear some rustling in the bushes.`; 

    const scenario4 = `Suddenly, a cat jumped out of the bushes and started playing with the bubbles!?
     I was so suprised. Looking closer I see that the cat is a bit dirty and roughed up. It seems like its a stray.`;

    const scenario5 = `The cat is a small mangy calico that looks like its been out on it's own its whole life. 
    Despite it's rough look though, this cat has so much life within its eyes as it does its best to catch each and every one of the bubbles I blew.`;

    const scenario6 = `Though I need to start heading home now. Will this cat be fine on it's own? I want to take it home but I'm not sure if I'll be able to sneak it in.
     I'm not techincally supposed to have cats at my apartment, but it should be fine until tomorrow for when I take it to the pound tomorrow, right?`;
    
    const decision1 = `Take the cat home with you?`;
    
    const decision1Yes = `I go over to the cat that now almost looks disappointed that the bubbles are all gone. 
    Once it notices me approaching it, it shows a startled reaction but it does not run away either. 
    I pick up the cat just accepted its fate when I picked it up. With this small kitten in my arms, I begin to head home.`;
    
    const decision1No = `I really wish I could take you home little guy, but I can't with the no pet policy. I wish you the best of luck.`;
    const decision1No2 = `As I get up to start to walk home, I glance at the cat that looks at me longingly for me to play with him just a little longer. 
    I feel a pang of sadness that I can't take it with me but I sawllow it down and march on home.
    I just hope that nothing bad happens to it.`;

    const decision1No3 = `Ha... finally home. Okay now I just need to make dinner and-`;
    
    const decision1No4 = `I'm suddenly cut off from my train of thought when I hear a loud meow coming from my door. I walk over to my door confused and open it.`;

    const decision1No5 = `Sitting right there on my doormat was the cat that I saw playing with me at the park. 
    It meows at me and I'm just stuck there wondering how it got there? 
    That was a 20 minute walk! 
    That must mean this cat has been following me for that long.`;

    const decision1No6 = `Before I could even fully process the situation, the cat suddenly darts inside. 
    At this point, if that cat needed me that bad, I figured I can deal with one night and then I can take it to the pound first thing in the morning.`;

    const scenario8 = `Well, now that I have this cute cat, probably first thing I should do is wash it up.`;

    const scenario9 = `"Look at you pretty girl! All nice and sparkly clean." I say to praise her. 
    Although the process of giving her a bath certainly was not a pretty one. 
    She fought tooth and nail to keep away from that water. I knew cats didn't like water but wow, experiencing it first had is something different.`;

    const scenario10 = `Well now that is out of the way, what do I do with you now? I'm not even sure how to take care of pets much less any cat! I'm used to only taking care of myself. Just then, my stomach grumbles, making such a loud noise that the cats ears perk up in curioustity.`;

    const scenario11 = `I chuckle to myself, "Well, one thing I do know is that I need to eat and probably so do you". I get up to start cooking dinner but despite I how little I know about cats, I know there's some human food that cat's can't eat. Should I give her some of my food? Or she can wait till I take her to the pound tomorrow and she can eat some proper cat food then.`;

    const decision2 = `Should I give the cat some of my food?`;

    const decision2Yes = `"Oh gosh, I'm sure glad I got you food. You're scarfing it down like there's no tomorrow!" I exclaimed. I watch the cat paitently, seeing her try struggle to stuff as much food in her mouth while also trying to eat it as fast as possible. It was not an elegant sight to say the least.`;

    const decision2Yes2 = `A slight tightness wrapped around my chest. I'm so glad that I had brought her home. Simply thinking what has and could have happened to such a sweet girl like her out there... Once she was done eating. I reach out to pet her and she seems to appriate the gesture by nuzzeling her head into my hand.`;
    
    const decision2Yes3 = `Left with a warm fuzzy feeling that almost made me giddy, I finally get up and go to eat my food that was still hot since miss princess here consumed everything at the speed of light. I sat at the edge of my table to where I could watch her flop over and be lazy from what I assume to be her food coma.`;

    const decision2No = `I guess it would probably be safest to make sure I don't accidentally feed her something that would harm her. She can eat once she gets to the pound tomorrow and when someone adopts her I'm sure she'll be eating good for the rest of her life.`;

    const decision2No2 = `I got up to cook and once my food was done I took it to the counter and chowed down. Though whenever I took a look at the cat, she stared me down. I felt as if she was staring into my soul begging me for food, but to my, what I believe best judgement, I refrained from giving her any and finished my meal with a slight tinge of guilt.`;

    const scenario12 = `I go back to the cat and she seems to just be sitting there exepctantly. I'm unsure what shes asking for, I wish at this moment in time I was a cat whisperer. Left to ponder for a while as this cat stares me down inspecting ever particle of my face it seems, I finally have a thought!`;

    const scenario13 = `She must be bored! I wonder what I could entertain her with though... I look around the room and my eyes are drawn to my cheap blue little bubbles tube. I think she had a lot of fun at the park playing with bubbles. Maybe I'll try that!`;

    const scenario14 = `She seemed to like that a lot! I think bubbles might be her favorite thing to play with. I honestly had fun too watching her jump and prance around like a ballerina haha, what a goofy yet adorable cat.`;

    const scenario15 = `I see her yawn which then caused me to yawn as well. I think maybe it's finally bed time for the both of us. I give her a slight pat on the head before standing and stretching. I'm quite exhausted today, and I think it's because of this little missy here.`;

    const scenario16 = `Once I finished getting ready to go to sleep, I crawled into bed and as soon as I'm comfortable, I feel somthing brush against my feet. I jump up out of suprise but once I look down I'm reminded quite quickly I have a cat for the night. I breath a sigh of relief.`;

    const scenario17= `With my heart still racing I lie back down and the cat comes up and lies down next to me. I close my eyes but my nose starts getting a little sniffly and my eyes are stinging a little. I wonder, am I allergic to cats? Maybe since it's my first time that I've ever had to deal with an allergy for a cat, maybe I should put her outside my room for tonight. It's also not that bad so I should be fine.`;

    const decision3 = `Should I let the cat sleep in my bed?`;

    const decision3Yes = `I mean, I should be fine for the night, so I close my eyes and try my best to go to sleep without much success. It takes me about 20 minutes longer than usual but I finally was able to fall asleep through my sniffling mess.`;

    const decision3Yes2 = `I slowly wake up to see a peaceful sleeping cat in front of me. I can hear the faintest whistle as she breaths. With my nose super stuffy, I close my eyes again. Thinking how differfent and unique my day was today and happy that this little cat came into my life.`;

    const decision3Yes3 = `Just before I fall asleep, I ponder if maybe instead of taking her to the pound, maybe I should just keep her for the night.`;

    const decision3Yes4 = `It's finally morning and despite my horrible sleep, the cat looks like it had a wonderful night with no regard to the suffering she caused me. I get ready for the morning and head over to the living room.`;

    const decision3No = `I take the cat and I drop it outside my room and then I go back to my comfy bed. Like magic, instantly I feel so much better and am able to fall asleep within seconds.`;

    const decision3No2 = `I wake up in the morning feeling refreshed and well-slept. I make my way to the living room to find this cute cat paitently waiting for me.`;

    const scenario18 = `After getting up and having time to think about it, I think I've decided to keep her. My lease is going to end here soon anyways, I can just move somewhere that'll let me keep her. This will be quite the journey but I get this feeling of excitement and joy for the future that I can't quite remember the that last time I felt that.`;
    
    const scenario19 = `Once I made the decision in my head to keep her, I start my day by making myself breakfast and I see her looking up at me expectantly. I almost forgot that shes probably hungry just like I am.`;

    const decision4 = `Do you want to feed the cat?`;

    const decision4Yes = `When I lay the food bowl beside her, she doesn't rush to eat it right away like I was expecting. Instead she just stares at it without touching it. I wonder if shes just not a morning eater.`;

    const decision4No = `I can wait till I can go buy food for her after a visit to the vet. So to be safe it's probably best that I don't feed her anything I'm not supposed before her vet visit.`;
    
    const scenario20 = `After I had finished breakfast, I figured that probably playing bubbles with the cat would probably tire it out a bit and prepare it for taking her to the vet. I pull out the bubbles and she for some reason doesn't seem as excited as she did yesterday but she still tried her best to grab them.`;

    const scenario21 = `I stare at the cat in shock. She just suddenly fell down and now panting hoarsley like she cant breath. I'm not sure what to do, I don't think I quite have the money to be able to provide her surgrey or any expensive medical treatments. I watch her as her panting is slowly becoming more faint. I have to made a decision now.`;

    const decision5 = `Take the cat to the vet?`;

    const decision5Yes = `I quickly make a bed for her by grabbing a cardboard box and a bunch of blankets. I gently pick her up and place her into her makeshift bed. I rush her to the car and as quick as I could possible, I head my way towards the vet.`;

    const decision5Yes2 = `As I was speeding down the highway. I look over and shes not even moving anymore. My heart sinks. I place my hand on her and I can feel she's no longer breathing. I pull over and as I'm just staring at her corpse, I feel my eyes start to well up.`;

    const decision5Yes3 = `I give her one last pat on her head and place the blanket over her. I turn around and drive back home in dead silence`;

    const decision5No = `I panic and I'm not sure what to do but I can try my best to help her at home. I bring her whatever food I had and brought her some water. She doesnt even respond. I place a blanket under her hoping that would help, though I feel in the bottom of my heart that she's not going to make it.`;

    const decision5No2 = `I stay next to her until finally she takes her last breath. My heart sinks and staring at her corpse I feel my eyes staring to swell up. I give her one last pat before I place a blanket over her.`;

    const scenario22 = `I stare at the litte grave I had made for her. I feel a swell of emotions that I can't quite explain surge up within me. I knew I at least feel greif over a cat that I knew for only half a day that I never expected to come into my life. It's odd, It was the first time that I had ever needed to take care of something and although some points were a struggle. I'm happy to have had the chance to learn to love and be with this cat.`;

    const scenario23 = `I find myself each time I'm here at the park blowing bubbles hoping the same small kitten will pop out and play with bubbles as if it was the most wonderful thing in the world. I take out my little blue bubble tube and blow the last bit that was left.`;

    const scenario24 = `I have a little bit of a bittersweet feeling now that I am out of bubbles. I just hope that I gave that cat a wonderful last little bit of life even if it was short. I know that each time I'll blow bubbles in the future, I'll always be reminded the cat that loved to play with bubbles.`;

    const scenario25 = `The End`;

    class TextBox {
        constructor(text) {
            this.element = document.createElement('div');
            this.element.classList.add('text-box');
            this.element.innerText = text;
        }
        addText(text) {
            this.element.innerText += text;
        }
        appendTo(parent) {
            parent.appendChild(this.element);
        }

        clearText() {
            this.element.innerText = '';
        }
    }

    class PictureContainer {
        constructor() {
            this.element = document.createElement('div');
            this.element.classList.add('picture-container');
        }
        appendTo(parent) {
            parent.appendChild(this.element);
        }
    }

    class Picture {
        constructor() {
            this.element = document.createElement('img');
            this.element.classList.add('picture');
        }
        appendTo(parent) {
            parent.appendChild(this.element);
        }
        removeTo(parent) {
            parent.removeChild(this.element);
        }
    }

    class YesButton {
        constructor() {
            this.element = document.createElement('button');
            this.element.innerText = "Yes";
            this.element.classList.add('yes-button');
        }
        appendTo(parent) {
            parent.appendChild(this.element);
        }
        removeTo(parent) {
            parent.removeChild(this.element);
        }
    }

    class NoButton {
        constructor() {
            this.element = document.createElement('button');
            this.element.innerText = "No";
            this.element.classList.add('no-button');
        }
        appendTo(parent) {
            parent.appendChild(this.element);
        }
        removeTo(parent) {
            parent.removeChild(this.element);
        }
    }

    class NextButton {
        constructor() {
            this.element = document.createElement('button');
            this.element.innerText = "Next";
            this.element.classList.add('next-button');
        }
        appendTo(parent) {
            parent.appendChild(this.element);
        }
        removeTo(parent) {
            parent.removeChild(this.element);
        }
    }

    function endGame(textBox, parkPicture) {
        function clickNext(text) {
            textBox.clearText();
            textBox.addText(text);
        }
        clickNext(scenario22);
        const nextButton = new NextButton();
        nextButton.appendTo(nextButtonContainer);
        textBox.element.appendChild(nextButtonContainer);
        nextButton.element.addEventListener('click', () => {
            nextButton.removeTo(nextButtonContainer);
            clickNext(scenario23);
            const nextButton1 = new NextButton();
            nextButton1.appendTo(nextButtonContainer);
            textBox.element.appendChild(nextButtonContainer);
            nextButton1.element.addEventListener('click', () => {
                nextButton1.removeTo(nextButtonContainer);
                clickNext(scenario24);
                const nextButton2 = new NextButton();
                nextButton2.appendTo(nextButtonContainer);
                textBox.element.appendChild(nextButtonContainer);
                nextButton2.element.addEventListener('click', () => {
                    nextButton2.removeTo(nextButtonContainer);
                    clickNext(scenario25);
                });
            });
        });
    }

    function almostEndGame(textBox, parkPicture) {
        function clickNext(text) {
            textBox.clearText();
            textBox.addText(text);
        }
        clickNext(scenario20);
        const nextButton = new NextButton();
        nextButton.appendTo(nextButtonContainer);
        textBox.element.appendChild(nextButtonContainer);
        nextButton.element.addEventListener('click', () => {
            nextButton.removeTo(nextButtonContainer);
            clickNext(scenario21);
            const nextButton1 = new NextButton();
            nextButton1.appendTo(nextButtonContainer);
            textBox.element.appendChild(nextButtonContainer);
            nextButton1.element.addEventListener('click', () => {
                nextButton1.removeTo(nextButtonContainer);
                clickNext(decision5);
                const yesButton = new YesButton();
                const noButton = new NoButton();
                yesButton.appendTo(buttonContainer);
                noButton.appendTo(buttonContainer);
                textBox.element.appendChild(buttonContainer);
                yesButton.element.addEventListener('click', () => {
                    yesButton.removeTo(buttonContainer);
                    noButton.removeTo(buttonContainer);
                    clickNext(decision5Yes);
                    const nextButton2 = new NextButton();
                    nextButton2.appendTo(nextButtonContainer);
                    textBox.element.appendChild(nextButtonContainer);
                    nextButton2.element.addEventListener('click', () => {
                        nextButton2.removeTo(nextButtonContainer);
                            clickNext(decision5Yes2);
                            const nextButton3 = new NextButton();
                            nextButton3.appendTo(nextButtonContainer);
                            textBox.element.appendChild(nextButtonContainer);
                            nextButton3.element.addEventListener('click', () => {
                                nextButton3.removeTo(nextButtonContainer);
                                clickNext(decision5Yes3);
                                const nextButton4 = new NextButton();
                                nextButton4.appendTo(nextButtonContainer);
                                textBox.element.appendChild(nextButtonContainer);
                                nextButton4.element.addEventListener('click', () => {
                                    nextButton4.removeTo(nextButtonContainer);
                                    endGame(textBox, parkPicture);
                                });

                            });
                    }); 
                });
                noButton.element.addEventListener('click', () => {
                    yesButton.removeTo(buttonContainer);
                    noButton.removeTo(buttonContainer);
                    clickNext(decision5No);
                    const nextButton2 = new NextButton();
                    nextButton2.appendTo(nextButtonContainer);
                    textBox.element.appendChild(nextButtonContainer);
                    nextButton2.element.addEventListener('click', () => {
                        nextButton2.removeTo(nextButtonContainer);
                        clickNext(decision5No2);
                        const nextButton3 = new NextButton();
                        nextButton3.appendTo(nextButtonContainer);
                        textBox.element.appendChild(nextButtonContainer);
                        nextButton3.element.addEventListener('click', () => {
                            nextButton3.removeTo(nextButtonContainer);
                            endGame(textBox, parkPicture);
                        });
                            
                    });
                });
            });    
        }); 
    }

    function duringGame(textBox, parkPicture) {
        function clickNext(text) {
            textBox.clearText();
            textBox.addText(text);
        }
        clickNext(scenario18);
        const nextButton = new NextButton();
        nextButton.appendTo(nextButtonContainer);
        textBox.element.appendChild(nextButtonContainer);
        nextButton.element.addEventListener('click', () => {
            nextButton.removeTo(nextButtonContainer);
            clickNext(scenario19);
            const nextButton1 = new NextButton();
            nextButton1.appendTo(nextButtonContainer);
            textBox.element.appendChild(nextButtonContainer);
            nextButton1.element.addEventListener('click', () => {
                nextButton1.removeTo(nextButtonContainer);
                clickNext(decision4);
                const yesButton = new YesButton();
                const noButton = new NoButton();
                yesButton.appendTo(buttonContainer);
                noButton.appendTo(buttonContainer);
                textBox.element.appendChild(buttonContainer);
                yesButton.element.addEventListener('click', () => {
                    yesButton.removeTo(buttonContainer);
                    noButton.removeTo(buttonContainer);
                    clickNext(decision4Yes);
                    const nextButton2 = new NextButton();
                    nextButton2.appendTo(nextButtonContainer);
                    textBox.element.appendChild(nextButtonContainer);
                    nextButton2.element.addEventListener('click', () => {
                        nextButton2.removeTo(nextButtonContainer);
                        almostEndGame(textBox, parkPicture);
                    });
                });
                noButton.element.addEventListener('click', () => {
                    yesButton.removeTo(buttonContainer);
                    noButton.removeTo(buttonContainer);
                    clickNext(decision4No);
                    const nextButton2 = new NextButton();
                    nextButton2.appendTo(nextButtonContainer);
                    textBox.element.appendChild(nextButtonContainer);
                    nextButton2.element.addEventListener('click', () => {
                        nextButton2.removeTo(nextButtonContainer);
                        almostEndGame(textBox, parkPicture);
                    });

                });
            });
        });

    }

    function newGame(nextButton, textBox, parkPicture) {
        function clickNext(text) {
            textBox.clearText();
            textBox.addText(text);
        }
        nextButton.removeTo(nextButtonContainer);
        clickNext(scenario12);
        const nextButton1 = new NextButton();
        nextButton1.appendTo(nextButtonContainer);
        textBox.element.appendChild(nextButtonContainer);
        nextButton1.element.addEventListener('click', () => {
            nextButton1.removeTo(nextButtonContainer);
            clickNext(scenario13);
            const nextButton2 = new NextButton();
            nextButton2.appendTo(nextButtonContainer);
            textBox.element.appendChild(nextButtonContainer);
            nextButton2.element.addEventListener('click', () => {
                nextButton2.removeTo(nextButtonContainer);
                clickNext(scenario14);
                const nextButton3 = new NextButton();
                nextButton3.appendTo(nextButtonContainer);
                textBox.element.appendChild(nextButtonContainer);
                nextButton3.element.addEventListener('click', () => {
                    nextButton3.removeTo(nextButtonContainer);
                    clickNext(scenario15);
                    const nextButton4 = new NextButton();
                    nextButton4.appendTo(nextButtonContainer);
                    textBox.element.appendChild(nextButtonContainer);
                    nextButton4.element.addEventListener('click', () => {
                        nextButton4.removeTo(nextButtonContainer);
                        clickNext(scenario16);
                        const nextButton5 = new NextButton();
                        nextButton5.appendTo(nextButtonContainer);
                        textBox.element.appendChild(nextButtonContainer);
                        nextButton5.element.addEventListener('click', () => {
                            nextButton5.removeTo(nextButtonContainer);
                            clickNext(scenario17);
                            const nextButton6 = new NextButton();
                            nextButton6.appendTo(nextButtonContainer);
                            textBox.element.appendChild(nextButtonContainer);
                            nextButton6.element.addEventListener('click', () => {
                                nextButton6.removeTo(nextButtonContainer);
                                clickNext(decision3);
                                const yesButton1 = new YesButton();
                                const noButton1 = new NoButton();
                                yesButton1.appendTo(buttonContainer);
                                noButton1.appendTo(buttonContainer);
                                textBox.element.appendChild(buttonContainer);
                                yesButton1.element.addEventListener('click', () => {
                                    yesButton1.removeTo(buttonContainer);
                                    noButton1.removeTo(buttonContainer);
                                    clickNext(decision3Yes);
                                    const nextButton7 = new NextButton();
                                    nextButton7.appendTo(nextButtonContainer);
                                    textBox.element.appendChild(nextButtonContainer);
                                    nextButton7.element.addEventListener('click', () => {
                                        nextButton7.removeTo(nextButtonContainer);
                                        clickNext(decision3Yes2);
                                        const nextButton8 = new NextButton();
                                        nextButton8.appendTo(nextButtonContainer);
                                        textBox.element.appendChild(nextButtonContainer);
                                        nextButton8.element.addEventListener('click', () => {
                                            nextButton8.removeTo(nextButtonContainer);
                                            clickNext(decision3Yes3);
                                            const nextButton9 = new NextButton();
                                            nextButton9.appendTo(nextButtonContainer);
                                            textBox.element.appendChild(nextButtonContainer);
                                            nextButton9.element.addEventListener('click', () => {
                                                nextButton9.removeTo(nextButtonContainer);
                                                clickNext(decision3Yes4);
                                                const nextButton10 = new NextButton();
                                                nextButton10.appendTo(nextButtonContainer);
                                                textBox.element.appendChild(nextButtonContainer);
                                                nextButton10.element.addEventListener('click', () => {
                                                    nextButton10.removeTo(nextButtonContainer);
                                                    duringGame(textBox, parkPicture);
                                                });
                                            });
                                        });
                                    });
                                });

                                noButton1.element.addEventListener('click', () => {
                                    console.log(`clicked`);
                                    noButton1.removeTo(buttonContainer);
                                    yesButton1.removeTo(buttonContainer);
                                    clickNext(decision3No);
                                    const nextButton2 = new NextButton();
                                    nextButton2.appendTo(nextButtonContainer);
                                    textBox.element.appendChild(nextButtonContainer);
                                    nextButton2.element.addEventListener('click', () => {
                                        nextButton2.removeTo(nextButtonContainer);
                                        clickNext(decision3No2);
                                        const nextButton3 = new NextButton();
                                        nextButton3.appendTo(nextButtonContainer);
                                        textBox.element.appendChild(nextButtonContainer);
                                        nextButton3.element.addEventListener('click', () => {
                                            nextButton3.removeTo(nextButtonContainer);
                                            duringGame(textBox, parkPicture);
                                        });
                                    }); 
                                });
                            });
                        });
                        
                    });
                });
        });
    });

    }

    function middleGame(nextButton, textBox, parkPicture) {
        function clickNext(text) {
            textBox.clearText();
            textBox.addText(text);
        }
        nextButton.removeTo(nextButtonContainer);
        clickNext(scenario8);
        const nextButton1 = new NextButton();
        nextButton1.appendTo(nextButtonContainer);
        textBox.element.appendChild(nextButtonContainer);
        nextButton1.element.addEventListener('click', () => {
            nextButton1.removeTo(nextButtonContainer);
            clickNext(scenario9);
            const nextButton2 = new NextButton();
            nextButton2.appendTo(nextButtonContainer);
            textBox.element.appendChild(nextButtonContainer);
            nextButton2.element.addEventListener('click', () => {
                nextButton2.removeTo(nextButtonContainer);
                clickNext(scenario10);
                const nextButton3 = new NextButton();
                nextButton3.appendTo(nextButtonContainer);
                textBox.element.appendChild(nextButtonContainer);
                nextButton3.element.addEventListener('click', () => {
                    nextButton3.removeTo(nextButtonContainer);
                    clickNext(scenario11);
                    const nextButton4 = new NextButton();
                    nextButton4.appendTo(nextButtonContainer);
                    textBox.element.appendChild(nextButtonContainer);
                    nextButton4.element.addEventListener('click', () => {
                        nextButton4.removeTo(nextButtonContainer);
                        //parkPicture.removeTo(pictureContainer.element);
                        parkPicture.element.src = 'Gamejam2_Living room_ Cat Only.jpg';
                        //parkPicture.appendTo(pictureContainer.element);
                        clickNext(decision2);
                        const yesButton = new YesButton();
                        const noButton = new NoButton();
                        yesButton.appendTo(buttonContainer);
                        noButton.appendTo(buttonContainer);
                        textBox.element.appendChild(buttonContainer);
                        yesButton.element.addEventListener('click', () => {
                            //parkPicture.removeTo(pictureContainer.element);
                            parkPicture.element.src = 'Gamejam2_Living room_ Cat with Food in Bowl.jpg';
                            //parkPicture.appendTo(pictureContainer.element);
                            yesButton.removeTo(buttonContainer);
                            noButton.removeTo(buttonContainer);
                            clickNext(decision2Yes);
                            const nextButton5 = new NextButton();
                            nextButton5.appendTo(nextButtonContainer);
                            textBox.element.appendChild(nextButtonContainer);
                            nextButton5.element.addEventListener('click', () => {
                                nextButton5.removeTo(nextButtonContainer);
                                clickNext(decision2Yes2);
                                const nextButton6 = new NextButton();
                                nextButton6.appendTo(nextButtonContainer);
                                textBox.element.appendChild(nextButtonContainer);
                                nextButton6.element.addEventListener('click', () => {
                                    nextButton6.removeTo(nextButtonContainer);
                                    clickNext(decision2Yes3);
                                    const nextButton7 = new NextButton();
                                    nextButton7.appendTo(nextButtonContainer);
                                    textBox.element.appendChild(nextButtonContainer);
                                    nextButton7.element.addEventListener('click', () => {
                                        newGame(nextButton7, textBox, parkPicture);
                                    });
                                });    
                            });                
                        });
                        noButton.element.addEventListener('click', () => {
                            yesButton.removeTo(buttonContainer);
                            noButton.removeTo(buttonContainer);
                            //parkPicture.removeTo(pictureContainer.element);
                            parkPicture.element.src = 'Gamejam2_Living room_ Cat with Empty Bowl.jpg';
                           // parkPicture.appendTo(pictureContainer.element);
                            clickNext(decision2No);
                            const nextButton5 = new NextButton();
                            nextButton5.appendTo(nextButtonContainer);
                            textBox.element.appendChild(nextButtonContainer);
                            nextButton5.element.addEventListener('click', () => {
                                nextButton5.removeTo(nextButtonContainer);
                                clickNext(decision2No2);
                                const nextButton6 = new NextButton();
                                nextButton6.appendTo(nextButtonContainer);
                                textBox.element.appendChild(nextButtonContainer);
                                nextButton6.element.addEventListener('click', () => {
                                    newGame(nextButton6, textBox, parkPicture);
                                });
                            });
                        });
                    });
                });
            });
        });
    }
    
    function startGame() {
        gameSquare.innerHTML = '';
        const parkPicture = new Picture();
        parkPicture.element.src = 'Gamejam, Park, no bubbles or cat.jpg';
        const pictureContainer = new PictureContainer();
        parkPicture.appendTo(pictureContainer.element);
        pictureContainer.appendTo(gameSquare); // Append pictureContainer to gameSquare
        const textBox = new TextBox(scenario1);
        textBox.appendTo(gameSquare);
        const nextButton = new NextButton();
        nextButton.appendTo(nextButtonContainer);
        textBox.element.appendChild(nextButtonContainer);
        nextButton.element.addEventListener('click', () => {
            parkPicture.removeTo(pictureContainer.element);
            parkPicture.element.src = 'Gamejam, Park, bubbles no cat.jpg';
            parkPicture.appendTo(pictureContainer.element);
            nextButton.removeTo(nextButtonContainer);
            clickNext(scenario2);
            const nextButton2 = new NextButton();
            nextButton2.appendTo(nextButtonContainer);
            textBox.element.appendChild(nextButtonContainer);
            nextButton2.element.addEventListener('click', () => {

                nextButton2.removeTo(nextButtonContainer);
                clickNext(scenario3);
                const nextButton3 = new NextButton();
                nextButton3.appendTo(nextButtonContainer);
                textBox.element.appendChild(nextButtonContainer);
                nextButton3.element.addEventListener('click', () => {
                    
                    nextButton3.removeTo(nextButtonContainer);
                    parkPicture.removeTo(pictureContainer.element);
                    parkPicture.element.src = 'Gamejam, Park, bubbles and cat.jpg';
                    parkPicture.appendTo(pictureContainer.element);
                    clickNext(scenario4);
                    const nextButton4 = new NextButton();
                    nextButton4.appendTo(nextButtonContainer);
                    textBox.element.appendChild(nextButtonContainer);

                    nextButton4.element.addEventListener('click', () => {
                        nextButton4.removeTo(nextButtonContainer);
                        clickNext(scenario5);
                        const nextButton5 = new NextButton();
                        nextButton5.appendTo(nextButtonContainer);
                        textBox.element.appendChild(nextButtonContainer);

                        nextButton5.element.addEventListener('click', () => {
                            nextButton5.removeTo(nextButtonContainer);
                            clickNext(scenario6);
                            const nextButton6 = new NextButton();
                            nextButton6.appendTo(nextButtonContainer);
                            textBox.element.appendChild(nextButtonContainer);

                            nextButton6.element.addEventListener('click', () => {
                                clickNext(decision1);
                                nextButton6.removeTo(nextButtonContainer);
                                const yesButton = new YesButton();
                                const noButton = new NoButton();
                                yesButton.appendTo(buttonContainer);
                                noButton.appendTo(buttonContainer);
                                textBox.element.appendChild(buttonContainer);
                                yesButton.element.addEventListener('click', () => {
                                    yesButton.removeTo(buttonContainer);
                                    noButton.removeTo(buttonContainer);
                                    clickNext(decision1Yes);
                                    const nextButton7 = new NextButton();
                                    nextButton7.appendTo(nextButtonContainer);
                                    textBox.element.appendChild(nextButtonContainer);
                                    nextButton7.element.addEventListener('click', () => {
                                        middleGame(nextButton7, textBox, parkPicture);
                                    });

                                });
                                noButton.element.addEventListener('click', () => {
                                    yesButton.removeTo(buttonContainer);
                                    noButton.removeTo(buttonContainer);
                                    clickNext(decision1No);
                                    const nextButton7 = new NextButton();
                                    nextButton7.appendTo(nextButtonContainer);
                                    textBox.element.appendChild(nextButtonContainer);
                                    nextButton7.element.addEventListener('click', () => {
                                        nextButton7.removeTo(nextButtonContainer);
                                        clickNext(decision1No2);
                                        const nextButton8 = new NextButton();
                                        nextButton8.appendTo(nextButtonContainer);
                                        textBox.element.appendChild(nextButtonContainer);
                                        nextButton8.element.addEventListener('click', () => {
                                            nextButton8.removeTo(nextButtonContainer);
                                            clickNext(decision1No3);
                                            const nextButton9 = new NextButton();
                                            nextButton9.appendTo(nextButtonContainer);
                                            textBox.element.appendChild(nextButtonContainer);
                                            nextButton9.element.addEventListener('click', () => {
                                                nextButton9.removeTo(nextButtonContainer);
                                                clickNext(decision1No4);
                                                const nextButton10 = new NextButton();
                                                nextButton10.appendTo(nextButtonContainer);
                                                textBox.element.appendChild(nextButtonContainer);
                                                nextButton10.element.addEventListener('click', () => {
                                                    nextButton10.removeTo(nextButtonContainer);
                                                    clickNext(decision1No5);
                                                    const nextButton11 = new NextButton();
                                                    nextButton11.appendTo(nextButtonContainer);
                                                    textBox.element.appendChild(nextButtonContainer);
                                                    nextButton11.element.addEventListener('click', () => {
                                                        nextButton11.removeTo(nextButtonContainer);
                                                        clickNext(decision1No6);
                                                        const nextButton12 = new NextButton();
                                                        nextButton12.appendTo(nextButtonContainer);
                                                        textBox.element.appendChild(nextButtonContainer);
                                                        nextButton12.element.addEventListener('click', () => {
                                                            middleGame(nextButton12, textBox, parkPicture);
                                                        });
                                                    });
                                                });
                                            });

                                        });
                                    });
                                });
                            });

                        });
                        
                    });
                });
            });
        });

        nextButtonContainer.classList.add('next-button-container');
        buttonContainer.classList.add('button-container');
        //pictureContainer.classList.add('picture-container');

        function clickNext(text) {
            textBox.clearText();
            textBox.addText(text);
        }

    }
    
    if (startButton) {
        startButton.addEventListener('click', () => {
            console.log('Game started');
            startGame();
        });
    } else {
        console.error('Start button not found');
    }
});
