const app = Vue.createApp({
    data(){
        return {
            courseGoalA : 'Finish the course and Learn Vue!',
            courseGoalB : 'Master Vue and build amazing projects',
            vueLink: 'https://v3.vuejs.org/',
        };
    },
    methods: {
        outputGoal(){
            const random = Math.random()
            if(random < 0.5){
                return this.courseGoalA
            }else{
                return this.courseGoalB
            }
        }
    }
})

app.mount('#user-goal');