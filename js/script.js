const { createApp } = Vue;

createApp({
    data(){
        return {
            //array of images
            images: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            //setting an index to control the slider
            indexImg: 0,
            //setting a variable to control the autoscroll
            interval: 0
        }
    },
    methods: {
        //function to go to the previous image
        prevImg(){
            if (this.indexImg === 0){
                this.indexImg = this.images.length - 1;
            }else{
                this.indexImg--;
            }
        },
        //function to go to the next image
        nextImg(){
            if (this.indexImg === this.images.length - 1){
                this.indexImg = 0;
            }else{
                this.indexImg++;
            }
        },
        //function to start the autoscroll
        startInterval(){
            this.interval = setInterval(this.nextImg, 3000);
        },
        //function to stop the autoscroll
        stopInterval(){
            clearInterval(this.interval);
        },
        //function to change slide
        changeSlide(index){
            this.indexImg = index;
        }    
    },
    //when the page is mounted start the autoscroll
    mounted(){
        this.startInterval();
    }
}).mount('#app')