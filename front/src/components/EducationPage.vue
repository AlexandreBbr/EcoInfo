<template>
    <div>
        <Navbar></Navbar>

        <section class="py-8 flex justify-center items-center bg-question-section h-screen">
            <div v-if="!quizComplete" class="container mx-auto bg-white rounded p-8">
                <h2 class="text-3xl font-semibold mb-4">Quiz Écologique</h2>
                <!-- do you know who Rick Astley is? -->
                <div v-if="currentQuestionIndex === 0" class="text-center">
                    <p class="text-lg mb-2">Le recyclage contribue à la réduction des déchets.</p>
                    <button @click="checkAnswer(true)"
                        :class="{ 'btn-quiz': true, 'btn-correct': answerCorrect === true && answerGiven }"
                        :disabled="answerGiven">
                        Vrai
                    </button>
                    <button @click="checkAnswer(false)"
                        :class="{ 'btn-quiz': true, 'btn-incorrect': answerCorrect === false && answerGiven }"
                        :disabled="answerGiven">
                        Faux
                    </button>
                </div>

                <div v-if="currentQuestionIndex === 1" class="text-center">
                    <p class="text-lg mb-2">Le CO2 est essentiel à la vie.</p>
                    <button @click="checkAnswer(true)"
                        :class="{ 'btn-quiz': true, 'btn-correct': answerCorrect === true && answerGiven }"
                        :disabled="answerGiven">
                        Vrai
                    </button>
                    <button @click="checkAnswer(false)"
                        :class="{ 'btn-quiz': true, 'btn-incorrect': answerCorrect === false && answerGiven }"
                        :disabled="answerGiven">
                        Faux
                    </button>
                </div>

                <div v-if="answerVisible" class="mt-4 text-center">
                    <p>Réponse: Vrai</p>
                    <p style="padding: 20px;">{{ answerExplanation[currentQuestionIndex].text }}</p>
                    <p style="padding: 20px;">Source: <a :href="answerExplanation[currentQuestionIndex].source"
                            target="_blank">{{
                                answerExplanation[currentQuestionIndex].source }}</a></p>
                    <button v-if="answerVisible" @click="nextQuestion" class="btn-next">Suivant</button>
                </div>

            </div>
            <div v-else class="mx-auto bg-white rounded p-8 text-center">
                <h2 class="text-3xl font-semibold mb-4">Félicitations, vous avez terminé le quiz!</h2>
                <p>Votre score : {{ correctAnswers }} / {{ answerExplanation.length }}</p>
            </div>
        </section>

    </div>
      <!-- i'm lost in a unknown place, can u find me? you have an hint here: http://localhost:5173/hint -->
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
                {
                    text: "Le recyclage contribue à la réduction des déchets en réutilisant des matériaux plutôt que de les jeter.",
                    source: "https://www.novethic.fr/actualite/environnement/recyclage.html",
                },
                {
                    text: "Le CO2 participe activement à la respiration des êtres vivants et la photosynthèse des plantes.",
                    source: "https://www.geo.fr/environnement/co2-quest-ce-que-le-dioxyde-de-carbone-193560",
                }
            ],
            currentQuestionIndex: 0,
            answerVisible: false,
            answerGiven: false,
            quizComplete: false,
            correctAnswers: 0,
        };
    },
    methods: {
        checkAnswer(userAnswer) {
            this.answerCorrect = userAnswer === true;
            this.answerVisible = true;
            this.answerGiven = true;
            if (this.answerCorrect) {
                this.correctAnswers++;
            }
        },
        nextQuestion() {
            if (this.currentQuestionIndex + 1 === this.answerExplanation.length) {
                this.quizComplete = true;
            } else {
                this.currentQuestionIndex++;
                this.answerVisible = false;
                this.answerGiven = false;
            }
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
    border-radius: 16px;
}

.btn-next {
    background-color: #4c66af;
    color: white;
    padding: 8px 16px;
    margin-top: 58px;
    cursor: pointer;
    border-radius: 16px;
}

.bg-question-section {
    background-color: #0e0c0c15;
}

.h-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btn-correct {
    background-color: #4caf50;
    color: white;
    border-radius: 16px;
    border-color: white;
}

.btn-incorrect {
    background-color: #ff0000;
    color: white;
    border-radius: 16px;
    border-color: white;
}
</style>
  