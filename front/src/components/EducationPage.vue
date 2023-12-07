<template>
    <div>
      <Navbar></Navbar>
  
      <section class="py-8">
        <div class="container mx-auto">
          <h2 class="text-3xl font-semibold mb-4">Quiz Écologique</h2>
  
          <!-- Question 1 -->
          <div v-if="currentQuestionIndex === 0">
            <p class="text-lg mb-2">Question 1: Le recyclage contribue à la réduction des déchets.</p>
            <button @click="checkAnswer(true)" class="btn-quiz">Vrai</button>
            <button @click="checkAnswer(false)" class="btn-quiz">Faux</button>
          </div>
  
          <div v-if="answerVisible" class="mt-4">
            <p>Réponse: Vrai</p>
            <p>{{ answerExplanation[currentQuestionIndex] }}</p>
          </div>
  
          <button v-if="answerVisible" @click="nextQuestion" class="btn-next">Suivant</button>
        </div>
      </section>
    
    </div>
  </template>
  
  <script>
  import Navbar from './Items/Navbar.vue';
  
  export default {
    name: 'EducationPage',
    components: { Navbar },
    data() {
      return {
        answerCorrect: null,
        answerExplanation: [
          "Le recyclage contribue à la réduction des déchets en réutilisant des matériaux plutôt que de les jeter.",
        ],
        currentQuestionIndex: 0,
        answerVisible: false,
      };
    },
    methods: {
      checkAnswer(userAnswer) {
        this.answerCorrect = userAnswer === true;
        this.answerVisible = true;
      },
      nextQuestion() {
        this.currentQuestionIndex++;
        this.answerVisible = false;
      },
    },
  };
  </script>
  
  <style>
  .btn-quiz {
    background-color: white;
    border: 1px solid #000;
    color: #000;
    padding: 8px 16px;
    margin-right: 8px;
    cursor: pointer;
  }
  
  .btn-next {
    background-color: #4caf50;
    color: white;
    padding: 8px 16px;
    margin-top: 8px;
    cursor: pointer;
  }
  
  /* Ajoutez du style au besoin */
  </style>
  